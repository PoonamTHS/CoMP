import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-regfamily',
  templateUrl: './regfamily.page.html',
  styleUrls: ['./regfamily.page.scss'],
})
export class RegfamilyPage implements OnInit {


  constructor(private router: Router, private RegCtrl: LoadingController) { }
  isRegister = false;

  ngOnInit() {
  }
  onSub(form: NgForm) {

    if (!form.valid) {
      return;
    }
  }
  onReg() {
    this.isRegister = true;
    this.RegCtrl
      .create({keyboardClose: true , message: ' Registerated Successfully..'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isRegister = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/reg-family-member');
           }, 1500);
          });

  }
}
