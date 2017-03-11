import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Router from 'react-router/BrowserRouter';
import {titleStyle, linkColor} from '../../../css';

export default class MainNav extends React.Component  {

    handleOpinionClick = () => {
      window.location.href= '/opinion';
    }
    handlePartnerClick = () => {
      window.location.href= '/partner';
    }


    render() {
        return(
            <Navbar fixedTop default collapseOnSelect >
              <Navbar.Header>
                <Navbar.Brand>
                  <Link style={titleStyle} to="/">Zinobeen</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem><Link onClick={this.handleCategoryClick} style={linkColor}>경품정보</Link></NavItem>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} ><a onClick={this.handleOpinionClick} style={linkColor}>문의 사항</a></NavItem>
                  <NavItem eventKey={2} ><a onClick={this.handlePartnerClick} style={linkColor}>광고 문의</a></NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}
