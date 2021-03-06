import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../../../services/auth';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignupPage {
  constructor(private authService:AuthService,private loadingCtrl:LoadingController,private alertCtrl:AlertController){
  }
  onSignUp(form: NgForm) {
    const loading=this.loadingCtrl.create({
      content:"Signing you up..."
    });
    loading.present();
    this.authService.signup(form.value.email,form.value.password)
    .then(data=> {
      loading.dismiss();
    })
    .catch(error =>{
      loading.dismiss();
      const alert=this.alertCtrl.create({
        title:'Signup failed',
        message : error.message,
        buttons:['OK']
      });
      alert.present();
    });
  }


}
