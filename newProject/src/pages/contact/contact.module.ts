import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import {RewardPageModule} from "./reward/reward.module";

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),

    RewardPageModule
  ],
})
export class ContactPageModule {}
