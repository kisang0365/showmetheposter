import React from 'react';
import {Navbar, Nav, NavItem, } from 'react-bootstrap';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';

import {titleStyle, linkColor} from '../../../css';

export default class MainNav extends React.Component  {

    render() {
        return(
           <Navbar fixedTop default collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link style={titleStyle} to="/">Zinobeen</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Navbar.Text>
                  <Navbar.Link style={linkColor} href="/advertise"> 경품 정보</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>
                  <Navbar.Link style={linkColor} href="/partner"> 고객 문의</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>
                  <Navbar.Link style={linkColor} href="/opinion"> 광고 문의</Navbar.Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}
