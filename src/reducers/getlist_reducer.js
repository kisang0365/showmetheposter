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
   ads:[]
 };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_SORTBY:
      return {...state, sortBy:action.sortBy, nowPage:1};
    case CHANGE_NOWPAGE:
      return {...state, nowPage:action.nowPage};
    case CHANGE_PAGE:
      console.log("ACTION");
      return {INITIAL_STATE};
  }
  return state;
}
