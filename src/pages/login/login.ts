import {Component} from "@angular/core";
import {AlertController, IonicPage, Platform, ToastController, ViewController} from "ionic-angular";
import {AppServer} from "../../services/appServer";
import {AppGlobal} from "../../AppGlobal";
import {User} from "../../Entity/User";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = '';
  password: string = '';
  user: User = AppGlobal.getInstance().user;
  canLeave: boolean = false;

  constructor(private viewCtrl: ViewController,
              private appServer: AppServer,
              private toastCtrl: ToastController,
              private platform: Platform,
              private alertCtrl: AlertController) { }

  ionViewWillEnter() {
    console.log(this.user);
    if (this.user.id != null && this.user.id != '') {
      this.username = this.user.username;
      this.password = this.user.password;
    }
  }

  toLogin() {
    if (this.username == '') {
      this.toastCtrl.create({
        message: '请输入用户名',
        duration: 3000
      }).present();
      return;
    }
    if (this.password == '') {
      this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000
      }).present();
      return;
    }
    this.appServer.httpPost("/app/userLogin", {userName: this.username, passWord: this.password}).subscribe(
      res => {
        if (res['state'] == '201') {
          localStorage.setItem("id", res['user']['id']);
          localStorage.setItem("username", this.username);
          localStorage.setItem("password", this.password);
          localStorage.setItem("realname", res['user']['realname']);
          localStorage.setItem("role", res['user']['role']);
          this.viewCtrl.dismiss(AppGlobal.getInstance().user);
        } else {
          this.toastCtrl.create({
            message: '用户名或密码错误',
            duration: 3000,
          }).present();
        }
      },
      error => {
        alert('未知错误');
        console.log(error);
      }
    );
  }

  ionViewCanLeave(): boolean {
    let bool = !!this.user.id;
    if (this.canLeave || bool) {
      return true;
    } else {
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
      return false;
    }
  }
}
