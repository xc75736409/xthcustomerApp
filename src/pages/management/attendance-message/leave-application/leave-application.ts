import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'leave-application',
  templateUrl: 'leave-application.html',
})
export class LeaveApplicationPage {

  leave = {
    name:'张三',
    img:'assets/img/thumbnail-totoro.png',
    content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',
    sendtime:'2017-06-21 11:20:20',
    isread:'0',
    examinetype:'0',
    leavetype:'事假',
    begintime:'2017-06-20',
    endtime:'2017-06-23',
    reason:'sdfsfdfds'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('leave');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }
  agree(a){
    if(a){
      this.leave.examinetype = '1';
      alert("同意成功");
    }else {
      this.leave.examinetype = '2';
      alert("拒绝成功");
    }
  }

}
