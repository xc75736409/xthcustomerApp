import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {MyApp} from "./app.component";

import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {LoginPageModule} from "../pages/login/login.module";
import {LoginPage} from "../pages/login/login";
import {MainPage} from "../pages/main/main";
import {MainPageModule} from "../pages/main/main.module";
import {MinePageModule} from "../pages/mine/mine.module";
import {MessagePageModule} from "../pages/management/message.module";
import {AppServer} from "../services/appServer";
import {HttpModule} from "@angular/http";
import {StatistePageModule} from "../pages/statiste/statiste.module";

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MainPageModule,
    MessagePageModule,
    LoginPageModule,
    MinePageModule,
    StatistePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    , LoginPage
    , MainPage
  ],
  providers: [
    AppServer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
