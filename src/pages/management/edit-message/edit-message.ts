import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Customer} from "../../../Entity/Customer";
import {AppServer} from "../../../services/appServer";
import {NativeService} from "../../../providers/NativeService";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'edit-message',
  templateUrl: 'edit-message.html',
})
export class EditMessagePage {

  customer: Customer = new Customer();

  opType: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private appServer: AppServer,
              private nativeService: NativeService) {
    this.opType = navParams.get('op') == 'more' ? true : false;
    this.customer = navParams.get('item') as Customer;
    if (navParams.get('op') == 'update') this.customer.operateType = 'update';
    console.log(this.customer);
  }

  save() {
    this.nativeService.showLoading();
    this.appServer.httpPost("/app/customer/operateCustomer", this.customer).subscribe(
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
