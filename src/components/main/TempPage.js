import React from 'react';
import axios from 'axios';
import config from '../../config';
import {PageHeader, Image} from 'react-bootstrap';
import MediaQuery from 'react-responsive';

export const colCentered = {
  float: "none",
  margin: "0 auto",
  marginTop: "20px",
  textAlign: "center",
};

export const smallImgSize = {
  width: "auto",
  height: "200px",

};

export const mediumImgSize = {
  width: "auto",
  height: "300px",
};

export const largeImgSize = {
  width: "auto",
  height: "400px",
};



const TempPage = ({ params }) => {

  return (
    <div style = {colCentered} >
      <MediaQuery minDeviceWidth={1025}>
        <Image style={largeImgSize}  alt="900x500" src="/assets/logo.png"/>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MediaQuery maxDeviceWidth={500}>
          <Image style={smallImgSize}  alt="900x500" src="/assets/logo.png"/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={501}>
          <Image style={mediumImgSize}  alt="900x500" src="/assets/logo.png"/>
        </MediaQuery>
    </MediaQuery><br/> <br/>
    <PageHeader  > 이동중 입니다.....</PageHeader>

    </div>
  );
}

export default TempPage;
