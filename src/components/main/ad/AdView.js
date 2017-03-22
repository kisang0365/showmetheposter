
import React from 'react';
import {Grid, Row, Col, ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
import {colCentered} from '../../../css';

import ItemList from './ItemList';
import PageItem from './PageItem';
import TopBanner from './TopBanner';
import OptionItem from './OptionItem';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import * as config from '../../../config';

class AdView extends React.Component  {

  constructor(props) {
      super(props);
      this.refresh = this.refresh.bind(this);
      this.refresh();
    }

  componentDidUpdate(prevProps, prevState){

    if( this.props.sortBy != prevProps.sortBy ||
        this.props.nowPage != prevProps.nowPage ||
        this.props.adType != prevProps.adType ){
            this.refresh();
      }
    }

    refresh(){
      const {adType, sortBy, nowPage, listPage, ads} = this.props;
      var url = 'api/list/'+sortBy + '/' + nowPage;
      axios.get(url)
        .then(res => {
          this.props.handleOnChange(res.data);
          document.body.scrollTop = 0;
        });
    }

    render() {
            const {adType, sortBy, nowPage, listPage, ads} = this.props;

    	      return(
              <div>
                <br/><OptionItem adType={adType} onAdTypeClick={this.props.handleOnAdTypeChange} /><br/>
                <ItemList ads={ads.slice(0,4)}/>
                <ItemList ads={ads.slice(4,8)}/>
                <ItemList ads={ads.slice(8,12)}/>

                <PageItem onPageClick={this.props.handleOnPageChange} pages={listPage} nowPage={nowPage} />
                <br/><br/><br/>
                <br/><br/><br/>
              </div>
            );
        }
    }

const mapStateToProps = (state) =>{
  return {
    adType:state.getList.adType,
    sortBy:state.getList.sortBy,    //recentu or recentd or priceu or priced
    nowPage:state.getList.nowPage,
    listPage:state.getList.listPage,  //리스트 페이지 갯수
    ads:state.getList.ads
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnPageChange : (page) => {
      dispatch(actions.changeNowPage(page))
    },
    handleOnAdTypeChange : (adType) => {
      dispatch(actions.changeAdType(adType))
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
