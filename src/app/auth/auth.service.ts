import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
// tslint:disable-next-line: variable-name
 private _userIsAuthenticated = false;
 private url = 'http://healstationfoundation.org/';
 private apiurl = this.url + 'register_hsf.php';

 get userIsAuthenticated() {
   return this._userIsAuthenticated ;
 }
  constructor( httpClient: HttpClient) { }

  Login_reg(logIn: any): Observable<any> {
    let body = JSON.stringify(logIn);
   // this.apiurl = this.LoginUrl;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiurl, body);
  }


  login() {
   this._userIsAuthenticated = true;
 }
 logout() {
  this._userIsAuthenticated = false;
 }
}
