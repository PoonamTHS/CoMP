import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 onLog() {
   this.router.navigateByUrl('/auth');

 }
}
