import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CityDataProvider} from "../../providers/city-data/city-data";

@IonicPage()
@Component({
  selector: 'page-city-edit',
  templateUrl: 'city-edit.html',
})
export class CityEditPage {

  cityColumns: any[];

  constructor(public navCtrl: NavController,
              public cityDataProvider: CityDataProvider,
              public navParams: NavParams) {

    this.cityColumns = this.cityDataProvider.cities;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityEditPage');


  }

}

