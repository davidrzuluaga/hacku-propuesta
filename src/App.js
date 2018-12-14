import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import './App.css';
import ScrollListener from 'react-scroll-listen'
import NavbarComp from './components/navbar'
import SecWorkNavbar from './components/secworknavbar'
import Main from './components/main'
import WorkNavbar from './components/worknavbar'
import Footer from './components/footer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      scrollPosition: 0,
      workNavbar: ""
    }
  }
  hidebar = () => {
    if (this.state.scrollPosition > 200 && this.state.workNavbar === "hidden") {
      this.setState ({
        workNavbar: ""
      })
    } else if (this.state.scrollPosition < 200 && this.state.workNavbar === "") {
      this.setState ({
        workNavbar: "hidden"
      })
    }
  }
  render() {
    this.hidebar()
    return (
      <div>
        <NavbarComp />
        <ScrollListener onScroll={value => this.setState({scrollPosition: value})}/>
        <div className={`${this.state.workNavbar} hidden-xs`}>
          <SecWorkNavbar />
        </div>
        <div className="app">
          <Row>
            <Col mdOffset={1} md={10}>
              <WorkNavbar />
            </Col>
            <Col mdOffset={2} md={8}>
              <Main />
            </Col> 
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
