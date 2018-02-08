import { NgModule } from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import { PhotosView } from './photos-view';
import {ViewLargePictureComponentModule} from "../view-large-picture/view-large-picture.module";

@NgModule({
  declarations: [PhotosView],
  imports: [
    IonicPageModule.forChild(PhotosView),
    ViewLargePictureComponentModule
  ],
  exports: [PhotosView]
})
export class PhotosViewModule {

}
