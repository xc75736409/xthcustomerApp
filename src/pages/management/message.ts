import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SystemMessagePage} from "./system-message/system-message";
import {AttendanceMessagePage} from "./attendance-message/attendance-message";
import {PatrolMessagePage} from "./patrol-message/patrol-message";
import {AbnormalMessagePage} from "./abnormal-message/abnormal-message";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  items = [];
     doRefresh(refresher) {
       console.log('Begin async operation', refresher);

       setTimeout(() => {
           this.items = [];
           for (var i = 0; i < 30; i++) {
               this.items.push( this.items.length );
             }
           console.log('Async operation has ended');
           refresher.complete();
         }, 2000);
     }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }
  messagetypes = [
    {code:'0',name:'普通消息'},
    {code:'1',name:'系统消息'},
    {code:'2',name:'考勤'},
    {code:'3',name:'巡查'},
    {code:'4',name:'异常报告'}
    ];
  //isread:0-未读,1-已读
  messageList = [
    {sendname:'张三',sendtype:'法人代表',content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:0,sendtime:'2017-06-21 11:20:20',isread:'0'},
    {title:'娱乐场所治安管理办法',content:'系统消息、系统消息周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:1,sendtime:'2017-06-21 11:20:20',isread:'1'},
    {title:'考勤审核',content:'xxx申请请假谈话三位法人本周还需谈话三位法人',messagetype:2,sendtime:'2017-06-21 11:20:20',isread:'0'},
    {title:'巡查提醒',content:'今日巡查暂未完成本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:3,sendtime:'2017-06-21 11:20:20',isread:'0'},
    {title:'安检异常报告',content:'2017-01-01 12:00 安检异常报告本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:4,sendtime:'2017-06-21 11:20:20',isread:'0'},
    {title:'巡查异常报告',content:'2017-01-01 12:00 安检异常报告本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:4,sendtime:'2017-06-21 11:20:20',isread:'0'},
    {title:'监控异常报告',content:'2017-01-01 12:00 安检异常报告本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',messagetype:4,sendtime:'2017-06-21 11:20:20',isread:'0'},
  ];
  go(item){
    switch (item.messagetype){
      case 0:
      case 1:
        this.navCtrl.push(SystemMessagePage,{message:item});
        break;
      case 2:
        this.navCtrl.push(AttendanceMessagePage,{message:item});
        break;
      case 3:
        this.navCtrl.push(PatrolMessagePage,{message:item});
        break;
      case 4:
        this.navCtrl.push(AbnormalMessagePage,{message:item});
        break;
    }
  }

//上拉菜单
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
