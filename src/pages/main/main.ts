import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {MinePage} from "../mine/mine";
import {MessagePage} from "../management/message";
import {StatistePageModule} from "../statiste/statiste.module";

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  message: any;
  statistics: any;
  mine: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message= MessagePage;
    this.statistics= StatistePageModule;
    this.mine= MinePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
