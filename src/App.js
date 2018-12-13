import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './App.css';
import NavbarComp from './components/navbar'
import WorkNavbar from './components/worknavbar'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarComp />
        <Row className="show-grid">
          <Col mdOffset={1} md={10}>
            <WorkNavbar />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
