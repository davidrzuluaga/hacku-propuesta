import React, { Component } from 'react';
import {Modal, Button, ButtonToolbar } from 'react-bootstrap'
import '../App.css';

class Solicitudes extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
      this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
      this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  
      this.state = {
        show: false,
        animatethis: "hidden",
        animateWhat: "bounceIn"
      };
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    handleHide() {
      this.setState({ show: false });
    }
    mouseEnterHandler() {
        this.setState({ 
            animatethis: "",
            animateWhat: "bounceIn"
        });
    }
    mouseLeaveHandler() {
        this.setState({ 
            animateWhat: "bounceOut"
        });
        var change = () => {
            this.setState({
                animatethis: "hidden",             
            })
        }
        setTimeout(function () {change()}, 600);
    }
    
    render() {
      return (
        <ButtonToolbar>
            <a onClick={this.handleShow}><i className="fa fa-hand-pointer-o"></i></a>
          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            bsSize="large"
            dialogClassName="custom-modal"
            className="solicitudes"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">
                Solicitudes
              </Modal.Title>
            </Modal.Header>
            <Modal.Body onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
                <div className={`${this.state.animatethis}`}>
                    <p className={`${this.state.animateWhat} animate`}>Formulario con fines ilustrativos</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
  }
  
export default Solicitudes