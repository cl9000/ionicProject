import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/// login modal
import {LoginPage} from "./LoginModule/login";

/// Popover
import {PopoverController} from "ionic-angular";
import {PopoverPage} from "./Popover/popover";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  myIcon: string = "home";
  items: any = ["list-1", "list-2", "list-3"];

  brightness: number = 20;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl : LoadingController,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  /// loading ...
  presentLoading () {
    let loader = this.loadingCtrl.create({
      content: "show loading...",
      duration:2000
    });
    loader.present()
  }

  /// Login Modal
  presentModal () {
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  /// Popover
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
