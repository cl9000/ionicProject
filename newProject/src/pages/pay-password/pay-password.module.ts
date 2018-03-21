import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { PayPasswordPage } from './pay-password';
import {InputSafeKeyboardModule} from "../../components/input-safe-keyboard/input-safe-keyboard.module";

@NgModule({
  declarations: [
    PayPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PayPasswordPage),
    InputSafeKeyboardModule,
  ],
})
export class PayPasswordPageModule {}
