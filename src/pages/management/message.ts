import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppServer} from "../../services/appServer";
import {NativeService} from "../../providers/NativeService";
import {CustomersParas} from "../../Entity/QueryParas";
import {EditMessagePage} from "./edit-message/edit-message";
import {Customer} from "../../Entity/Customer";
import {Utils} from "../../providers/Utils";

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
  customers = [];
  customersParas: CustomersParas = new CustomersParas();


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appServer: AppServer,
              private nativeService: NativeService) {
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.customersParas.nowPage = 1;
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/getCustomer", this.customersParas).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          this.customers = res['list'];
          this.customersParas.maxSize = res['total'];
        }
        refresher.complete();
      },
      error => {
        refresher.complete();
        this.nativeService.requestFailed(error);
      }
    );
  }

  loadData() {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/getCustomer", this.customersParas).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          this.customers = res['list'];
          this.customersParas.maxSize = res['total'];
        }
      },
      error => {
        this.nativeService.requestFailed(error);
      }
    );
  }

  //上拉菜单
  doInfinite(infiniteScroll) {
    if (this.customersParas.maxSize == 0) {
      infiniteScroll.complete();
      this.nativeService.showToast("没有更多的信息", 2000);
      return;
    }

    this.customersParas.nowPage++;
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/getCustomer", this.customersParas).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          this.customersParas.maxSize = (res['list'].length==0?0:res['total']);
          this.customers = this.customers.concat(res['list']);
        }
        infiniteScroll.complete();
      },
      error => {
        this.nativeService.requestFailed(error);
        infiniteScroll.complete();
      }
    );
  }

  //删除操作
  deleteItem(item){
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/operateCustomer", {id:item['id'],operateType:'delete'}).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          for (let i=0;i<this.customers.length;i++){
            if(item['id']==this.customers[i]['id']){
              this.customers.splice(i,1);
            }
          }

        }
      },
      error => {
        this.nativeService.requestFailed(error);
      }
    );
  }
  //修改操作
  updateItem(item){
    this.navCtrl.push(EditMessagePage,{
      op:'update',
      item:item
    });
  }
  //详细操作
  moreItem(item){
    this.navCtrl.push(EditMessagePage,{
      op:'more',
      item:item
    });
  }
  //添加新客户
  addItem(){
    let customer:Customer=new Customer();
    customer.operateType='add';
    customer.createtime=Utils.dateFormat(new Date());
    this.navCtrl.push(EditMessagePage,{
      op:'add',
      item:customer
    });
  }
}
