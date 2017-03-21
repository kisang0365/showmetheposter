import axios from 'axios';
import cookie from 'react-cookie';
import * as config from '../config';
import * as types from './types';

const CLIENT_ROOT_DOMAIN = config.CLIENT_ROOT_DOMAIN;
const CLIENT_ROOT_URL = config.CLINET_ROOT_URL;

const API_ROOT_DOMAIN = CLIENT_ROOT_DOMAIN+'/api';
const API_ROOT_URL = CLIENT_ROOT_URL+'/api';

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



export function adInputData({name, url, picUrl, inputTime, expired}){
  return function (dispatch){
    var instance = axios.create({
        baseURL: API_ROOT_URL,
        timeout: 2000,
        headers: {'x-access-token': localStorage.getItem('token') }
    });

    instance.post(`/ad/input`, {name,url,picUrl, inputTime,expired })
    .then(response => {
      dispatch({ type: types.AD_INPUT_SUCCESS });
      alert("input success");
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, types.AD_INPUT_FAILED);
    });
  }
}
