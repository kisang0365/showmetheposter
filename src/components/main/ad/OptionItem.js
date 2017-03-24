
import React from 'react';
import {Form,FormControl, Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import {colCentered,borderLine, selected, unSelected, leftAlign, rightAlign, adTypeEnglishName, adTypeKoreanName, optionColCentered} from '../../../css';
import config from '../../../config';
import axios from 'axios';
import MediaQuery from 'react-responsive';

  export const optionFont = {
	fontSize : "1.0em",
  };


class OptionItem extends React.Component  {
    constructor(props) {
      super(props);

    }

    componentDidMount() {

    }

    handleAdTypeClick = (adType) => () => {
      this.props.onAdTypeClick(adType);
    }

    typeSelect() { 
            return( 
                  adTypeEnglishName.map( (n,i) =>
                      <span style={optionFont} > &nbsp;&nbsp;<a style={this.props.adType==adTypeEnglishName[i] ? selected : unSelected} onClick={this.handleAdTypeClick(adTypeEnglishName[i])} > {adTypeKoreanName[i]}</a></span>
                       )
           );
     }

    render() {
      //,brand, sortBy, scopeMin, scopeMax
        const {adType} = this.props;

	 return(
          <div style={borderLine}>
              <div style={optionColCentered}>
                <span style={optionFont}> 이벤트 타입&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;</span>
                <span style={optionFont}> <a style={this.props.adType=='All' ? selected : unSelected} onClick={this.handleAdTypeClick('All')} > 전체보기 </a></span>
                {this.typeSelect()}
              </div>
        </div>
        );
    }
}
/*

*/

export default OptionItem;
