import { PaymentAddPage } from './payment-add/payment-add';
import { PaymentDetailsPage } from './payment-details/payment-details';
import { Payment } from './../../Classes/Payment';
import { Group } from './../../Classes/Group';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  group: Group;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.group = this.navParams.get("group")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  addPayment() {
    const modal = this.modalCtrl.create(PaymentAddPage, {});
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null || data != undefined) {
        this.group.payments.push(data.payment);
      }
    });
  }
  onPaymentSelected(p: Payment) {
    this.navCtrl.push(PaymentDetailsPage, { payment: p });
  }
}
