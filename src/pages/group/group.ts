import { GroupCreatePage } from './group-create/group-create';
import { User } from './../../Classes/User';
import { Group } from './../../Classes/Group';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  groups: Array<Group>=[];
  users: Array<User>;
  user: User;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  addGroup() {
    const modal = this.modalCtrl.create(GroupCreatePage, {});
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null || data != undefined) {
        this.groups.push(data.group);
      }
    });
  }
  onGroupSelected(group:Group){
    this.navCtrl.push(PaymentPage,{group:group});
  }
}
