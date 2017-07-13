import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {User} from "../../Entity/User";
import {AppGlobal} from "../../AppGlobal";
import {LoginPage} from "../login/login";
/**
 * Generated class for the MinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  user: User;

  constructor(private modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private platform: Platform) {
    this.initLoad();
  }


  initLoad() {
    this.user = AppGlobal.getInstance().user;
  };

  goLogin() {
    this.alertCtrl.create({
      title: '确认重新登录？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            let modal = this.modalCtrl.create(LoginPage);
            modal.present();
            modal.onDidDismiss(data => {
              this.initLoad();
              data && console.log(data);
            });
          }
        }
      ]
    }).present();

  }

  exitSoftware() {
    this.alertCtrl.create({
      title: '确认退出软件？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    }).present();
  }
}
