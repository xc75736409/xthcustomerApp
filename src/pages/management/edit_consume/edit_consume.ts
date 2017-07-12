import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Consume} from "../../../Entity/Consume";
import {AppServer} from "../../../services/appServer";
import {NativeService} from "../../../providers/NativeService";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'edit_consume',
  templateUrl: 'edit_consume.html',
})
export class EditConsumePage {

  consume: Consume = new Consume();
  opType: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appServer: AppServer,
              private nativeService: NativeService) {
    this.opType = navParams.get('op') == 'more' ? true : false;
    this.consume = navParams.get('item') as Consume;
    if (navParams.get('op') == 'update') this.consume.operateType = 'update';
    console.log(this.consume);
  }

  save() {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/operateConsume", this.consume).subscribe(
      res => {
        this.nativeService.hideLoading();
        if (this.nativeService.isHttpSuc(res)) {
          this.nativeService.showToast("保存成功", 2000)
        }
      },
      error => {
        this.nativeService.requestFailed(error);
      }
    );
  }
}
