import { PaymentAddPage } from './payment-add/payment-add';
import { PaymentDetailsPage } from './payment-details/payment-details';
import { Payment } from './../../Classes/Payment';
import { Group } from './../../Classes/Group';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { User } from '../../Classes/User';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  members:Array<User>= [new User(1,"elaine"),new User(2,"mindy"),new User(3,"grace")]
  group: Group=new Group(1,"Fun","trip to italy",this.members,new Date("14 March 2018"),[]);
  constructor(public toastCtrl: ToastController,public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    // this.group = this.navParams.get("group")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  addPayment() {
    const modal = this.modalCtrl.create(PaymentAddPage, { group: this.group });
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null || data != undefined) {
        this.group.payments.push(data.payment);
        this.presentToast('Payment was added successfully');
      }
    });
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position:'Top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  onPaymentSelected(p: Payment) {
    this.navCtrl.push(PaymentDetailsPage, { payment: p });
  }
}
