import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../App.css';

class WorkNavbar extends Component {
    render() {
      return (
            <div className="workNavbar">
                <Row>
                    <Col md={2} className="topic">
                        <h1>Validaciones</h1>
                    </Col>
                    <Col md={2}>
                        <div className="doing"><p><span class="fa fa-lightbulb-o"></span> Validar <span class="fa fa-chevron-down"></span></p></div>
                    </Col>
                    <Col md={2} className="areas">
                        <p><span class="fa fa-line-chart"></span> ser</p>
                        <p><span class="fa fa-area-chart"></span> saber</p>
                        <p><span class="fa fa-bar-chart"></span> hacer</p>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default WorkNavbar;
