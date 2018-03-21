import { Group } from './../../../Classes/Group';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-group-create',
  templateUrl: 'group-create.html',
})
export class GroupCreatePage {
  @ViewChild('f') addGroupForm: NgForm;
  group: Group = new Group(1, "","", [], new Date(), []);
  constructor(private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreatePage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  onAdd(add = false) {
    this.group.name = this.addGroupForm.value.name;
    this.viewCtrl.dismiss({group:this.group});
  }

  isValid() {
    return (
      this.addGroupForm.value.name != null && this.addGroupForm.value.name != undefined && this.addGroupForm.value.name != "")
  }
  addMember() {
    if (this.addGroupForm.value.groupMember != "" && this.addGroupForm.value.groupMember != null && this.addGroupForm.value.groupMember != undefined) {
      this.group.members.push(this.addGroupForm.value.groupMember);
      this.addGroupForm.value.groupMember = "";
    }
  }
}
