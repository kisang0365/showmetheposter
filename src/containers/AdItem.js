import React from 'react';
import {Image} from 'react-bootstrap';
import axios from 'axios';
import * as config from '../config';
import {colCentered, borderLine, divContent, leftAlign} from '../css';
import MediaQuery from 'react-responsive';
import {Grid, Row, Col} from 'react-bootstrap';

  export const smallImgSize = {
    border: "1px solid lightgrey",
    borderRadius:"10px",
    width: "140px",
    height: "140px",
  };

  export const mediumImgSize = {
    border: "1px solid lightgrey",
    borderRadius:"10px",
    width: "200px",
    height: "200px",
  };

  export const largeImgSize = {
    border: "1px solid lightgrey",
    borderRadius:"10px",
    width: "250px",
    height: "250px",
  };



export default class AdItem  extends React.Component  {
  constructor(props) {
        super(props);

        this.state = {
          hover: false,
          item: this.props.item,
        };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item !== nextProps.item) {
      this.setState({ item: nextProps.item });
    }
  }

  mouseClick(){
    //  window.ga('send', 'itemClick', "this.state.item.name");
      window.open( "/temp/"+this.state.item._id,'_blank');
  }

  mouseOver() {
      this.setState({hover: true});
  }

  mouseOut() {
      this.setState({hover: false});
  }

  render() {
      var linkStyle = { cursor:'pointer',whiteSpace:"normal"};
      var fontStyle = { color:'black',whiteSpace: "nowrap",textOverflow: "ellipsis", overflow: "hidden"};

      var item;
      if( this.state.item == undefined ){
        return (<div></div>);
      }else{
        item = this.state.item;
      }


	    return(
          <div style={linkStyle} onMouseOver={this.mouseOver.bind(this)}
            onMouseOut={this.mouseOut.bind(this)} onClick={this.mouseClick.bind(this)}>
            <Grid style = {colCentered}>
              <Row>
                  <Col xs = {6} md={3} lg={3}>
                    <MediaQuery minDeviceWidth={1025}>
                      <Image style={largeImgSize} src={item.picUrl} rounded />
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                      <MediaQuery maxDeviceWidth={500}>
                        <Image style={smallImgSize} src={item.picUrl} rounded/>
                      </MediaQuery>
                      <MediaQuery minDeviceWidth={501}>
                        <Image style={mediumImgSize} src={item.picUrl} rounded/>
                      </MediaQuery>
                    </MediaQuery>
                  </Col>
                  <Col style ={leftAlign}  xs = {6} md={3} lg={3}>
                   <p style={fontStyle} >
                    <b> [{item.name}] </b><br/>
                   </p>
                   <p style={fontStyle} >
                    <b>03.22 ~ 04.05</b><br/>
                   </p> 
                   <p style={fontStyle} >
                    <b>경품</b><br/>
                   </p>
		   <ul style= {fontStyle} >
			<li>스타벅스 기프티콘 </li>
			<li>슬리퍼 </li>
		   </ul>
	         </Col>
             </Row>
           </Grid>
          </div>
      );
    }
}
