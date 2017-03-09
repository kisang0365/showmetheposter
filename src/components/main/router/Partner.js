import React from 'react';
import PartnerForm from './PartnerForm';

export default class Partner extends React.Component{

  constructor(props){
    super(props);
    window.ga('send', 'pageview', "PartnerPage");
  }

  render(){
      return (
        <div>
          <PartnerForm/>
        </div>
    );
  }
}
