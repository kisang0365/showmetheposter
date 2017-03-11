import React from 'react';
import OpinionForm from './OpinionForm';

export default class Opinion extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
      return (
        <div>
          <OpinionForm/>
        </div>
    );
  }
}
