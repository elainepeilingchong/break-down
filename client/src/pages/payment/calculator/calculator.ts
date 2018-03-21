import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  str: string = "";
  display: string = "0";
  tempResult: number = 0;
  firstNum: number;
  secondNum: number;
  operant: string = "";
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  btnClicked(btn: string) {
    if (btn == 'C') {
      this.display = "0";
      this.str = "";
      this.tempResult = 0;
      this.firstNum = 0;
      this.secondNum = 0;
      this.operant = "";
    }
    else if(btn == 'dot'){
      this.str = this.str + "." ;
      this.display = this.str
    }
  }
  deleteLetter() {
    this.str = this.str.substr(0, this.str.length - 1);
    if (this.str.length == 0) {
      this.str = "0";
    }
    this.firstNum = eval(this.str);
    this.display = this.str;
  }
  getNumber(number: number) {
    this.str = this.str + "" + number;
    this.firstNum = eval(this.str);
    this.display = this.str;
  }
  setOperant(operant: string) {
    this.onCalculate();
    this.operant = operant;
    this.str = "";
  }
  getResult() {
    this.onCalculate();
    this.str = "";
    this.display = "" + this.tempResult
    this.firstNum = this.tempResult;
    this.operant = "";
  }
  onCalculate() {
    switch (this.operant) {
      case 'plus': {
        this.tempResult = this.tempResult + this.firstNum;
        break;
      }
      case 'minus': {
        this.tempResult = this.tempResult - this.firstNum;
        break;
      }
      case 'times': {
        this.tempResult = this.tempResult * this.firstNum;
        break;
      }
      case 'divide': {
        this.tempResult = this.tempResult / this.firstNum;
        break;
      }
      default: {
        this.tempResult = this.firstNum;
        break;
      }
    }

  }
  onSubmit(){
    if(this.str.length!=0){
      this.onCalculate();
    }
    this.viewCtrl.dismiss({result:this.tempResult});
  }
}
