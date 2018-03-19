import { GroupCreatePage } from './group-create/group-create';
import { User } from './../../Classes/User';
import { Group } from './../../Classes/Group';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { AuthService } from '../../services/auth';
import { GroupService } from '../../services/group-function';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  groups: Array<Group> = [];
  users: Array<User>;
  user: User;
  // // Defines the name of the database collection
  // private _COLL: string = "Group";
  // // Defines the initial document ID for the database collection
  // private _DOC: string = "Xy76Re34SdFR1";
  // // Used to store/provide the initial document data for the database collection
  // private _CONTENT: any;
  // // Property to store the returned documents from the database collection
  // public locations: any;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private groupService: GroupService,private alertCtrl:AlertController) {
    // this._CONTENT = new Group(1, "test1", "DWS", [], new Date(), []);
    this.user = this.navParams.get("user");
    // this.groups = this.groupService.getGroup();
    this.groups = this.groupService.getGroups();
  }

  // ionViewDidEnter() {
  //   this.retrieveCollection();
  // }

  // /**
  //   * Creates the collection and populates that with an initial document
  //   * using the createAndPopulateDocument method of the DatabaseProvider
  //   * service
  //   *
  //   * @public
  //   * @method generateCollectionAndDocument
  //   * @return {none}
  //   */
  // generateCollectionAndDocument(): void {
  //   this.groupService.createAndPopulateDocument(this._COLL,
  //     this._DOC,
  //     this._CONTENT)
  //     .then((data: any) => {
  //       console.dir(data);
  //     })
  //     .catch((error: any) => {
  //       console.dir(error);
  //     });
  // }
  // /**
  // * Retrieve all documents from the specified collection using the
  // * getDocuments method of the DatabaseProvider service
  // *
  // * @public
  // * @method retrieveCollection
  // * @return {none}
  // */
  // retrieveCollection(): void {
  //   this.groupService.getDocuments(this._COLL)
  //     .then((data) => {

  //       // IF we don't have any documents then the collection doesn't exist
  //       // so we create it!
  //       if (data.length === 0) {
  //         this.generateCollectionAndDocument();
  //       }

  //       // Otherwise the collection does exist and we assign the returned
  //       // documents to the public property of locations so this can be
  //       // iterated through in the component template
  //       else {
  //         this.locations = data;
  //       }
  //     })
  //     .catch();
  // }




  // /**
  //  * Navigate to the manage-document component to begin adding a new document
  //  *
  //  * @public
  //  * @method addDocument
  //  * @return {none}
  //  */
  // addDocument(): void {
  //   this.navCtrl.push('manage-document');
  // }




  // /**
  //  * Update a document by passing the data to the manage-document component
  //  *
  //  * @public
  //  * @method updateDocument
  //  * @param  obj          {Object}           The document data we wish to update
  //  * @return {none}
  //  */
  // updateDocument(obj): void {
  //   let params: any = {
  //     collection: this._COLL,
  //     location: obj
  //   };
  //   this.navCtrl.push('manage-document', { record: params, isEdited: true });
  // }




  // /**
  //  * Delete a document from the Cloud Firestore collection using the
  //  * deleteDocument method of the DatabaseProvider service
  //  *
  //  * @public
  //  * @method deleteDocument
  //  * @param  obj          {Object}           The document ID for the document we wish to delete
  //  * @return {none}
  //  */
  // deleteDocument(obj): void {
  //   this.groupService.deleteDocument(this._COLL,
  //     obj.id)
  //     .then((data: any) => {
  //       this.displayAlert('Success', 'The record ' + obj.city + ' was successfully removed');
  //     })
  //     .catch((error: any) => {
  //       this.displayAlert('Error', error.message);
  //     });
  // }




  // /**
  //  * Provide feedback to user after an operation has succeeded/failed
  //  *
  //  * @public
  //  * @method displayAlert
  //  * @param  title          {String}           Heading for alert message
  //  * @param  message        {String}           Content for alert message
  //  * @return {none}
  //  */
  // displayAlert(title: string,
  //   message: string): void {
  //   let alert: any = this.alertCtrl.create({
  //     title: title,
  //     subTitle: message,
  //     buttons: [{
  //       text: 'Got It!',
  //       handler: () => {
  //         this.retrieveCollection();
  //       }
  //     }]
  //   });
  //   alert.present();
  // }
  addGroup() {
    const modal = this.modalCtrl.create(GroupCreatePage, {});
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null || data != undefined) {
        this.groupService.addGroup(data.group);
      }
    });
  }
  // getGroups(){
  //   this.groupService.getGroups()
  //   // .then(data=>{
  //   //   this.groups=data;
  //   // })
  // }
  onStore() {
    // this.authService.getActiveUser().getToken()
    // .then((token: string) => {
    //   this.groupService.storeGroup(token).subscribe(
    //     () => console.log('Success'),
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // });
  }
  // this.restapiService.saveUser(this.user).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  onGroupSelected(group: Group) {
    this.navCtrl.push(PaymentPage, { group: group });
  }
  onLoadData() {

  }
}
