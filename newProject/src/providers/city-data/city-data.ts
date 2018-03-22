import { Injectable } from '@angular/core';


@Injectable()
export class CityDataProvider {

  headers;
  cities: any[];

  constructor(

              ) {
    console.log('Hello CityDataProvider Provider');



    this.cities = [
      {
        name: 'col1',
        options: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      },{
        name: 'col2',
        options: [
          { text: '1-1', value: '1-1' },
          { text: '1-2', value: '1-2' },
          { text: '2-1', value: '2-1' },
          { text: '2-2', value: '2-2' },
          { text: '3-1', value: '3-1' }
        ]
      },{
        name: 'col3',
        options: [
          { text: '1-1-1', value: '1-1-1' },
          { text: '1-1-2', value: '1-1-2' },
          { text: '1-2-1', value: '1-2-1' },
          { text: '1-2-2', value: '1-2-2' },
          { text: '2-1-1', value: '2-1-1' },
          { text: '2-1-2', value: '2-1-2' },
          { text: '2-2-1', value: '2-2-1' },
          { text: '2-2-2', value: '2-2-2' },
          { text: '3-1-1', value: '3-1-1' },
          { text: '3-1-2', value: '3-1-2' }
        ]
      }
    ];
  }


}
