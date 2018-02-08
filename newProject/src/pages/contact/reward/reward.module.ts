import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardPage } from './reward';
import {PhotosViewModule} from "../../../components/photos-view/photos-view.module";

@NgModule({
  declarations: [
    RewardPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardPage),
    PhotosViewModule
  ],
})
export class RewardPageModule {}
