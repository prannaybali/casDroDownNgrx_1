import {Action} from "@ngrx/store";
import * as dropDownActions from "./drop-down.actions";

export  interface Region {
  name:string,
  value:string,
}
const initialState = {
  regions: [
    {'name':'Asia', 'value':'asia'},
    {'name':'Europe', 'value':'europe'}
  ],
  country: {},
};

console.log(initialState);

export function dropDownReducer(state = initialState,
                                // action :dropDownActions.SelectRegion,
                                action: dropDownActions.SelectCountry){
  //recives 2 args
  // console.log(state, action);
   switch(action.type) {
     case dropDownActions.SELECT_COUNTRY:
       // let a = { ...state, countries: action.payload};
       let a = { ...state, country: action.payload};
      //  console.log(a.country);
       return a.country;

     // case dropDownActions.SELECT_COUNTRY:
     //   console.log(state);
     //   console.log(action.payload);

     default:
       return state;
   }
}

