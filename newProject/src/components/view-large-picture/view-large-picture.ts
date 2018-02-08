import {Component, ViewChild, Input} from '@angular/core';
import {IonicPage, NavParams, Slides} from 'ionic-angular';
// import {SocialSharing} from "ionic-native/dist/es5/index";

@IonicPage()
@Component({
  selector: 'view-large-picture',
  templateUrl: 'view-large-picture.html'
})
export class ViewLargePictureComponent {
  @Input() options : any;
  @ViewChild('slides') slides: Slides;

  images: Array<string> = [];
  imageSlideOptions = {
    pager: true
  };

  constructor(public navParams: NavParams) {
    console.log('Hello ViewLargePictureComponent Component');

    this.images = navParams.get('images');

  }

  share() {
    // 图片分享
    // SocialSharing.share(
    //   null,
    //   null,
    //   this.images[this.slides.getActiveIndex()],
    //   null);
  }

}
