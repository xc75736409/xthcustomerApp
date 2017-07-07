import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'patrol-message',
  templateUrl: 'patrol-message.html',
})
export class PatrolMessagePage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.message = navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemMessagePage');
  }
  goPatrol(){

  }

}
