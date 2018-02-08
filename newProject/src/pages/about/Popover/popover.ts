import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-popover',
  // templateUrl: 'popover.html',
  template: `
    <ion-list>
      <ion-list-header> 弹框 </ion-list-header>
      <button ion-item (click)="close()">popover- 00</button>
      <button ion-item (click)="close()">popover- 01</button>
      <button ion-item (click)="close()">popover- 02</button>
      <button ion-item (click)="close()">popover- 03</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

  }
  close() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }


}
