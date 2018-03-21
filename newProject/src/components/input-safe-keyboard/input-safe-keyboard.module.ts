import { NgModule } from '@angular/core';
import { InputSafeKeyboard } from './input-safe-keyboard';
import {IonicPageModule} from "ionic-angular";
@NgModule({
  declarations: [InputSafeKeyboard],
  imports: [IonicPageModule.forChild(InputSafeKeyboard),],
  exports: [InputSafeKeyboard]
})
export class InputSafeKeyboardModule {}
