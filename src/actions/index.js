import axios from 'axios';
import cookie from 'react-cookie';
import config from '../config';
import * as types from './types';

const API_ROOT_DOMAIN = config.CLIENT_ROOT_DOMAIN+'/api';
const API_ROOT_URL = config.CLIENT_ROOT_URL+'/api';

/**********************************
*
* 카테고리 액션
*
***********************************/
export function changeOption(data) {
    return {
        type: types.CHANGE_OPTION,
        ads : data.ads,
        listPage : data.listPage
    };
}

export function changeAdType(t) {
    return {
        type: types.CHANGE_ADTYPE,
        adType : t
    };
}

export function changeNowPage(page) {
    return {
        type: types.CHANGE_NOWPAGE,
        nowPage: page
    };
}

export function changePage() {
    return {
        type: types.CHANGE_PAGE
    };
}



export function adInputData({name, adType, url, picUrl, inputTime, expired}){
  return function (dispatch){
    var instance = axios.create({
        baseURL: API_ROOT_URL,
        timeout: 2000,
        headers: {'x-access-token': localStorage.getItem('token') }
    });

    instance.post(`/ad/input`, {name, adType, url,picUrl, inputTime,expired })
    .then(response => {
      dispatch({ type: types.AD_INPUT_SUCCESS });
      alert("input success");
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, types.AD_INPUT_FAILED);
    });
  }
}
