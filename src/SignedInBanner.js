import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';
import fire from './config/Fire';

class SignedInBanner extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
      return (
        <header fluid >
        <Row className="banner">
            <Col sm={12} md={10} lg={10}>
                <h1>Buy and Sell Textbooks Locally</h1>
            </Col>
            <Col sm={6} md={1} lg={1}>
                <Button onClick={this.logout}>Logout</Button>
            </Col>
            <Col sm={6} md={1} lg={1}>
                <Button>Account</Button>
            </Col>
        </Row>
        </header>
      );
    }
  }

  export default SignedInBanner;