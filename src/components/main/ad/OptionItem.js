
import React from 'react';
import {Form,FormControl, Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import {colCentered,borderLine, selected, unSelected, divContent, leftAlign, rightAlign, formEdit, adTypeEnglishName, adTypeKoreanName} from '../../../css';
import config from '../../../config';
import axios from 'axios';

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
              <button style={this.props.adType==adTypeEnglishName[i] ? selected : unSelected} onClick={this.handleAdTypeClick(adTypeEnglishName[i])} > {adTypeKoreanName[i]} </button>
               )
           );
     }

    render() {
      //,brand, sortBy, scopeMin, scopeMax
        const {adType} = this.props;

	 return(
          <Grid style={borderLine}>
            <Row style={colCentered}>
              <Col style = {rightAlign} xsOffset={2} mdOffset={4} lgOffset={4} xs={3} md={2} lg={2} >
                <button style = {unSelected}> 이벤트 타입 </button>
                {' '}
              </Col>
              <Col style = {leftAlign} xs = {6} md={2} lg = {2}>
                <button style={this.props.adType=='All' ? selected : unSelected} onClick={this.handleAdTypeClick('All')} > 전체보기 </button>
              </Col>
            </Row>
            <Row style={colCentered}>
              <Col style = {colCentered} xs = {12} md={12} lg = {12}>
                {this.typeSelect()}
              </Col>
            </Row>
         </Grid>

        );
    }
}
/*

*/

export default OptionItem;
