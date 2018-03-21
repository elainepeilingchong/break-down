import { PayerPayeePrice } from './../../../Classes/PayeePrice';
import { Payee } from './../../../Classes/Payee';
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
  count: number = 0;
  payment: Payment = new Payment(1, 0, [], [], new Date(), "", "");
  group: Group;
  payers: Array<any> = [];
  message: string = "";
  remaidingPayerPrice: number = 0;
  remaidingPayeePrice: number = 0;
  constructor(public popoverCtrl: PopoverController, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.group = this.navParams.get("group");
  }

  ionViewDidLoad() {
    this.generatePayee();
  }
  generatePayee() {
    for (var i = 0; i < this.group.members.length; i++) {
      this.payment.payee.push(new Payee(1, 1, this.group.members[i], 0, "", 1, [], 0))
    }
  }
  onGeneratePayeeEqualQuantityPrice() {
    // var quantity = this.payment.payee.map(i=> typeof i.quantity=="number"? i.quantity:eval(i.quantity));
    // var total  =quantity.reduce((a,b)=>a+b,0);
    var total = this.payment.payee.reduce(function (acc, b) { return acc + (typeof b.quantity == "number" ? b.quantity : eval(b.quantity)) }, 0);
    var equalPrice = this.payment.price / total;
    for (var i = 0; i < this.group.members.length; i++) {
      this.payment.payee[i].priceOwe = equalPrice * this.payment.payee[i].quantity;
    }
    this.calculateRemaindingPayeePrice();
  }
  onGeneratePayeeEqualPrice() {
    var equalPrice = this.payment.price / this.payment.payee.length;
    for (var i = 0; i < this.group.members.length; i++) {
      this.payment.payee[i].priceOwe = equalPrice;
    }
    this.calculateRemaindingPayeePrice();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  onAdd(add = false) {
    var remaining = this.payment.price;
    var ee = 0;
    var er = 0;
    for (let ee of this.payment.payee) {
      ee.remainingAmount = ee.priceOwe;
    }
    for (let er of this.payment.payer) {
      er.remainingAmount = er.pricePaid;
    }
    while (ee != this.payment.payee.length && er != this.payment.payer.length) {
      console.log("while");
      console.log(er);
      console.log(this.payment.payer[er].remainingAmount);
      if ((this.payment.payee[ee].payerPrice.reduce(function (acc, b) { return acc + b.price }, 0)) != this.payment.payee[ee].priceOwe) {
        if (this.payment.payer[er].remainingAmount < this.payment.payee[ee].remainingAmount) {
          this.payment.payee[ee].payerPrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payer[er].remainingAmount));
          this.payment.payer[er].payeePrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payer[er].remainingAmount));
          this.payment.payee[ee].remainingAmount = this.payment.payee[ee].remainingAmount - this.payment.payer[er].remainingAmount;
          this.payment.payer[er].remainingAmount = 0;
          er++;
        } else if (this.payment.payer[er].remainingAmount > this.payment.payee[ee].remainingAmount) {
          this.payment.payee[ee].payerPrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payee[ee].remainingAmount));
          this.payment.payer[er].payeePrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payee[ee].remainingAmount));
          this.payment.payer[er].remainingAmount = this.payment.payer[er].remainingAmount - this.payment.payee[ee].remainingAmount;
          this.payment.payee[ee].remainingAmount = 0;
          
          ee++;
        } else if (this.payment.payer[er].remainingAmount == this.payment.payee[ee].remainingAmount) {
          this.payment.payee[ee].payerPrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payee[ee].remainingAmount));
          this.payment.payer[er].payeePrice.push(new PayerPayeePrice(1, this.payment.payer[er].id, this.payment.payee[ee].id, this.payment.payee[ee].remainingAmount));
          this.payment.payee[ee].remainingAmount = 0;
          this.payment.payer[er].remainingAmount = 0;
          ee++;
          er++;
        }
      }
    }
    console.log(this.payment);
    this.viewCtrl.dismiss({ payment: this.payment });
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
      this.calculateRemaindingPayeePrice();
      this.calculateRemaindingPayerPrice();
    });
  }
  calculateRemaindingPayeePrice() {
    this.remaidingPayeePrice = this.payment.price - this.payment.payee.reduce(function (acc, b) { return acc + b.priceOwe }, 0);
  }
  calculateRemaindingPayerPrice() {
    if (this.payment.payer != null || this.payment.payer != undefined) {
      this.remaidingPayerPrice = this.payment.price - this.payment.payer.reduce(function (acc, b) { return acc + b.pricePaid }, 0);
    } else {
      this.remaidingPayerPrice = this.payment.price;
    }
  }
  onPayerPriceChange(p: Payer) {
    var total = this.payment.payer.reduce(function (acc, b) { return acc + b.pricePaid; }, 0);
    if (total > this.payment.price) {
      this.message = "The price is less than the payers' paid price";
    } else if (total > this.payment.price) {
      this.message = "The price is more than the payers' paid price";
    } else {
      this.message = "";
    }
    this.calculateRemaindingPayerPrice();
  }
  onPayeePriceChange() {
    var total = this.payment.payee.reduce(function (acc, b) { return acc + b.priceOwe; }, 0);
    if (total > this.payment.price) {
      this.message = "The price is less than the payees' paid price";
    } else if (total > this.payment.price) {
      this.message = "The price is more than the payees' paid price";
    } else {
      this.message = "";
    }
    this.calculateRemaindingPayeePrice();
  }
  onGeneratePayerEqualPrice() {
    var equalPrice = this.payment.price / this.payers.length;
    for (var i = 0; i < this.payment.payer.length; i++) {
      this.payment.payer[i].pricePaid = equalPrice;
    }
    this.calculateRemaindingPayerPrice();
  }
  onGeneratePayeeEqualRemaindingPrice() {
    var temp: Array<Payee> = [];
    for (var i = 0; i < this.payment.payee.length; i++) {
      if (this.payment.payee[i].priceOwe == 0) {
        temp.push(this.payment.payee[i]);
      }
    }
    var equalRemainding = (this.payment.price - this.payment.payee.reduce(function (acc, b) { return acc + (typeof b.priceOwe == "number" ? b.priceOwe : eval(b.priceOwe)) }, 0)) / temp.reduce(function (acc, b) { return acc + (typeof b.quantity == "number" ? b.quantity : eval(b.quantity)) }, 0);
    for (var c = 0; i < temp.length; c++) {
      temp[c].priceOwe = temp[c].quantity * equalRemainding;
    }
  }
  onPayerChange() {
    var equalPrice = this.payment.price / this.payers.length;
    for (var i = 0; i < this.payers.length; i++) {
      var payer = new Payer(this.count++, this.payment.id, this.payers[i], equalPrice, [], 0);
      if (this.payment.payer == null || this.payment.payer == undefined) {
        this.payment.payer = [];
      }
      var id = this.payment.payer.findIndex(x => x.user == this.payers[i])
      if (id == -1) {
        this.payment.payer.push(payer);
      } else {
        this.payment.payer[id].pricePaid = equalPrice;
      }

    }
    let missing = this.payment.payer.filter(item => this.payers.indexOf(item.user) < 0);
    for (var a = 0; a < missing.length; a++) {
      var index = this.payment.payer.findIndex(x => x.user.name == missing[a].user.name);
      if (index != -1) {
        this.payment.payer.splice(index, 1);
      }

    }
    this.calculateRemaindingPayerPrice();
  }
  // onPayeeQuantityChange(p: Payee) {
  //   p.priceOwe = p.priceOwe * p.quantity;
  //   this.calculateRemaindingPayeePrice();
  // }
  onPriceChange() {
    if (this.payment.price != null || this.payment.price != undefined) {
      this.calculateRemaindingPayeePrice();
      this.calculateRemaindingPayerPrice();
    }

  }
}
