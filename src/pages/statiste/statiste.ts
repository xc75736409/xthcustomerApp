import {Component} from '@angular/core';
import {InfiniteScroll, IonicPage, NavController, NavParams, Refresher} from 'ionic-angular';
import {StatisteParas} from "../../Entity/QueryParas";
import {NativeService} from "../../providers/NativeService";
import {AppServer} from "../../services/appServer";

/**
 * Generated class for the StatistePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-statiste',
  templateUrl: 'statiste.html',
})
export class StatistePage {

  statisteList = [];

  statisteParas: StatisteParas = new StatisteParas();

//操作状态  0：页面初始加载  1：下拉加载  2：上拉刷新
  opState = 0;
  refresher: Refresher;
  infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appServer: AppServer,
              private nativeService: NativeService) {
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.statisteParas.nowPage = 1;
    this.opState = 2;
    this.loadData();
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll
    this.opState = 1;
    if (this.statisteParas.maxSize == 0) {
      infiniteScroll.complete();
      this.nativeService.showToast("没有更多的信息", 2000);
      return;
    }
    this.statisteParas.nowPage++;
    this.loadData();
  }
  loadData() {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/statistics/statisticsGroup", this.statisteParas).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {

          if (this.opState == 0) {
            this.statisteList = res['list'];
            this.statisteParas.maxSize = res['list'].length;
          } else if (this.opState == 1) {
            this.infiniteScroll.complete();
            this.statisteList = this.statisteList.concat(res['list']);
            this.statisteParas.maxSize = res['list'].length;
          } else if (this.opState == 2) {
            this.refresher.complete();
            this.statisteList = res['list'];
            this.statisteParas.maxSize = res['list'].length;
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

  //
  consumeList(item){
    //this.navCtrl.push(ConsumeListPage,{ item:item });
  }
}
