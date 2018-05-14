import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {AreasSelect} from "./AreasSelect";

@NgModule({

  imports: [
    IonicPageModule.forChild(AreasSelect),
  ],
  declarations: [
    AreasSelect
  ],
  exports: [AreasSelect]
})
export class AreasSelectModule {
}
