
import React from 'react';
import {Form,FormControl, Grid, Row, Col, ButtonToolbar, Button, ButtonGroup, Glyphicon} from 'react-bootstrap';
import {ReadMore,Truncate} from 'react-read-more';
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
              <button style={this.props.adType==adTypeEnglishName[i] ? selected : unSelected} onClick={this.handleAdTypeClick(adTypeEnglishName[i])} > adTypeKoreanName[i] </button>
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
                <b>이벤트 타입</b>
                {' '}
              </Col>
              <Col style = {leftAlign} xs = {6} md={2} lg = {2}>
                {this.typeSelect}
              </Col>
            </Row>
         </Grid>

        );
    }
}
/*

*/

export default OptionItem;
