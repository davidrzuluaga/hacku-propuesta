import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap'
import '../App.css';

class NavbarComp extends Component {
    render() {
      return (
          <Navbar inverse className="navbar-fixed-top">
            <Navbar.Header>
              <Navbar.Brand className="navbar-left">
                <img src="https://s3.amazonaws.com/hacku.co/logo-blanco-baja.png" alt="logo"/>
              </Navbar.Brand>
              <Nav className="navbar-right">
                <NavItem eventKey={1} href="#feedback">
                  FEEDBACK
                </NavItem>
                <NavItem eventKey={2} href="#solicitudes">
                  <i class="fa fa-hand-pointer-o"></i>
                </NavItem>
                <NavItem className="calendar" eventKey={2} href="#calendario">
                  <i class="fa fa-calendar-o"></i>
                </NavItem>
                <NavItem eventKey={3} href="#stickynote">
                  <i class="fa fa-sticky-note-o"></i>
                </NavItem>
                <NavItem eventKey={4} href="#mensajes">
                  <i class="fa fa-envelope-o"></i>
                </NavItem>
                <NavItem eventKey={5} href="#usuario">
                  <i class="fa fa-user-o"></i>                  
                </NavItem>
              </Nav>
            </Navbar.Header>
          </Navbar>
        )
    }
}
export default NavbarComp;
