import React, { Component } from 'react';
//import {Row, Col } from 'react-bootstrap'
import '../App.css';

class Footer extends Component {
    render() {
      return (
            <div className="footer">
                {/* <Row>
                    <Col sm={2}> */}
                        <p>2018 hackU. Todos los derechos reservados</p>
                    {/* </Col>
                </Row> */}
            </div>

        )
    }
}
export default Footer;