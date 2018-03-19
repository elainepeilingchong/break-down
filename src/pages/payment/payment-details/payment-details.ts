import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Payment } from '../../../Classes/Payment';

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {
payment:Payment;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.payment=this.navParams.get("payment");
console.log(this.payment);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailsPage');
  }

}
