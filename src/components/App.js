import React from 'react';
import Main from './main/Main';
import NoMatch from './main/router/NoMatch';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';
import AdInput from './admin/AdInput'


export default class App extends React.Component {
    render() {
      return(
        <Router>
          <div>
              <Match exactly pattern="/" component={Main} />
              <Match pattern="/advertise" component={Main} />
              <Match pattern="/opinion" component={Main} />
              <Match pattern="/partner" component={Main} />
              <Match pattern="/post/apl/adInput" component={Main} />
              <Miss component={NoMatch}/>
          </div>
        </Router>
      );
     }
  }
