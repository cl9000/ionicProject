import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
// import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePageModule} from "../pages/home/home.module";
import {Device} from "@ionic-native/device";
import {AboutPageModule} from "../pages/about/about.module";

@NgModule({
  declarations: [
    MyApp,
    // AboutPage, // 配置过懒加载的页面移除
    // ContactPage,
    // HomePage,
    // TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    HomePageModule,
    AboutPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage, // 配置过懒加载的页面移除
    // ContactPage,
    // HomePage,
    // TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
