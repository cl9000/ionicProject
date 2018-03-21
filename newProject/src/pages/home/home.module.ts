import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {InfoPageModule} from "../info/info.module";
import {InputSafeKeyboardModule} from "../../components/input-safe-keyboard/input-safe-keyboard.module";

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    InfoPageModule,
    InputSafeKeyboardModule

  ],
})
export class HomePageModule {}
