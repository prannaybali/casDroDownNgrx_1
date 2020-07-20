import { Component, OnInit } from '@angular/core';
import {DropServiceService} from "../../services/drop-service.service";
import {Subscription} from "rxjs";
import  { Store } from '@ngrx/store';
import * as DropDownActions from '../store/drop-down.actions'

export  interface Region {
  name:string,
  value:string,
}

@Component({
  selector: 'app-drop-down-new',
  templateUrl: './drop-down-new.component.html',
  styleUrls: ['./drop-down-new.component.scss']
})
export class DropDownNewComponent implements OnInit {

  regions:Region[];
  countries: any;
  selectedRegion: any;
  selectedCountry: any;
  constructor(private dropDownService: DropServiceService,
    private store: Store<{DropDownNew:{regions: {name: string, value: string}[], country:{}}}>) { }

  ngOnInit() {
    this.regions = this.dropDownService.getRegions();
  }

  OnSelect(para){
    this.dropDownService.getCountries(para)
      .subscribe(resp => {
        this.countries = resp;
      })

  }

  onCountrySelect(para) {
    this.dropDownService.setSelectedCountry(para);
    this.store.dispatch(new DropDownActions.SelectCountry([this.selectedCountry]));
  }

}
