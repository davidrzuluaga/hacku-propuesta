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
                            <Col sm={1} className="docfile">
                                <span className="fa fa-file-text-o col-md-1"></span>
                            </Col>
                            <Col sm={11}>
                                <a href="https://www.coursera.org/learn/aprendiendo-a-aprender"><h1><strong>Aprendiendo a aprender: Poderosas herramientas mentales con las que podrás dominar temas difíciles</strong> - Aprende aquí</h1></a>
                                <p>Conocimiento: <strong>Aprender a Aprender</strong></p>
                                <p><a href="https://www.coursera.org/learn/aprendiendo-a-aprender">https://www.coursera.org/learn/aprendiendo-a-aprender</a></p>
                                <p>Este curso te brinda acceso a invaluables técnicas de aprendizaje utilizadas por expertos en diferentes disciplinas. Aprendrerás cómo el cerebro utiliza dos modos de aprendizaje muy distintos y cómo encapsula (“fragmenta”) la información. Te hablaremos sobre ilusiones de aprendizaje, técnicas de memoria, cómo ocuparse de la procrastinación y las mejores prácticas, según lo demuestra la investigación, para ayudarte a dominar los temas más complicados. Ten muy en cuenta: Los videos están en inglés, puedes poner subtítulos en español.</p>
                                <p className="likeicons"><i className="glyphicon glyphicon-ok" aria-hidden="true" title="Me gusta"></i> <i className="glyphicon glyphicon-remove" aria-hidden="true" title="No me gusta"></i></p>
                            </Col>
                        </Row>  
                    </Col>
                </Row>
            </div>

        )
    }
}
export default Main;
