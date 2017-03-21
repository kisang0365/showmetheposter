import React from 'react';
import {Carousel, Image} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export const bannerA ={
    float: "none",
    margin: "0 auto",
    marginTop: "50px",
    display: "table",
    marginLeft: "auto",
    marginRight: "auto"
};


export const smallImgSize = {
  width: "auto",
  height: "250px",
};

export const mediumImgSize = {
  width: "auto",
  height: "300px",
};

export const largeImgSize = {
  width: "auto",
  height: "400px",
};


  export default class TopBanner extends React.Component  {
      render() {
  	      return(

            <Carousel>
            <a style={bannerA} href="/advertise">
              <Carousel.Item >
                <MediaQuery minDeviceWidth={1025}>
                  <Image style={largeImgSize}  alt="900x500" src="/assets/ad1.png"/>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                  <MediaQuery maxDeviceWidth={500}>
                    <Image style={smallImgSize}  alt="900x500" src="/assets/ad1.png"/>
                  </MediaQuery>
                  <MediaQuery minDeviceWidth={501}>
                    <Image style={mediumImgSize}  alt="900x500" src="/assets/ad1.png"/>
                  </MediaQuery>
                </MediaQuery>
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            </a>
            </Carousel>
            <br/><br/><br/>
          );

      }
  }
