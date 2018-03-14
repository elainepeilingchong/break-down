import { User } from './../../../Classes/User';
import { Payer } from './../../../Classes/Payer';
import { CalculatorPage } from '../calculator/calculator';
import { Group } from './../../../Classes/Group';
import { Payment } from './../../../Classes/Payment';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-add',
  templateUrl: 'payment-add.html',
})
export class PaymentAddPage {
  payment: Payment = new Payment(1, 0, [], [], new Date(), "", "");
  group: Group;
  payers:Array<any>=[];
  constructor(public popoverCtrl: PopoverController, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.group = this.navParams.get("group");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentAddPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  onAdd(add = false) {
    console.log(this.payment.payer);
    // this.viewCtrl.dismiss({ payment: this.payment });
  }
  isValid() {
    return (
      this.payment.price != null && this.payment.price != undefined && this.payment.price != 0)
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CalculatorPage);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(data => {
      this.payment.price = data.result;
    });
  }

  onPayerChange(){
    console.log(this.payers);
    for(var i=0; i <this.payers.length;i++ ){
      var payer = new Payer(1,this.payment.id,this.payers[i],0);
      if(this.payment.payer==null || this.payment.payer==undefined){
        this.payment.payer=[];
      }
      this.payment.payer.push(payer);
    }
  }
}
