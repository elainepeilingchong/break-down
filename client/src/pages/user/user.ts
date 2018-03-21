import { DatabaseProvider } from './../../providers/database/database';
import { GroupPage } from './../group/group';
import { User } from './../../Classes/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  username: string;
  users: User[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private databaseProvider: DatabaseProvider) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadUsersData();
      }
    });
  }
  loadUsersData() {
    this.databaseProvider.getAllUsers().then(data => {
      this.users = data;
    });
  }
  addUser() {
    this.databaseProvider.addUser(this.username).then(data => {
      this.loadUsersData();
    });
    this.username = "";
  }
  signUp() {
    var user = new User(1, this.username);
    this.navCtrl.push(GroupPage, { user: user });
  }
  isValid() {
    return (this.username != null && this.username != undefined)
  }
}
