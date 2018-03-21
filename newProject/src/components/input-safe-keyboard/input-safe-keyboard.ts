import { Component, Input, Output} from '@angular/core';
import {IonicPage} from "ionic-angular";
import {FormBuilder, Validators} from "@angular/forms";
import {NativeService} from "../../providers/essential/NativeService";

declare let CFCASecurityKeyboardPlugin :any;
declare let cordova :any;

@IonicPage()
@Component({
  selector: 'input-safe-keyboard',
  templateUrl: 'input-safe-keyboard.html'
})
export class InputSafeKeyboard {
  @Input() inputValue: any = '';
  @Input() id: any = 'bbb';
  @Input() formControlName: any = 'password';
  @Input() inputName: any = 'inputName';
  @Input() inputType: any = 'password';
  @Input() maxLength: any = 6;
  @Input() placeholder: any = '输入密码';

  @Input() skInputData: any;

  @Output()

  verificationForm: any;

  constructor(private formBuilder: FormBuilder,
              public nativeService: NativeService) {
    console.log('Hello InputSafeKeyboard');

    this.verificationForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.verificationForm.get('password').valueChanges.subscribe(value => {
      // if (value.length == 6) {
      //   console.log('======='+ value);
      // }
    });


  }

  showKeyboard(){
    console.log("显示键盘~" + new Date().getTime());

    this.nativeService.getCFCAKeyboardShow().subscribe(
      info => {
        console.log('info--: '+JSON.stringify(info));
        this.verificationForm.patchValue({'password': info.data.displayStr});
        if(info.data && info.data.displayStr == '123456') {
          // this.goNextPage(info); //处理业务需求
          this.closeKeyboard();
        }
      }, err => {
        console.log('err--: '+JSON.stringify(err));
      }
    );
  }

  //关闭键盘
  closeKeyboard(){
    console.log("关闭键盘~" + new Date().getTime());
    this.nativeService.getCFCAKeyboardHide().subscribe(
      info => {
        console.log('键盘关闭info++ : '+JSON.stringify(info));
      },
      err => {
        console.log('键盘关闭err++ : '+JSON.stringify(err));
      });
  }


}
