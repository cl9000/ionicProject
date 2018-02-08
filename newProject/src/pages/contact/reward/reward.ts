import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
   listDataArr : any;
   headerBarUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPage - 悬赏榜页面');

  }

  /// TODO mark -初始化 假数据
  initializeItems() {
    /// 顶部图片
    this.headerBarUrl= 'http://bird2.i2soft.net:82/images/4/00000099/1463033696747.png';
    /// 悬赏榜列表
    this.listDataArr = [
      {
        "headerIconUrl" : "../../assets/imgs/000.jpg",
        "hTitle" : "笨鸟",
        "content": "童鞋们，笨鸟的完善需要大家的共同努力，说出你的建议，一大波积分等你来拿，快点行动吧〜",
        "imgUrl" : ['http://210.14.78.246:82/images/3/00000906/1463041415797.jpg',
                    'http://210.14.78.246:82/images/3/00000906/1463041416124.jpg'],
        "releaseDate" : "2017-11-1",
        "rewardIntegrals" : "500",
        "commentCount" : "209",
      },
      {
        "headerIconUrl" : "../../assets/imgs/logo.png",
        "hTitle" : "用户-00",
        "content": "发布内容 00",
        "imgUrl" : ['http://bird2.i2soft.net:82/images/3/00000202/1487827308613.jpg'],
        "releaseDate" : "2017-11-1",
        "rewardIntegrals" : "500",
        "commentCount" : "209",
      },
      {
        "headerIconUrl" : "../../assets/imgs/000.jpg",
        "hTitle" : "用户-01",
        "content": "发布内容 -- 01",
        "imgUrl" : ['../../assets/imgs/000.jpg',
                    '../../assets/imgs/000.jpg',
                    '../../assets/imgs/logo.png',
                    '../../assets/imgs/logo.png'],
        "releaseDate" : "2017-11-1",
        "rewardIntegrals" : "500",
        "commentCount" : "209",
      },
      {
        "headerIconUrl" : "../../assets/imgs/000.jpg",
        "hTitle" : "用户-02",
        "content": "发布内容 -- 01",
        "imgUrl" : ['../../assets/imgs/000.jpg',
                    '../../assets/imgs/logo.png',
                    '../../assets/imgs/000.jpg',
                    '../../assets/imgs/logo.png',
                    '../../assets/imgs/000.jpg',
                    '../../assets/imgs/logo.png',
                    '../../assets/imgs/000.jpg',
                    '../../assets/imgs/logo.png',
                    '../../assets/imgs/000.jpg'],
        "releaseDate" : "2017-11-1",
        "rewardIntegrals" : "500",
        "commentCount" : "209",
      }
    ]
  }
  /// TODO mark - 页面响应事件
  /// 头像点击
  headerIconAction() {
    console.log('点击了头像');

  }
  /// item点击 进入评论详情页
  presentInfoPage(event) {
    console.log('点击item'+event);
  }
  /// 点击评论

  commentIconAction() {
    console.log('点击评论');
    this.stopBubbling(event);
  }
  stopBubbling(e) {
    e = window.event || e;
    if (e.stopPropagation) {
      e.stopPropagation();      //阻止事件 冒泡传播
    } else {
      e.cancelBubble = true;   //ie兼容
    }
  }


}
