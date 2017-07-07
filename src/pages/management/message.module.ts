import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { MessagePage } from './message';
import {SystemMessagePage} from "./system-message/system-message";
import {AttendanceMessagePage} from "./attendance-message/attendance-message";
import {LeaveApplicationPage} from "./attendance-message/leave-application/leave-application";
import {AttendanceDetailPage} from "./attendance-message/attendance-detail/attendance-detail";
import {PatrolMessagePage} from "./patrol-message/patrol-message";
import {AbnormalMessagePage} from "./abnormal-message/abnormal-message";

@NgModule({
  declarations: [
    MessagePage,
    SystemMessagePage,
    AttendanceMessagePage,
    LeaveApplicationPage,
    AttendanceDetailPage,
    PatrolMessagePage,
    AbnormalMessagePage
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
    SystemMessagePage,
    AttendanceMessagePage,
    LeaveApplicationPage,
    AttendanceDetailPage,
    PatrolMessagePage,
    AbnormalMessagePage
  ],

})
export class MessagePageModule {}
