import React from 'react';
import Main from './main/Main';
import NoMatch from './main/router/NoMatch';
import { browserHistory, BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';
import TempPage from './main/TempPage'
import AdInput from './admin/AdInput'


export default class App extends React.Component {
    render() {
      return(
        <Router history={browserHistory}>
          <div>
              <Match exactly pattern="/" component={Main} />
              <Match pattern="/advertise" component={Main} />
              <Match pattern="/opinion" component={Main} />
              <Match pattern="/partner" component={Main} />
              <Match pattern="/post/apl/adInput" component={AdInput} />
              <Match pattern="/temp/:id" component={TempPage} />
              <Miss component={NoMatch}/>
          </div>
        </Router>
      );
     }
  }
