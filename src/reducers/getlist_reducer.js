import {
  CHANGE_ADTYPE,
  CHANGE_SORTBY,
  CHANGE_NOWPAGE,
  CHAGNE_LISTPAGE,
  CHANGE_OPTION,
  CHANGE_PAGE} from '../actions/types';

const INITIAL_STATE = {
   adType:"All",
   sortBy:"recentu",    //recentu or recentd or priceu or priced
   nowPage:1,
   listPage:1,  //리스트 페이지 갯수
   ads:[]
 };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_ADTYPE:
      return {...state, adType:action.adType, nowPage:1};
    case CHANGE_SORTBY:
      return {...state, sortBy:action.sortBy, nowPage:1};
    case CHANGE_NOWPAGE:
      return {...state, nowPage:action.nowPage};
    case CHANGE_OPTION:
      return {...state, ads:action.ads, listPage : action.listPage};
    case CHANGE_PAGE:
      console.log("ACTION");
      return {INITIAL_STATE};
  }
  return state;
}
