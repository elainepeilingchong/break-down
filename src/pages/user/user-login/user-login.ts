import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../../../services/auth';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {
  constructor(private authService:AuthService,private loadingCtrl:LoadingController,private alertCtrl:AlertController){
  }
  onSignIn(form: NgForm) {
    const loading=this.loadingCtrl.create({
      content:"Signing you in..."
    });
    loading.present();
    this.authService.signin(form.value.email,form.value.password)
    .then(data=> {
      loading.dismiss();
    })
    .catch(error =>{
      loading.dismiss();
      const alert=this.alertCtrl.create({
        title:'Signin failed',
        message : error.message,
        buttons:['OK']
      });
      alert.present();
    });
  }

}
