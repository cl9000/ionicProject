import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { ViewLargePictureComponent } from './view-large-picture';

@NgModule({
  declarations: [ViewLargePictureComponent],
  imports: [
    IonicPageModule.forChild(ViewLargePictureComponent),
  ],
  exports: [ViewLargePictureComponent]
})
export class ViewLargePictureComponentModule {

}
