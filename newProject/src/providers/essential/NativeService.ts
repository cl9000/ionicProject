import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

declare let CFCASecurityKeyboardPlugin: any;

@Injectable()
export class NativeService {

  constructor() {

  }


  /**
   * 显示安全CFCA键盘
   */
  getCFCAKeyboardShow(): Observable<any> {
    return this.showCFCAKeyboard();
  }
  showCFCAKeyboard(): Observable<any> {
    return Observable.create(Observable =>{
      CFCASecurityKeyboardPlugin.showSafeKeyboard(
        (data) => {
          Observable.next(data);
          // console.log('键盘data = '+JSON.stringify(data));
        }, (err) => {
          Observable.error(err); // 不能注释，否则上层调用方法获取不到error
        }
      );
    })
  }

  /**
   * 关闭安全CFCA键盘
   */
  getCFCAKeyboardHide(): Observable<any> {
    return this.closeCFCAKeyboard();
  }
  closeCFCAKeyboard(): Observable<any> {
    return Observable.create(Observable =>{
      CFCASecurityKeyboardPlugin.closeSafeKeyboard(
        data => {
          Observable.next(data);
          // console.log('关闭键盘data = '+JSON.stringify(data));
        }, msg => {
          Observable.error("关闭键盘error = "+ msg);// 不能注释，否则上层调用方法获取不到error
        }
      );
    });
  }
}



