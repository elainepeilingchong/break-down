import { CalculatorPage } from './../pages/calculator/calculator';
import { PaymentAddPage } from './../pages/payment/payment-add/payment-add';
import { PaymentDetailsPage } from './../pages/payment/payment-details/payment-details';
import { PaymentPage } from './../pages/payment/payment';
import { GroupCreatePage } from './../pages/group/group-create/group-create';
import { GroupPage } from './../pages/group/group';
import { UserSignupPage } from './../pages/user/user-signup/user-signup';
import { UserLoginPage } from './../pages/user/user-login/user-login';
import { UserPage } from './../pages/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    UserLoginPage,
    UserSignupPage,
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
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    UserLoginPage,
    UserSignupPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
