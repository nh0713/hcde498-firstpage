import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';
import fire from './config/Fire';
import logo from './logo.svg';

class SignedInBanner extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
      return (
        <Row className="banner">
            <Col sm={12} md={9} lg={9}>
                <img src={logo} alt="logo"></img>
                <h1>Textbook Buy & Sell</h1>
            </Col>
            <Col sm={6} md={1} lg={1}>
                <Link to='/'>
                    <Button onClick={this.logout}>Logout</Button>
                </Link>
            </Col>
            <Col sm={6} md={2} lg={2}>
                <Button>Acccount ({this.user.email})</Button>
            </Col>
        </Row>
      );
    }
  }

  export default SignedInBanner;