import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../App.css';

class Main extends Component {
    render() {
      return (
            <div className="main">
                <Row>
                    <Col className="card" sm={2}><h1>Ser</h1></Col>
                    <Col className="cardnum" smOffset={7} sm={2}><h1>0</h1></Col>
                    <Col sm={12}>
                        <Row className="infocard">
                            <Col sm={1}>
                                <h1>0</h1>
                            </Col>
                        </Row>  
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Main;
