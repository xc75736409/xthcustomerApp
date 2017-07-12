import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {MessagePage} from './message';
import {EditMessagePage} from "./edit-message/edit-message";
import {ConsumeListPage} from "./consume_list/consume_list";
import {EditConsumePage} from "./edit_consume/edit_consume";

@NgModule({
  declarations: [
    MessagePage,
    EditMessagePage,
    ConsumeListPage,
    EditConsumePage
  ],
  imports: [
    // IonicPageModule.forChild(MessagePage),
    IonicModule
  ],
  exports: [
    MessagePage
  ],
  entryComponents: [
    MessagePage,
    EditMessagePage,
    ConsumeListPage,
    EditConsumePage
  ],

})
export class MessagePageModule {
}
