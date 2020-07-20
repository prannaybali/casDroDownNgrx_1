import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export  interface Region {
  name:string,
  value:string,
}

@Injectable({
  providedIn: 'root'
})
export class DropServiceService {
  regions: Region[] = [
    {'name':'Asia', 'value':'asia'},
    {'name':'Europe', 'value':'europe'}
  ];

  countriesList:any;
  selectedCountry:{};

  private url = 'https://restcountries.eu/rest/v2/region/';


  constructor( private http:HttpClient) {
  }

  getRegions() {
    return this.regions;
  }

  getCountries(para) {
     return this.http.get(this.url + para);

  }

  setSelectedCountry(para){
    this.selectedCountry = para;
  }

  getSelectedCountry() {
    return this.selectedCountry;
  }

  


}
