import {Injectable} from '@angular/core';
import * as cityList from '../../assets/citys.json'

@Injectable()
export class CityDataProvider {
  headers;
  cities: any[];

  constructor(
              ) {
    console.log('Hello CityDataProvider Provider');

    console.log('00000000',cityList);

    this.cities = cityList;

  }



}
