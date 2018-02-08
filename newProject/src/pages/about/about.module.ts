import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import {LoginModule} from "./LoginModule/login.module";
import {PopoverPageModule} from "./Popover/popover.module";

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),

    //登录模板引入
    LoginModule,
    PopoverPageModule,
  ],
})
export class AboutPageModule {}
