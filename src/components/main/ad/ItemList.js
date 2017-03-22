
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {colCentered} from '../../../css';
import AdItem from '../../../containers/AdItem';


class ItemList extends React.Component{
  render(){
    return (
        <Grid>
          <Row style={colCentered}>
            <Col xs={12} md={6} >
              <AdItem item={this.props.ads[0]}/>
            </Col>
            <Col xs={12} md={6} >
              <AdItem item={this.props.ads[1]}/>
            </Col>
            <Col xs={12} md={6} >
              <AdItem item={this.props.ads[2]}/>
            </Col>
            <Col xs={12} md={6} >
              <AdItem item={this.props.ads[3]}/>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default ItemList;
