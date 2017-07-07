import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatistePage } from './statiste';

@NgModule({
  declarations: [
    StatistePage,
  ],
  imports: [
    IonicPageModule.forChild(StatistePage),
  ],
  exports: [
    StatistePage
  ],
  entryComponents: [
    StatistePage
  ],
})
export class StatistePageModule {}
