import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'attendance-detail',
  templateUrl: 'attendance-detail.html',
})
export class AttendanceDetailPage {

  param = {begintime:'',endtime:''};
 list = [
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'},
   {time:'2017-06-22',name:'张三',type:'服务员',state:'上班'}
 ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('leave');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }

}
