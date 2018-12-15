import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../assets/stylesheets/worknavbar.css';
import store from "../store";

class WorkNavbar extends Component {
    constructor() {
        super();
        this.state = {
            topic: [{step: "HS", area: "ser"}],
        }
        store.subscribe(() => {
            this.setState({
              topic: store.getState().topic
            })
          })
    }
    changearea = (a) => {
        var topic = this.state.topic.map((topic, i) => 0 === i ? {step: topic.step, area: a} : topic ); 
        this.setState({
            topic: topic
        })
        store.dispatch( {
            type: "setTopic",
            topic: topic
          })
    }
    changestep = (a) => {
        var topic = this.state.topic.map((topic, i) => 0 === i ? {step: a, area: topic.area} : topic ); 
        this.setState({
            topic: topic
        })
        store.dispatch( {
            type: "setTopic",
            topic: topic
        })
    }
    topic = () => {
        var topic = ""
        if (this.state.topic[0].step === "HS") {
            topic = "Hacker Space"
        } else if (this.state.topic[0].step === "fichas") {
            topic = "Fichas"
        } else if (this.state.topic[0].step === "VC") {
            topic = "Validaciones"
        }
        return topic
    }

    render() {
      return (
            <div className="workNavbar">
                <Row>
                    <Col sm={3} className="topic">
                        <h1>{this.topic()}</h1>
                    </Col>
                    <Col sm={2} className="doing hidden-xs">
                        <p><span className="fa fa-lightbulb-o"></span> Validar <span className="fa fa-chevron-down"></span></p>
                    </Col>
                    <Col sm={1} className="areas">
                        <p onClick={this.changearea.bind(this, "ser")}><span className="fa fa-line-chart"></span> ser <span className={this.state.topic[0].area === "ser" ? "areaselected" : ""}></span></p>
                        <p onClick={this.changearea.bind(this, "saber")}><span className="fa fa-area-chart"></span> saber <span className={this.state.topic[0].area === "saber" ? "areaselected" : ""}></span></p>
                        <p onClick={this.changearea.bind(this, "hacer")}><span className="fa fa-bar-chart"></span> hacer <span className={this.state.topic[0].area === "hacer" ? "areaselected" : ""}></span></p>
                    </Col>
                    <Col sm={3} className="steps">
                        <p onClick={this.changestep.bind(this, "HS")}><span className="fa fa-pie-chart"></span> Hacker Space <span className={this.state.topic[0].step === "HS" ? "stepselected" : ""}></span></p>
                        <p onClick={this.changestep.bind(this, "fichas")}><span className="fa fa-pie-chart"></span> Fichas  <span className={this.state.topic[0].step === "fichas" ? "stepselected" : ""}></span></p>
                        <p onClick={this.changestep.bind(this, "VC")}><span className="fa fa-check-square-o"></span> Validar Competencias <span className={this.state.topic[0].step === "VC" ? "stepselected" : ""}></span></p>
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
