import { PaymentPage } from './../pages/payment/payment';
// import { CalculatorPage } from './../pages/payment/calculator/calculator';
import { UserPage } from './../pages/user/user';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import firebase from 'firebase';
// import { config } from './app.module';
// import { UserSignupPage } from '../pages/user/user-signup/user-signup';
import { GroupPage } from '../pages/group/group';
// import { UserLoginPage } from '../pages/user/user-login/user-login';
// import { AuthService } from '../services/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserPage;

  pages: Array<{ title: string, component: any, authenticated:boolean }>;
  isAuthenticated = false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    // check check in
    // firebase.initializeApp(config);
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.isAuthenticated = true;
    //     this.rootPage=GroupPage;
       
    //   }
    //   else {
    //     this.isAuthenticated = false;
    //     this.rootPage=UserLoginPage;
    //   }
    // })
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage , authenticated:true},
      { title: 'Group', component: GroupPage ,authenticated:true}
      // { title: 'SignUp', component: UserSignupPage ,authenticated:false},
      // { title: 'SignIn', component: UserLoginPage ,authenticated:false}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  onLogout(){
    // this.authService.logout();
  }
}
