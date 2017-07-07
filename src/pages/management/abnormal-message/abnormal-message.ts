import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'abnormal-message',
  templateUrl: 'abnormal-message.html',
})
export class AbnormalMessagePage {

  message = {
    abnormaltype:'0', //0:安检 1:巡查 2:监控
    messagetype:4,
    time:'2017-06-21 11:20:20',
    isread:'0',
    type:'dfdsf ',
    detail:'sdfdsfdsfdsfdfdsfsdf',
    receive1:{name:'dfs',content:'sdfsdfdsfsdfdsf'},
    receive2:{name:'',content:''},
    receive3:{name:'',content:''},

  };
  receive={receivetime:'',content:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }

}
