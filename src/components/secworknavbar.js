import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../assets/stylesheets/secworknavbar.css';

class SecWorkNavbar extends Component {
    render() {
      return (
            <div className="secWorkNavbar">
                <Row className="baritems">
                    <Col sm={2} className="doing">
                        <p><span className="fa fa-lightbulb-o"></span> Validar <span className="fa fa-chevron-down"></span></p>
                    </Col>
                    <Col sm={5} className="areas">
                        <p><span className="fa fa-line-chart"></span> ser</p>
                        <p><span className="fa fa-area-chart"></span> saber</p>
                        <p><span className="fa fa-bar-chart"></span> hacer</p>
                    </Col>
                    <Col sm={5} className="steps">
                        <p><span className="fa fa-pie-chart"></span> Hacker Space</p>
                        <p><span className="fa fa-pie-chart"></span> Fichas</p>
                        <p><span className="fa fa-check-square-o"></span> Validar Competencias</p>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default SecWorkNavbar;
