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
    width: "100px",
    height: "120px",
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

  export const largeFont = {
	marginLeft : "15px",
	fontSize : "1.3em",
        overflow : "hidden",
	textOverflow:"ellipsis",
	whiteSpace:"nowrap",
  };

  export const middleFont = {
	marginLeft : "15px",
	fontSize : "1.2em",
        overflow : "hidden",
	textOverflow:"ellipsis",
	whiteSpace:"nowrap",
  };
  export const smallFont = {
	marginLeft : "5px",
	fontSize : "0.9em",
        overflow : "hidden",
	textOverflow:"ellipsis",
	whiteSpace:"nowrap",
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
                  <Col xs = {5} md={3} lg={3}>
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
                  <Col style ={leftAlign}  xs = {7} md={3} lg={3}>
                    <MediaQuery minDeviceWidth={1025}>
                  	 <p style={largeFont} >
                    	 <b> [{item.name}] </b><br/>
                   	</p>
                   	<p style={largeFont} >
                    	<b>03.22 ~ 04.05</b><br/>
                   	</p> 
                   	<p style={largeFont} >
                    	<b>경품</b><br/>
                   	</p>
		   	<ul style= {largeFont} >
				<li>스타벅스 기프티콘 </li>
				<li>슬리퍼 </li>
		   	</ul>
                     </MediaQuery>
                    <MediaQuery maxDeviceWidth={1224}>
                      	<MediaQuery maxDeviceWidth={500}> 
                  	 <p style={smallFont} >
                    	 <b> [{item.name}] </b><br/>
                   	 </p>
                   	 <p style={smallFont} >
                    	 <b>03.22 ~ 04.05</b><br/>
                   	 </p> 
                   	 <p style={smallFont} >
                    	 <b>경품</b><br/>
                   	 </p>
		   	 <ul style= {smallFont} >
				<li>스타벅스 기프티콘 </li>
				<li>슬리퍼 </li>
		   	 </ul>
                     	</MediaQuery>
                      	<MediaQuery minDeviceWidth={501}> 
                  	 <p style={middleFont} >
                    	 <b> [{item.name}] </b><br/>
                   	</p>
                   	<p style={middleFont} >
                    	<b>03.22 ~ 04.05</b><br/>
                   	</p> 
                   	<p style={middleFont} >
                    	<b>경품</b><br/>
                   	</p>
		   	<ul style= {middleFont} >
				<li>스타벅스 기프티콘 </li>
				<li>슬리퍼 </li>
		   	</ul>
                     	</MediaQuery>
                     </MediaQuery>
	         </Col>
             </Row>
           </Grid>
          </div>
      );
    }
}
