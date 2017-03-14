import {
  CHANGE_SORTBY,
  CHANGE_NOWPAGE,
  CHAGNE_LISTPAGE,
  CHANGE_SCOPEMIN,
  CHANGE_SCOPEMAX,
  CHANGE_OPTION,
  CHANGE_PAGE} from '../actions/types';

const INITIAL_STATE = {
   sortBy:"recentu",    //recentu or recentd or priceu or priced
   nowPage:1,
   listPage:1,  //리스트 페이지 갯수
   scopeMin:0,
   scopeMax:0,
   ads:[]
 };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_SORTBY:
      return {...state, sortBy:action.sortBy, nowPage:1};
    case CHANGE_NOWPAGE:
      return {...state, nowPage:action.nowPage};
    case CHANGE_SCOPEMIN:
      return {...state, scopeMin:action.scopeMin, nowPage:1};
    case CHANGE_SCOPEMAX:
      return {...state, scopeMax:action.scopeMax, nowPage:1};
    case CHANGE_OPTION:
      return {...state, listPage:action.listPage, products:action.products};
    case CHANGE_PAGE:
      console.log("ACTION");
      return {INITIAL_STATE};
  }

  return state;
}
