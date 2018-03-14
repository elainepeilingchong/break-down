import { Group } from './../../../Classes/Group';
import { Payment } from './../../../Classes/Payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../../Classes/User';


@IonicPage()
@Component({
  selector: 'page-payment-add',
  templateUrl: 'payment-add.html',
})
export class PaymentAddPage {
  payment: Payment = new Payment(1, 0, new User(1,"Elaine"));
  group: Group;
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.group = this.navParams.get("group");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentAddPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  onAdd(add = false) {

    this.viewCtrl.dismiss({ group: this.payment });
  }
  isValid() {
    return (
      this.payment.price != null && this.payment.price != undefined && this.payment.price != 0)
  }
}
