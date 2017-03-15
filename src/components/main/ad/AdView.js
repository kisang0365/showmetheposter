
import React from 'react';
import {Grid, Row, Col, ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
import {colCentered} from '../../../css';

import ItemList from './ItemList';
import PageItem from './PageItem';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import config from '../../../config';

class AdView extends React.Component  {

  constructor(props) {
      super(props);
    }

  componentDidUpdate(prevProps, prevState){

    if( this.props.sortBy != prevProps.sortBy ||
        this.props.nowPage != prevProps.nowPage ||
        this.props.scopeMin != prevProps.scopeMin ||
        this.props.scopeMax != prevProps.scopeMax ){

      }
    }

    render() {
            const {nowPage, listPage,products} = this.props;

    	      return(
              <div>
                <ItemList ads={products.slice(0,4)}/>
                <ItemList ads={products.slice(4,8)}/>
                <ItemList ads={products.slice(8,12)}/>

                <PageItem onPageClick={this.props.handleOnPageChange} pages={listPage} nowPage={nowPage} />
                <br/><br/><br/>
                <br/><br/><br/>
              </div>
            );
        }
    }

const mapStateToProps = (state) =>{
  return {
    sortBy:state.getList.sortBy,    //recentu or recentd or priceu or priced
    nowPage:state.getList.nowPage,
    listPage:state.getList.listPage,  //리스트 페이지 갯수
    scopeMin:state.getList.scopeMin,
    scopeMax:state.getList.scopeMax,
    ads:state.getList.ads
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnPageChange : (page) => {
      dispatch(actions.changeNowPage(page))
    },

    handleOnChange : (data) => {
      dispatch(
        actions.changeOption({
          ads: data.ads,
          listPage: data.listPage
        }));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdView);
//export default CategoryView;
