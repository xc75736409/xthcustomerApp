import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'system-message',
  templateUrl: 'system-message.html',
})
export class SystemMessagePage {

  message = {
    sendname:'张三',
    sendtype:'法人代表',
    content:'本周还需谈话三位法人本周还需谈话三位法人本周还需谈话三位法人',
    messagetype:0,
    sendtime:'2017-06-21 11:20:20',
    isread:'0',
    needreceive:true,
    isreceive:false,
    receiveendtime:'2017-10-02 20:00:00',
    receives:[
      {receivetime:'2017-10-02 20:00:00',content:'',receivename:''},
      {receivetime:'2017-10-02 20:00:00',content:'',receivename:''},
      {receivetime:'2017-10-02 20:00:00',content:'',receivename:''},
      {receivetime:'2017-10-02 20:00:00',content:'',receivename:''}
    ]
  };
  receive={receivetime:'',content:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }

}
