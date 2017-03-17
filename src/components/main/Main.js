import React from 'react';
import MainNav from './router/MainNav';
import TopBanner from './router/TopBanner';
import Home from './router/Home';
import Ad from './ad/AdView'
import Opinion from './router/Opinion';
import Partner from './router/Partner';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';

export default class Main  extends React.Component  {
    render() {
	      return(
          <Router>
            <div>
              <MainNav/>
                <Match exactly pattern="/" component={Home} />
                <Match pattern="/advertise" component={Ad} />
                <Match pattern="/opinion" component={Opinion} />
                <Match pattern="/partner" component={Partner} />
                <Match pattern="/post/apl/adInput" component={Home} />

            </div>
          </Router>
        );
    }
}
