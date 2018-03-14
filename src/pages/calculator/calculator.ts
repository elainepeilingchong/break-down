import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  btnClicked(btn:string){
    if(btn=='C'){
      this.result="";
    }else if(btn=="="){
      this.result = eval(this.result);
    }else{
      this.result +=btn;
    }
  }
}
