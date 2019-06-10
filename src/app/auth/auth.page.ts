import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingController } from '@ionic/angular';
import { NgForm, FormBuilder , FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
// tslint:disable-next-line: max-line-length
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController ,
    private formBuilder: FormBuilder) {
      this.LoginForm = formBuilder.group({
        emailid: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });

  }
  LoginForm: FormGroup;
  isLoading = false;
  isLogin = true;
  showSplash = true;
  
  errorMessages = {
    emailid: [
      { type: 'required', message: 'Email ID is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };
  ngOnInit() {}

  onLogin() {                                                   // Loading Controller
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
    .create({keyboardClose: true , message: ' Logging in..'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/dash/tabs/home');
         }, 1500);
        });


  }
  onReg() {
    this.router.navigateByUrl('/reg');
  }
  onSubmit() {

    if (this.LoginForm.invalid) {
    } else {
      this.authService.Login_reg(this.LoginForm.value)
      .subscribe(
        data => {
          console.log('dtaaaaaaaa>>>>>>>:' + data);
          console.log('this.LoginForm.value>>>>>>>>>>>>:', this.LoginForm.value);
          this.LoginForm.reset();
          this.router.navigate(['/dash/tabs/home']);
        },
        error => {
          console.log('error>>>>>>>:' + error);
        }
      );

    }

  }
}
