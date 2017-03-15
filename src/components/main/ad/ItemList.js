
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {colCentered} from '../../../css';
import AdItem from '../../../containers/AdItem';


class ItemList extends React.Component{
  render(){
    return (
        <Grid>
          <Row style={colCentered}>
            <Col xs={6} md={3} >
              <AdItem item={this.props.ads[0]}/>
            </Col>
            <Col xs={6} md={3} >
              <AdItem item={this.props.ads[1]}/>
            </Col>
            <Col xs={6} md={3} >
              <AdItem item={this.props.ads[2]}/>
            </Col>
            <Col xs={6} md={3} >
              <Aditem={this.props.ads[3]}/>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default ItemList;
