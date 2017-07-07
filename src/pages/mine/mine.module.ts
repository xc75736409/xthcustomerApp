import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinePage } from './mine';

@NgModule({
  declarations: [
    MinePage
  ],
  imports: [
    IonicPageModule.forChild(MinePage),
  ],
  exports: [
    MinePage
  ],
  entryComponents: [
    MinePage
  ],
})
export class MinePageModule {}
