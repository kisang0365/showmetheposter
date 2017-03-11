import React from 'react';
import PartnerForm from './PartnerForm';

export default class Partner extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
      return (
        <div>
          <PartnerForm/>
        </div>
    );
  }
}
