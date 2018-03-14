import { GroupPage } from './../group/group';
import { User } from './../../Classes/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  username: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  signUp(){
    var user = new User(1,this.username);
    this.navCtrl.push(GroupPage,{user:user});
  }
  isValid(){
    return (this.username !=null && this.username !=undefined)
  }
}
