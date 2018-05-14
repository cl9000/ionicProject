import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityDataProvider} from "../../providers/city-data/city-data";


@IonicPage()
@Component({
  selector: 'page-city-edit',
  templateUrl: 'city-edit.html',
})
export class CityEditPage {

  cityColumns: any[];

  sp: number = 0;
  sc: number = 0;
  sr: number = 0;

  constructor(public navCtrl: NavController,
              public cityDataProvider: CityDataProvider,
              public navParams: NavParams) {


    this.cityColumns = this.cityDataProvider.cities;
    console.log('1:',this.cityColumns, '2:');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityEditPage');
    console.log('3:');


  }

  @ViewChild('areasSelect') areasSelect;

  openSelect() {
    this.areasSelect.open();
  }

  closeSelect() {
    console.log('关闭选择器');
  }
  selectAreas(pos) {
    // this.textTown = pos.value;
    // this.textAddress = pos.value;
    // this.textStreet = '';
    this.sp = pos.sp;
    this.sc = pos.sc;
    this.sr = pos.sr;
  }

}

