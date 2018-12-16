import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap'
import '../assets/stylesheets/secworknavbar.css';
import store from "../store";

class SecWorkNavbar extends Component {
    constructor() {
        super();
        this.state = {
            topic: [{step: "HS", area: "ser"}],
            scrollPosition: 0,
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
        var topic = ["", ""]
        if (this.state.topic[0].step === "HS") {
            topic[0] = "Hacker Space"
            topic[1] = "Aprende"
        } else if (this.state.topic[0].step === "fichas") {
            topic[0] = "Fichas"
            topic[1] = "He Aprendido"
        } else if (this.state.topic[0].step === "VC") {
            topic[0] = "Validaciones"
            topic[1] = "Validar"
        }
        return topic
    }
    render() {
        return (
            <div className={`slideInDown secWorkNavbar animated`}>
                <Row className="baritems bounceInLeft animated">
                    <Col sm={2} className="doing">
                        <p><span className="fa fa-lightbulb-o"></span> {this.topic()[1]} <span className="fa fa-chevron-down"></span></p>
                    </Col>
                    <Col sm={5} className="areas">
                        <p onClick={this.changearea.bind(this, "ser")}><span className="fa fa-line-chart"></span> ser <span className={this.state.topic[0].area === "ser" ? "areaselected" : ""}></span></p>
                        <p onClick={this.changearea.bind(this, "saber")}><span className="fa fa-area-chart"></span> saber <span className={this.state.topic[0].area === "saber" ? "areaselected" : ""}></span></p>
                        <p onClick={this.changearea.bind(this, "hacer")}><span className="fa fa-bar-chart"></span> hacer <span className={this.state.topic[0].area === "hacer" ? "areaselected" : ""}></span></p>                    </Col>
                    <Col sm={5} className="steps">
                    <p onClick={this.changestep.bind(this, "HS")}><span className="fa fa-pie-chart"></span> Hacker Space <span className={this.state.topic[0].step === "HS" ? "stepselected" : ""}></span></p>
                        <p onClick={this.changestep.bind(this, "fichas")}><span className="fa fa-pie-chart"></span> Fichas  <span className={this.state.topic[0].step === "fichas" ? "stepselected" : ""}></span></p>
                        <p onClick={this.changestep.bind(this, "VC")}><span className="fa fa-check-square-o"></span> Validar Competencias <span className={this.state.topic[0].step === "VC" ? "stepselected" : ""}></span></p>
                    </Col>
                </Row>
            </div>

        )
    }
}
export default SecWorkNavbar;
