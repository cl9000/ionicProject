import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {NativeService} from "../../providers/essential/NativeService";

/**
 * Generated class for the PayPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay-password',
  templateUrl: 'pay-password.html',
})
export class PayPasswordPage {

  verificationForm: any;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController,
              private nativeService: NativeService,
              public navParams: NavParams) {

    this.confirm();

    // this.verificationForm = this.formBuilder.group({
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    //
    // this.verificationForm.get('password').valueChanges.subscribe(value => {
    //   if (value.length == 6) {
    //     // this.params.tradePwd = value;
    //     // this.confirm();
    //     console.log('======='+ value);
    //   }
    // });
  }
  confirm() {
    console.log('\n========================自动调起键盘========================\n');
    // this.nativeService.getCFCAKeyboardShow().subscribe(
    //   info => {
    //     console.log('pay-password -: '+info);
    //   },
    //   err => {
    //     console.log('pay-password -err: '+err);
    //   });
  }

  close() {
    this.viewCtrl.dismiss();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPasswordPage');
  }

}
