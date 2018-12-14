import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../assets/stylesheets/worknavbar.css';

class WorkNavbar extends Component {
    render() {
      return (
            <div className="workNavbar">
                <Row>
                    <Col sm={3} className="topic">
                        <h1>Validaciones</h1>
                    </Col>
                    <Col sm={2} className="doing hidden-xs">
                        <p><span className="fa fa-lightbulb-o"></span> Validar <span className="fa fa-chevron-down"></span></p>
                    </Col>
                    <Col sm={1} className="areas">
                        <p><span className="fa fa-line-chart"></span> ser</p>
                        <p><span className="fa fa-area-chart"></span> saber</p>
                        <p><span className="fa fa-bar-chart"></span> hacer</p>
                    </Col>
                    <Col sm={3} className="steps">
                        <p><span className="fa fa-pie-chart"></span> Hacker Space</p>
                        <p><span className="fa fa-pie-chart"></span> Fichas</p>
                        <p><span className="fa fa-check-square-o"></span> Validar Competencias</p>
                    </Col>
                    <Col sm={1} className="hidden-xs logo">
                        <h3><img src="https://s3.amazonaws.com/hacku.co/x-baja.png" alt="" /></h3>
                    </Col>                    
                </Row>
            </div>

        )
    }
}
export default WorkNavbar;
