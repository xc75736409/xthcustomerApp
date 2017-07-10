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
import {NativeService} from "../providers/NativeService";
import {AppVersion} from "@ionic-native/app-version";
import {Camera} from "@ionic-native/camera";
import {Toast} from "@ionic-native/toast";
import {File} from '@ionic-native/file';
import {Transfer} from "@ionic-native/transfer";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Network} from "@ionic-native/network";
import {AppMinimize} from "@ionic-native/app-minimize";
import {Utils} from "../providers/Utils";
import {ImagePicker} from "@ionic-native/image-picker";

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
    NativeService,
    AppServer,
    StatusBar,
    SplashScreen,

    AppVersion,
    ImagePicker,
    Camera,
    Toast,
    File,
    Transfer,
    InAppBrowser,
    Network,
    AppMinimize,
    Utils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
