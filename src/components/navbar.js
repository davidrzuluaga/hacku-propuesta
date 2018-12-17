import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import Calendar from './calendar';
import Solicitudes from './solicitudes';
import Mensajes from './mensajes';
import Feedback from './feedback';
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
                  <Feedback />
                </li>
                <li>
                  <Solicitudes />
                </li>
                <li className="calendar">
                  <Calendar />
                </li>
                <li>
                  <Mensajes />
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
