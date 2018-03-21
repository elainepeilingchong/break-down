// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { config } from "../app/app.module";
// import { Group } from "../Classes/Group";
// import { AuthService } from "./auth";
// import { Observable } from "rxjs/Observable";
// import firebase from "firebase";
// import 'firebase/firestore';
// @Injectable()
// export class GroupServiceBackup {
//     private groups: Group[] = [];
//     count = 0;
//     private _DB: any;
//     constructor(private httpClient: HttpClient, private authService: AuthService) {
//         this._DB = firebase.firestore();
//     }
//     // createAndPopulateDocument(collectionObj: string,
//     //     docID: string,
//     //     dataObj: any): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         this._DB
//     //             .collection(collectionObj)
//     //             .doc(docID)
//     //             .set(dataObj, { merge: true })
//     //             .then((data: any) => {
//     //                 resolve(data);
//     //             })
//     //             .catch((error: any) => {
//     //                 reject(error);
//     //             });
//     //     });
//     // }
//     // getDocuments(collectionObj: string): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         this._DB.collection(collectionObj)
//     //             .get()
//     //             .then((querySnapshot) => {
//     //                 // Declare an array which we'll use to store retrieved documents
//     //                 let obj: any = [];
//     //                 // Iterate through each document, retrieve the values for each field
//     //                 // and then assign these to a key in an object that is pushed into the
//     //                 // obj array
//     //                 querySnapshot
//     //                     .forEach((doc: any) => {
//     //                         obj.push(new Group(doc.id, doc.data().name, doc.data().description, doc.data().members, doc.data().createdDate, doc.datat().payments));
//     //                     });
//     //                 // Resolve the completed array that contains all of the formatted data
//     //                 // from the retrieved documents
//     //                 resolve(obj);
//     //             })
//     //             .catch((error: any) => {
//     //                 reject(error);
//     //             });
//     //     });
//     // }
//     // addDocument(collectionObj: string,
//     //     dataObj: any): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         this._DB.collection(collectionObj).add(dataObj)
//     //             .then((obj: any) => {
//     //                 resolve(obj);
//     //             })
//     //             .catch((error: any) => {
//     //                 reject(error);
//     //             });
//     //     });
//     // }
//     // deleteDocument(collectionObj: string,
//     //     docID: string): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         this._DB
//     //             .collection(collectionObj)
//     //             .doc(docID)
//     //             .delete()
//     //             .then((obj: any) => {
//     //                 resolve(obj);
//     //             })
//     //             .catch((error: any) => {
//     //                 reject(error);
//     //             });
//     //     });
//     // }
//     // updateDocument(collectionObj: string,
//     //     docID: string,
//     //     dataObj: any): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         this._DB
//     //             .collection(collectionObj)
//     //             .doc(docID)
//     //             .update(dataObj)
//     //             .then((obj: any) => {
//     //                 resolve(obj);
//     //             })
//     //             .catch((error: any) => {
//     //                 reject(error);
//     //             });
//     //     });
//     // }
//     getGroups() {
//         return this.groups;
//     }
//     addGroup(group: Group) {
//         this.groups.push(group);
//         // const userId = this.authService.getActiveUser().uid;
//         // firebase.database().ref('/'+userId + '/group').on("child_added", function(snap) {
//         //     this.count++;
//         //     console.log("added");
//         //   });

//     }
//     storeGroup(token: string) {
//         // post=add not merge
//         const userId = this.authService.getActiveUser().uid;
//         var url = config.databaseURL + '/' + userId + '/group.json?auth=' + token;
//         return new Promise(resolve => {
//             this.httpClient.put(url, JSON.stringify(this.groups)).subscribe(res => {
//                 resolve(res);
//             }, (err) => { console.log(err); });
//         });
//     }
//     // getGroups() {
//     //     let arr;
//     //     const userId = this.authService.getActiveUser().uid;
//     //     var url = config.databaseURL + '/' + userId + '/group.json';
//     //     // return new Promise(resolve => {
//     //     //     this.httpClient.get(url).subscribe(data => {
//     //     //         resolve(data);
//     //     //     }, err => { console.log(err); });
//     //     // });
//     //     firebase.database().ref('/'+userId + '/group.json').on('value',function(snapshot){
//     //         arr=this.snapshotToArray(snapshot);
//     //         //  arr = Object..entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));
//     //         console.log("initial data loaded!", Object.keys(snapshot.val()).length === count);
//     //     },function(errorObject){
//     //         console.log("Failed"+errorObject.code);
//     //     })
//     //     return arr;

//     // }
//     snapshotToArray(snapshot) {
//         var returnArr = [];

//         snapshot.forEach(function (childSnapshot) {
//             var item = childSnapshot.val();
//             item.key = childSnapshot.key;

//             returnArr.push(item);
//         });

//         return returnArr;
//     };

// }