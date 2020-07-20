import {Component, Input, OnInit} from '@angular/core';
import {DropServiceService} from "./services/drop-service.service";
import  { Store } from '@ngrx/store';

import * as DropDownActions from './customNew/store/drop-down.actions'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // @Input() countryToBePopulated: {};
  selectedCountry: any;
  showTable: boolean = false;
  constructor(private db: DropServiceService,
              private store: Store<{DropDownNew:{regions: {name: string, value: string}[], country:{}}}>) {
  }
  ngOnInit() {

    //regions: {name: string, value: string}[], countries: any[]
  }



  // loadSelectedCountry(){
  //   this.selectedCountry = this.db.getSelectedCountry();
  //  // console.log(this.selectedCountry);
  //   this.showTable = true;
  //   console.log(this.store.select('DropDownNew'));
  //    this.store.dispatch(new DropDownActions.SelectCountry([this.selectedCountry]));

  // }

}
