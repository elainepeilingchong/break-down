import { CalculatorPage } from './../pages/payment/calculator/calculator';
import { PaymentAddPage } from './../pages/payment/payment-add/payment-add';
import { PaymentDetailsPage } from './../pages/payment/payment-details/payment-details';
import { PaymentPage } from './../pages/payment/payment';
import { GroupCreatePage } from './../pages/group/group-create/group-create';
import { GroupPage } from './../pages/group/group';
// import { UserSignupPage } from './../pages/user/user-signup/user-signup';
// import { UserLoginPage } from './../pages/user/user-login/user-login';
import { UserPage } from './../pages/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import firebase from 'firebase';
// import { AuthService } from '../services/auth';


// import { GroupServiceBackup } from '../services/group-function-backup';
//SQLite
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';

// export const config = {
//   apiKey: "AIzaSyCxRLjl4ChYgNaSzCb6s-ZIsssLkDJGjk4",
//   authDomain: "breakdown-1dfb3.firebaseapp.com",
//   databaseURL: "https://breakdown-1dfb3.firebaseio.com",
//   projectId: "breakdown-1dfb3"
//   // ,
//   // storageBucket: "breakdown-1dfb3.appspot.com",
//   // messagingSenderId: "95832041731"
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    // UserLoginPage,
    // UserSignupPage,
    GroupPage,
    GroupCreatePage,
    PaymentPage,
    PaymentDetailsPage,
    PaymentAddPage,
    CalculatorPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    // UserLoginPage,
    // UserSignupPage,
    GroupPage,
    GroupCreatePage,
    PaymentPage,
    PaymentDetailsPage,
    PaymentAddPage,
    CalculatorPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    // AuthService,
    // GroupServiceBackup,
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule { }
