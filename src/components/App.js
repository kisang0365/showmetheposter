import React from 'react';
import Main from './main/Main';
import NoMatch from './main/router/NoMatch';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';
import Ad from './main/ad/AdView';


export default class App extends React.Component {
    render() {
      return(
        <Router>
          <div>
              <Match exactly pattern="/" component={Main} />
              <Match pattern="/advertise" component={Ad} />
              <Match pattern="/opinion" component={Main} />
              <Match pattern="/partner" component={Main} />
              <Miss component={NoMatch}/>
          </div>
        </Router>
      );
     }
  }
