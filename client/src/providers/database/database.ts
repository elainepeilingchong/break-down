import { Platform } from 'ionic-angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { User } from '../../Classes/User';
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>
  constructor(public http: HttpClient, private sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'breakdown.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('database_filled').then(val => {
          if (val) {
            this.databaseReady.next(true);
          } else {
            this.fillDatabase();
          }
        })
      });
    });
  }
  fillDatabase() {
    this.http.get('assets/dummyDump.sql').map(res => res.toString()).subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql).then(data => {
        this.databaseReady.next(true);
        this.storage.set('database_filled', true);
      }).catch(e => console.log(e));
    });
  }
  addUser(username: string) {
    let data = [username];
    return this.database.executeSql("INSERT INTO user (name) VALUES (?)", data).then(res => {
      return res;
    })
  }
  getAllUsers() {
    return this.database.executeSql("SELECT * FROM user", []).then(data => {
      let users = [];
      if (data.row.length > 0) {
        for (var i = 0; i < data.row.length; i++) {
          users.push(new User(data.rows.item(i).id, data.rows.item(i).name));
        }
      }
      return users;
    }, err => {
      console.log("Err: ", err);
      return [];
    });

  }
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
}
