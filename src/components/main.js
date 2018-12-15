import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../App.css';
import info from './info'
import store from "../store";

class Main extends Component {
    constructor() {
        super();
        this.state = {
          info: info,
          topic: [{step: "HS", area: "ser"}],
        }
        store.subscribe(() => {
            this.setState({
              topic: store.getState().topic
            })
          })
      }
    render() {
      return (
            <div className="main">
                <Row>
                    <Col className="card" sm={2}><h1>{this.state.topic[0].area}</h1></Col>
                    <Col className="cardnum" smOffset={7} sm={2}><h1>0</h1></Col>
                    <Col sm={12}>
                        <Row className="infocard">
                            <Col sm={1} className="docfile">
                                <span className="fa fa-file-text-o col-md-1"></span>
                            </Col>
                            {this.state.info.map((info, index) =>  
                                <Col key={info.title} sm={11}>
                                    <a href={info.url}><h1><strong>{info.title}</strong> - Aprende aquí</h1></a>
                                    <p>Conocimiento: <strong>{info.summary}</strong></p>
                                    <p><a href={info.url}>{info.url}</a></p>
                                    <p>{info.description}</p>
                                    <p className="likeicons"><i className="glyphicon glyphicon-ok" aria-hidden="true" title="Me gusta"></i> <i className="glyphicon glyphicon-remove" aria-hidden="true" title="No me gusta"></i></p>
                                </Col>
                            )}
                        </Row>  
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Main;
