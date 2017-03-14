import React from 'react';
import Main from './main/Main';
import NoMatch from './main/router/NoMatch';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';
import Ad from './main/ad/AdView';
import AdInput from './admin/AdInput'


export default class App extends React.Component {
    render() {
      return(
        <Router>
          <div>
              <Match exactly pattern="/" component={Main} />
              <Match pattern="/advertise" component={Ad} />
              <Match pattern="/opinion" component={Main} />
              <Match pattern="/partner" component={Main} />
              <Match pattern="/posts/apl/adInput" component={AdInput} />
              <Miss component={NoMatch}/>
          </div>
        </Router>
      );
     }
  }
