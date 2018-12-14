import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../assets/stylesheets/navbar.css';

class NavbarComp extends Component {
    render() {
      return (
        <div className="Navbar">
          <Row>
            <Col smOffset={1} sm={2} className="logonav">
                <img src="https://s3.amazonaws.com/hacku.co/logo-blanco-baja.png" alt="logo"/>
            </Col>
            <Col sm={4} className="navitems">
              <ul>
                <li>
                  <a href="#feedback">FEEDBACK</a>
                </li>
                <li>
                  <a href="#solicitudes"><i className="fa fa-hand-pointer-o"></i></a>
                </li>
                <li className="calendar">
                  <a href="#calendario"><i className="fa fa-calendar-o"></i></a>
                </li>
                <li>
                  <a href="#stickynote"><i className="fa fa-sticky-note-o"></i></a>
                </li>
                <li>
                  <a href="#mensajes"><i className="fa fa-envelope-o"></i></a>
                </li>
                <li>
                  <a href="#usuario"><i className="fa fa-user-o"></i></a>                  
                </li>
              </ul> 
            </Col>
          </Row>
        </div>
        )
    }
}
export default NavbarComp;
