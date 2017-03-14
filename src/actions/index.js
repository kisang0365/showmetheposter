import axios from 'axios';
import cookie from 'react-cookie';
import config from '../config';
import * as types from './types';

const CLIENT_ROOT_URL = config.CLIENT_ROOT_URL;
const API_URL = CLIENT_ROOT_URL+'/api';


/**********************************
*
* 카테고리 액션
*
***********************************/
export function changeOption(data) {
    return {
        type: types.CHANGE_OPTION,
        products : data.products,
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
