import {Injectable} from '@angular/core';
import {cityList} from "./citys"

@Injectable()
export class CityDataProvider {
  headers;
  cities: any[];

  constructor(
              ) {

    console.log('00000000',cityList);
  }
  ionViewDidLoad(){
    this.cities = cityList;
  }



}
