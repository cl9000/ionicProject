import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';

@NgModule({
  imports: [
    IonicPageModule.forChild(PopoverPage),
  ],
  declarations: [
    PopoverPage,
  ],
  exports:
    [PopoverPage]

})
export class PopoverPageModule {

}
