import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppGlobal} from "../AppGlobal";
import {LoginPage} from "../pages/login/login";
import {MainPage} from "../pages/main/main";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  main: any;
  login: any;
  rootPage: any;
  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen) {
    this.main = MainPage;
    this.login = LoginPage;
    this.initializeApp();
  }

  initializeApp() {
    if (AppGlobal.getInstance().user.id == null || AppGlobal.getInstance().user.id == '') {
      this.rootPage=this.login;
    }else{
      this.rootPage=this.main;
    }
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
