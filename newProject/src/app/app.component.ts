import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CodePush, InstallMode } from "@ionic-native/code-push";

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = 'TabsPage';

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private codePush: CodePush,
              ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.checkCodePush();

      document.addEventListener("resume", () => {
        console.log('[INFO] App resumed');
        this.checkCodePush();
        console.log('[INFO] Code-push checked');
      }, false);
    });
  }

  /**
   * 热更新检测
   * */
  checkCodePush() {
    // this.codePush.sync(
    //   {installMode: InstallMode.ON_NEXT_RESTART}   // android
    // ).subscribe(
    //   (info) => {
    //     console.log("code-push sync over:" + info);
    //   },
    //   (err) => {
    //     console.log("code-push sync error:" + err)
    //   });
    this.codePush.sync(
      {installMode: InstallMode.ON_NEXT_RESUME}  // ios
    ).subscribe(
      (info) => {
        console.log("code-push sync over:" + info);
      },
      (err) => {
        console.log("code-push sync error:" + err)
      }
    )
  }
}
