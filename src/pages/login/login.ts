import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../main/main";
import {AppServer} from "../../services/appServer";

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

  constructor(private navCtrl: NavController,
              private appServer: AppServer,
              private toastCtrl: ToastController,) {
  }

  toLogin() {
    if(this.username==''){
      this.toastCtrl.create({
        message: '请输入用户名',
        duration: 3000
      }).present();
      return;
    }
    if(this.password==''){
      this.toastCtrl.create({
        message: '请输入密码',
        duration: 3000
      }).present();
      return;
    }
    this.appServer.httpPost("/app/userLogin",{userName:this.username,passWord:this.password}).subscribe(
      res=>{
        if (res['state'] == '201') {
          sessionStorage.setItem("id", res['user']['id']);
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("realname", res['user']['realname']);
          sessionStorage.setItem("role", res['user']['role']);
          this.navCtrl.setRoot(MainPage);
        }else{
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

}
