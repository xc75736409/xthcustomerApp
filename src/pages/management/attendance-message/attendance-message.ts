import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LeaveApplicationPage} from "./leave-application/leave-application";
import {AttendanceDetailPage} from "./attendance-detail/attendance-detail";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'attendance-message',
  templateUrl: 'attendance-message.html',
})
export class AttendanceMessagePage{

  leavelist = [
    {name:'张三',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',sendtime:'2017-06-21 11:20:20',isread:'0'},
    {name:'张三',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',sendtime:'2017-06-21 11:20:20',isread:'0'},
    {name:'张三',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',sendtime:'2017-06-21 11:20:20',isread:'0'},
    {name:'张三',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',sendtime:'2017-06-21 11:20:20',isread:'0'},
    {name:'张三',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',sendtime:'2017-06-21 11:20:20',isread:'0'}
  ];
  attendance = {normal:20,leave:5};
  nowtime = null;
  timer = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('message');
    this.nowtime = new Date();
    this.timer = setInterval(() => {
      this.nowtime = new Date();
    }, 1000);
   /* Observable.interval(100)
      .flatMap(() => {
        this.nowtime = new Date();
    })
      .subscribe()*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendanceMessagePage');
  }
  go(item){
    item.isread = '1';
    this.navCtrl.push(LeaveApplicationPage,{leave:item});
  }
  detail(){
    this.navCtrl.push(AttendanceDetailPage);
  }
}
