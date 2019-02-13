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

  typeTxt:any;
  typeDataArr: any;

  constructor(public navCtrl: NavController,
              public cityDataProvider: CityDataProvider,
              public navParams: NavParams) {


    // this.cityColumns = this.cityDataProvider.cities;
    this.cityColumns = [
      {
        name: 'accCol',
        options: [
          { text: '00', value: '1' },
          { text: '11', value: '2' },
          { text: '22', value: '3' }
        ]
      }
    ];

    this.typeDataArr = [
      {id: '0', type: '00'},
      {id: '1', type: '11'},
      {id: '2', type: '22'},
      {id: '3', type: '33'},
      {id: '4', type: '44'},
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityEditPage');

  }
  ionChangeValue(va){
    console.log('--' + JSON.stringify(va.accCol.text));
    console.log('++' + JSON.stringify(va.accCol.value));

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

  /*选择select的value*/
  switchType() {
    console.log(this.typeTxt);
  }

}

