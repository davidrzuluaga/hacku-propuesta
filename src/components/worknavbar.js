import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../App.css';

class WorkNavbar extends Component {
    render() {
      return (
            <div className="workNavbar">
                <Row>
                    <Col sm={3} className="topic">
                        <h1>Validaciones</h1>
                    </Col>
                    <Col sm={2} className="doing">
                        <p><span class="fa fa-lightbulb-o"></span> Validar <span class="fa fa-chevron-down"></span></p>
                    </Col>
                    <Col sm={1} className="areas">
                        <p><span class="fa fa-line-chart"></span> ser</p>
                        <p><span class="fa fa-area-chart"></span> saber</p>
                        <p><span class="fa fa-bar-chart"></span> hacer</p>
                    </Col>
                    <Col sm={3} className="steps">
                        <p><span class="fa fa-pie-chart"></span> Hacker Space</p>
                        <p><span class="fa fa-pie-chart"></span> Fichas</p>
                        <p><span class="fa fa-check-square-o"></span> Validar Competencias</p>
                    </Col>
                    <Col sm={1} className="logo">
                        <h3><img src="https://s3.amazonaws.com/hacku.co/x-baja.png" alt="" /></h3>
                    </Col>                    
                </Row>
            </div>

        )
    }
}
export default WorkNavbar;
