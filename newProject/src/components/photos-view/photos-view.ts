import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewLargePictureComponent} from "../view-large-picture/view-large-picture";

@IonicPage()
@Component({
  selector: 'photos-view',
  templateUrl: 'photos-view.html'
})
export class PhotosView {
  @Input() images: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello PhotosViewComponent Component');

  }

  goToViewLargePictureCtrl(event, index, statusImages) {
    // 如果photos-view是放在ion-card等组件内部
    // 如果ion-card和photos-view同时监听了click事件
    // 会出现冒泡
    // event.stopPropagation();

    console.log('图片数组'+statusImages+'index='+index);
    let imagesArray: Array<string> = [];
    // for (let i = 0; i < statusImages.length; i++) {
    //   let image = statusImages[i];
    //   // imagesArray.push(image.big);
    //   imagesArray.push(image);
    // }
    imagesArray.push(statusImages[index]);
    this.navCtrl.push(ViewLargePictureComponent, {
      images: imagesArray
    });

  }

}

