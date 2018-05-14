import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityEditPage } from './city-edit';
import {MultiPickerModule} from 'ion-multi-picker';
import {AreasSelectModule} from "../../components/select-city/AreasSelect.module";

@NgModule({
  declarations: [
    CityEditPage,
  ],
  imports: [
    MultiPickerModule,
    IonicPageModule.forChild(CityEditPage),
    AreasSelectModule
  ],
})
export class CityEditPageModule {}
