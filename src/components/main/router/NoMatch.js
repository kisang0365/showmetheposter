import React from 'react';
import {Image, Thumbnail} from 'react-bootstrap';
import config from '../../../config';
import MediaQuery from 'react-responsive';


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



export default class NoMatch  extends React.Component  {
    render() {
	      return(
          <div>
              <MediaQuery minDeviceWidth={1025}>
                <Image style={largeImgSize} alt="pagenotfound" src={config.CLIENT_ROOT_DOMAIN+"/assets/page_not_found.png"} />
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1224}>
                <MediaQuery maxDeviceWidth={500}>
                  <Image style={smallImgSize} alt="pagenotfound" src={config.CLIENT_ROOT_DOMAIN+"/assets/page_not_found.png"} />
                </MediaQuery>
                <MediaQuery minDeviceWidth={501}>
                  <Image style={mediumImgSize} alt="pagenotfound" src={config.CLIENT_ROOT_DOMAIN+"/assets/page_not_found.png"} />
                </MediaQuery>
              </MediaQuery>
          </div>
        );
    }
}
