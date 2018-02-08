import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Device} from "@ionic-native/device";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  browserInfo = {
    versions: function () {
      let u = navigator.userAgent, app = navigator.appVersion;
      // alert('userAgent = '+ JSON.stringify(u));
      // alert('app = '+ JSON.stringify(app));

      return {   //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, //是否微信
        // qq: u.match(/mqqbrowser/i) == 'mqqbrowser', //是否QQ
        // qq: u.match(/\sQQ/i) == " qq", //是否QQ
        qq: !!u.match(/\sqq/i), //是否QQ

      };
    }(),
    language: (navigator.language || navigator.language).toLowerCase()
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public device: Device,
              ) {

    // // 判断运行 platform
    // if (this.platform.is('mobileweb')) {
    //   alert('iOS mobileweb!');
    // }
    // if (this.platform.is('ios')) {
    //   alert('iOS device!');
    // } else if(this.platform.is('android')){
    //   alert('Android device!');
    // } else if(this.platform.is('windows')){
    //   alert('windows device!');
    // }


    // alert('QQ ='+ navigator.userAgent.match(/\sQQ/i));
    // alert('Safari ='+ navigator.userAgent.indexOf('Safari'));
    // alert('browserInfo = '+ JSON.stringify(this.browserInfo.versions));
    //
    // //判断是否IE内核
    // if(this.browserInfo.versions.trident){ alert("is IE"); }
    // //判断是否webKit内核
    // if(this.browserInfo.versions.webKit){ alert("is webKit"); }
    // //判断是否移动端
    // if(this.browserInfo.versions.mobile||this.browserInfo.versions.android||this.browserInfo.versions.ios){ alert("移动端"); }


    // 测试签退的时间误差
    // setInterval(() => {
    //   console.log('--: '+Date.now());
    //   console.log('时间--: '+HomePage.formatTime(Date.now()));
    // }, 1000);
    // setInterval(() => {
    //   console.log('==: '+new Date().getTime());
    //   console.log('时间==: '+HomePage.formatTime(new Date().getTime()));
    // }, 1000);

  }

  static formatTime(time) {
    let allSec = time / 1000;
    let hour = parseInt((allSec / (60 * 60)).toString());
    let minute = parseInt(((allSec - hour * 3600) / 60).toString());
    let second = parseInt((allSec - hour * 3600 - minute * 60).toString());

    return HomePage.formatNum(hour) + ':' + HomePage.formatNum(minute) + ':' + HomePage.formatNum(second);
  }
  static formatNum(num) {
    return num < 10 ? '0' + num : num;
  }


  // 测试按钮
  GO() {
    alert('deviceInfo: '+JSON.stringify(this.device)+'\n'+
      'deviceVersion: '+this.device.version+'\n'+
      'deviceUuid: '+this.device.uuid+'\n'+
      'deviceModel: '+this.device.model+'\n'+
      'deviceCordova: '+this.device.cordova+'\n'+
      'deviceisVirtual: '+this.device.isVirtual+'\n'+
      'deviceisManufacturer: '+this.device.manufacturer+'\n'+
      'deviceisPlatform: '+this.device.platform+'\n'+
      'deviceisSerial: '+this.device.serial);

    console.log('deviceInfo: '+this.device+'\n'+
      'version: '+this.device.version+'\n'+
      'uuid: '+this.device.uuid+'\n'+
      'model: '+this.device.model+'\n'+
      'cordova: '+this.device.cordova+'\n'+
      'isVirtual: '+this.device.isVirtual+'\n'+
      'manufacturer: '+this.device.manufacturer+'\n'+
      'platform: '+this.device.platform+'\n'+
      'serial: '+this.device.serial);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goNextPage() {
    this.navCtrl.push('InfoPage');
  }


}
