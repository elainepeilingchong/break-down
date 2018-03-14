import { User } from './../../Classes/User';
import { Group } from './../../Classes/Group';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  groups: Array<Group>;
  users: Array<User>;
  user: User;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  addGroup(){
this.modalCtrl.create
  }
}
