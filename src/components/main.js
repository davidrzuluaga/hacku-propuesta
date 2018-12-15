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
    
    stepDivider = () => {
        var stepDivided = []
        this.state.info.map((info, index) => this.state.topic[0].step === info.step ? stepDivided.push(info) : info )
        return stepDivided
    }
    areaDivider = () => {
        var areaDivided = []
        this.stepDivider().map((info, index) => this.state.topic[0].area === info.area ? areaDivided.push(info) : info)
        return areaDivided
    }
    complete = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div className="main">
                <Row>
                    <Col className="card" sm={2}><h1>{this.state.topic[0].area}</h1></Col>
                    <Col className="cardnum" smOffset={7} sm={2}><h1>{this.areaDivider().length}</h1></Col>
                    <Col sm={12}>
                        {this.areaDivider().map((info, index) =>  
                        <Row key={info.title} className="infocard">
                            <Col sm={1} className="docfile">
                                <span className="fa fa-file-text-o col-md-1"></span>
                            </Col>
                            <Col sm={11}>
                                {info.step === "HS" || info.step === "fichas" ? <a href={info.url} target="_blank" rel="noopener noreferrer"><h1><strong>{info.title}</strong> - Aprende aquí</h1></a>: ""}
                                {info.step === "HS" ? <p>Conocimiento: <strong>{info.summary}</strong></p> : ""}
                                {info.step === "VC" ? <div className = "VCcard"><p><strong>{info.summary}</strong></p><p>Para enviar.</p></div> : ""}
                                {info.step === "HS" ? <p><a href={info.url} target="_blank" rel="noopener noreferrer">{info.url}</a></p> : ""}
                                {info.step === "HS" || info.step === "fichas" ? <p>{info.description}</p> : "" }
                                {info.step === "HS" ? <p className="likeicons"><i className="glyphicon glyphicon-ok" aria-hidden="true" title="Me gusta"></i> <i className="glyphicon glyphicon-remove" aria-hidden="true" title="No me gusta"></i></p> : ""}
                                <div onClick={this.complete.bind(this, info.title)} className="button pull-right">Completar</div>
                            </Col>
                        </Row>  
                        )}
                        <Row className={this.areaDivider().length === 0 ? "emptyinfocard" : "empty"}>                        
                        <p>{this.areaDivider().length === 0 && this.state.topic[0].step === "HS" ? 'Aún no tienes temas asignados te invitamos a que revises tu Plan de aprendizaje' : ""}</p>
                            <p>{this.areaDivider().length === 0 && this.state.topic[0].step === "fichas" ? "Aún no has completado ningún tema de este bloque." : ""}</p>
                            <p>{this.areaDivider().length === 0 && this.state.topic[0].step === "VC" ? "Aún no has completado ninguna competencia de este bloque." : ""}</p>
                        </Row>  
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Main;
