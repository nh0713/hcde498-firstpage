import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class LoginBanner extends Component {
    render() {
      return (
        <Row className="banner">
            <Col sm={12} md={9} lg={9}>
                <img src={logo} alt="logo"></img>
                <h1>Textbook Buy & Sell</h1>
            </Col>
        </Row>
      );
    }
  }

  export default LoginBanner;