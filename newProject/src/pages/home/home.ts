import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {Device} from "@ionic-native/device";
import {NativeService} from "../../providers/essential/NativeService";
import {FormBuilder, Validators} from "@angular/forms";
import {FileOpener} from "@ionic-native/file-opener";
import {FileTransfer,FileTransferObject, FileUploadOptions} from "@ionic-native/file-transfer";
import { File } from '@ionic-native/file';


declare let CFCASecurityKeyboardPlugin :any;
declare let cordova :any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  browserInfo = {
    versions: function () {
      let u = navigator.userAgent, app = navigator.appVersion;
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
        qq: !!u.match(/\sqq/i), //是否QQ
        // qq: u.match(/mqqbrowser/i) == 'mqqbrowser', //是否QQ
        // qq: u.match(/\sQQ/i) == " qq", //是否QQ
      };
    }(),
    language: (navigator.language || navigator.language).toLowerCase()
  };

  // 考勤计算按钮开关
  attendanceStart :boolean = true;
  timer1 : any;
  timer2 : any;

  // 安全键盘
  inputValue: any;
  verificationForm: any;
  placeholdle: string = '请输入数据';

  // 下载文件存储地址
  urlStr: any;
  downLoaded: string = '--';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform,
              public device: Device,
              private nativeService: NativeService,
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private formBuilder: FormBuilder,
              private fileOpener: FileOpener,
              private transfer: FileTransfer,
              private file: File,

              ) {

    //安全键盘
    this.verificationForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.verificationForm.get('password').valueChanges.subscribe(value => {
      if (value.length == 6) {
        // this.inputValue.tradePwd = value;
        // this.goNextPage(value);
      }
    });

  }


  ionViewDidLoad(){


  }

  /**
   * 跳转页面 - InfoPage
   */
  goNextPage(value) {
    this.navCtrl.push('InfoPage',{params:value});
  }

  /**
   *  判断运行 platform
   */
  platformInfo(){
    if (this.platform.is('mobileweb')) {
      alert('iOS mobileweb!');
    }
    if (this.platform.is('ios')) {
      alert('iOS device!');
    } else if(this.platform.is('android')){
      alert('Android device!');
    } else if(this.platform.is('windows')){
      alert('windows device!');
    }
  }

  /**
   * 测试考勤签退的时间
   */
  attendanceTest(){
    if (this.attendanceStart){
      this.timer1 = setInterval(() => {
        console.log('Date.now()--: '+Date.now());
        console.log('Date.now()时间--: '+HomePage.formatTime(Date.now()));
      }, 1000);
      this.timer2 = setInterval(() => {
        console.log('new Date()==: '+new Date().getTime());
        console.log('new Date()时间==: '+HomePage.formatTime(new Date().getTime()));
      }, 1000);
      this.attendanceStart = false;
    }else {
      this.attendanceStart = true;
      clearInterval(this.timer1);
      clearInterval(this.timer2);
    }

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

  /**
   * 浏览器内核判断
   */
  browserUAInfo(){
    console.log(
      'userAgent = '+ JSON.stringify(navigator.userAgent)+'\n'+
      'app = '+ JSON.stringify(navigator.appVersion)
    );
    alert(
      'browserInfo = '+ JSON.stringify(this.browserInfo.versions)+'\n'+
      this.browserInfo.versions.trident+' : IE内核-Trident'+'\n'+
      this.browserInfo.versions.presto+' : opera内核-presto'+'\n'+
      this.browserInfo.versions.webKit+' : 苹果、谷歌内核-webKit'+'\n'+
      this.browserInfo.versions.gecko+' : 火狐内核-gecko'+'\n'+
      this.browserInfo.versions.mobile+' : 是否为移动终端'+'\n'+
      this.browserInfo.versions.ios+' : iOS端'+'\n'+
      this.browserInfo.versions.android+' :android终端或uc浏览器'+'\n'+
      this.browserInfo.versions.iPhone+' : 是否为iPhone或者QQHD浏览器'+'\n'+
      this.browserInfo.versions.iPad+' : 是否iPad'+'\n'+
      this.browserInfo.versions.webApp+' : 是否web应该程序，没有头部与底部'+'\n'+
      this.browserInfo.versions.weixin+' : 是否微信'+'\n'+
      this.browserInfo.versions.qq+' : 是否 QQ'+'\n');
    console.log(
      'browserInfo = '+ JSON.stringify(this.browserInfo.versions)+'\n'+
      this.browserInfo.versions.trident+' : IE内核-Trident'+'\n'+
      this.browserInfo.versions.presto+' : opera内核-presto'+'\n'+
      this.browserInfo.versions.webKit+' : 苹果、谷歌内核-webKit'+'\n'+
      this.browserInfo.versions.gecko+' : 火狐内核-gecko'+'\n'+
      this.browserInfo.versions.mobile+' : 是否为移动终端'+'\n'+
      this.browserInfo.versions.ios+' : iOS端'+'\n'+
      this.browserInfo.versions.android+' :android终端或uc浏览器'+'\n'+
      this.browserInfo.versions.iPhone+' : 是否为iPhone或者QQHD浏览器'+'\n'+
      this.browserInfo.versions.iPad+' : 是否iPad'+'\n'+
      this.browserInfo.versions.webApp+' : 是否web应该程序，没有头部与底部'+'\n'+
      this.browserInfo.versions.weixin+' : 是否微信'+'\n'+
      this.browserInfo.versions.qq+' : 是否 QQ'+'\n');
    // //判断是否IE内核
    // if(this.browserInfo.versions.trident){ alert("is IE"); }
    // //判断是否webKit内核
    // if(this.browserInfo.versions.webKit){ alert("is webKit"); }
    // //判断是否移动端
    // if(this.browserInfo.versions.mobile||this.browserInfo.versions.android||this.browserInfo.versions.ios){ alert("移动端"); }

  }

  /**
   * Device信息 -- 测试用例按钮
   */
  deviceInfo() {
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


  /**
   * CFCA键盘显示
   * @constructor
   */
  CFCASecurityKeyboardShow(){
    this.nativeService.getCFCAKeyboardShow().subscribe(
      info => {
        console.log('键盘info-- : '+JSON.stringify(info));
        this.verificationForm.patchValue({'password': info.data.displayStr});
        if(info.data && info.data.displayStr == '123456'){
          // this.goNextPage(info); //处理业务需求
          this.CFCASecurityKeyboardClose();
        }
        // 登录密码 全键盘测试 点击完成返回值去验证 不需要掉用关闭键盘
        if (info.data && info.type == 'ok_done' && info.data.displayStr.length >=8){
          console.log('加密数据-实时更新', JSON.stringify(info.data.encryptDataJson));
        }
      },
      err => {
        console.log('键盘err-- : '+JSON.stringify(err));
      });
  };

  /**
   * CFCA键盘关闭
   * @constructor
   */
  CFCASecurityKeyboardClose(){
    this.nativeService.getCFCAKeyboardHide().subscribe(
      info => {
        console.log('键盘关闭info++ : '+JSON.stringify(info));
      },
      err => {
        console.log('键盘关闭err++ : '+JSON.stringify(err));
      });
  };

  /**
   * 交易弹框
   */
  transfercations(){
    let contactModal = this.modalCtrl.create('PayPasswordPage',{params: 'param', type: 'transfer'});
    contactModal.onDidDismiss(data =>{
      if(data){
        console.log('9999:' +data);
      }
    });
    contactModal.present();
  }


  /**
   * 文件上传、下载、预览
   */
  fileUpDown(){
    let loading = this.loadingCtrl.create({
      content: '下载进度：0%',
      dismissOnPageChange: false,
    });
    loading.present();

    // 上传
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',  // 文件类型
      headers: {},
      chunkedMode: false, //默认情况下它是以数据块流模式上传的，主要是用于上传那些直播视频类的文件，就是一直在上传的。只是上传文件或图片的，因此这里就要令它为false
      params: {}    // 如果要传参数，写这里
    };
    fileTransfer.upload('<file path>', '<api endpoint>', options)
      .then((data) => {
        console.log('success');
      }, (err) => {
        console.log('error');
      });


    //下载
    this.downLoaded = 'downing...';
    const url = 'http://192.168.0.159:9999/01.pdf';
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf')
      .then((entry) => {
        console.log('download complete:' + entry.toURL());
        this.urlStr = entry.toURL();
        if(timer)clearInterval(timer);
        loading.dismiss();

        // 预览
        this.fileOpener.open(decodeURI(this.urlStr),'application/pdf')
          .then(() => {
            console.log('File is opened');
          })
          .catch(e => {
            console.log('Error openening file', e);
          });
      }, (error) => {
        console.log('Error', error);
        if(timer)clearInterval(timer);
        loading.dismiss();
      });

    // 进度
    let now: number = 0;
    fileTransfer.onProgress(progressEvent => {
      if (progressEvent.lengthComputable) {
        // 下载过程会一直打印，完成的时候会显示 1
        console.log(progressEvent.loaded / progressEvent.total);
        now = Number(((progressEvent.loaded / progressEvent.total) * 100).toFixed(4));
        if (progressEvent.loaded / progressEvent.total == 1){
          console.log('下载完毕');
        }
      } else {

      }
    });
    let timer = setInterval(() => {
      // loading.setContent('下载进度：'+Math.floor(now)+'%');
      loading.setContent(`
      <div class="custom-spinner-container">
      <div class="custom-spinner-box">
			<div class="loading">
			
			<div class="loading-content">下载进度：${Math.floor(now)}%
			</div>
			</div>
		  </div>
      </div>`);
      if (now >= 99) {
        clearInterval(timer);
        loading.dismiss();
      }
    }, 300);


  }

  /**
   * 获取文件类型
   * @param {fileType} type
   * @returns {string}
   */
  getFileMimeType(fileType: string): string {
    let mimeType: string = '';

    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

  /**
   * 获取文件类型
   * @param {string} path
   * @returns {string}
   */
  getFileType(fileName: string): string {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
  }


}
