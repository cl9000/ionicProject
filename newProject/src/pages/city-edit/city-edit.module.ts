import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityEditPage } from './city-edit';
import {MultiPickerModule} from 'ion-multi-picker';

@NgModule({
  declarations: [
    CityEditPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(CityEditPage),
  ],
})
export class CityEditPageModule {}
