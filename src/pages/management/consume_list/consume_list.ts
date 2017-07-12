import {Component} from '@angular/core';
import {InfiniteScroll, NavController, NavParams, Refresher} from 'ionic-angular';
import {Customer} from "../../../Entity/Customer";
import {AppServer} from "../../../services/appServer";
import {NativeService} from "../../../providers/NativeService";
import {ConsumeParas} from "../../../Entity/QueryParas";
import {EditConsumePage} from "../edit_consume/edit_consume";
import {Utils} from "../../../providers/Utils";
import {Consume} from "../../../Entity/Consume";
import {AppGlobal} from "../../../AppGlobal";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'consume-list',
  templateUrl: 'consume_list.html',
})
export class ConsumeListPage {

  //消费信息list
  ConsumeList = [];
  //客户信息
  customer: Customer = new Customer();
  //操作状态  0：页面初始加载  1：下拉加载  2：上拉刷新
  opState = 0;

  //查询参数
  consumeParas: ConsumeParas = new ConsumeParas();

  refresher: Refresher;
  infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appServer: AppServer,
              private nativeService: NativeService) {
    this.customer = navParams.get('item') as Customer;
    this.consumeParas.customerId = this.customer.id
  }

  ionViewDidLoad() {
    this.loadData();
  }

  loadData() {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/getConsume", this.consumeParas).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          if (this.opState == 0) {
            this.ConsumeList = res['list'];
            this.consumeParas.maxSize = res['total'];
          } else if (this.opState == 1) {
            this.infiniteScroll.complete();
            this.ConsumeList = this.ConsumeList.concat(res['list']);
            this.consumeParas.maxSize = (res['list'].length == 0 ? 0 : res['total']);
          } else if (this.opState == 2) {
            this.refresher.complete();
            this.ConsumeList = res['list'];
            this.consumeParas.maxSize = res['total'];
          }
        }
      },
      error => {
        if (!!this.refresher) this.refresher.complete();
        if (!!this.infiniteScroll) this.infiniteScroll.complete();
        this.nativeService.requestFailed(error);
      }
    );
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.consumeParas.nowPage = 1;
    this.opState = 2;
    this.loadData();
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll
    this.opState = 1;
    if (this.consumeParas.maxSize == 0) {
      infiniteScroll.complete();
      this.nativeService.showToast("没有更多的信息", 2000);
      return;
    }
    this.consumeParas.nowPage++;
    this.loadData();
  }

  //删除操作
  deleteItem(item) {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/operateConsume", {id: item['id'], operateType: 'delete'}).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          for (let i = 0; i < this.ConsumeList.length; i++) {
            if (item['id'] == this.ConsumeList[i]['id']) {
              this.ConsumeList.splice(i, 1);
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
  updateItem(item) {
    this.navCtrl.push(EditConsumePage, {
      op: 'update',
      item: item
    });
  }

  //详细操作
  moreItem(item) {
    this.navCtrl.push(EditConsumePage, {
      op: 'more',
      item: item
    });
  }

  //添加新客户
  addItem() {
    let consume: Consume = new Consume();
    consume.operateType = 'add';
    consume.createtime = Utils.dateFormat(new Date());
    consume.createperple = AppGlobal.getInstance().user.realname;
    consume.customer_id = this.customer.id;
    consume.customerId = this.customer.id;
    consume.name = this.customer.name;
    consume.phone = this.customer.phone;
    this.navCtrl.push(EditConsumePage, {
      op: 'add',
      item: consume
    });
  }
}
