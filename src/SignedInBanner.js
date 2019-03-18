import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Row, Col, Button, Container } from 'react-bootstrap';
import fire from './config/Fire';
import logo from './reading.svg';

class SignedInBanner extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.user = fire.auth().currentUser;
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
      return (
          <Container fluid>
                <Row className="banner">
                    <Col sm={12} md={4} lg={10}>
                        <Link to='/hcde498-firstpage/searchPage'>
                        {/* <Link to='/searchPage'> */}
                            <img src={logo} alt="logo"></img>
                        </Link>
                    </Col>
                    <Col className="colLogoutAccount" sm={6} md={4} lg={1}>
                        <i class="far fa-user fa-3x"></i>
                        {/* <Button className="btnBanner">Account ({this.user.email})</Button> */}
                    </Col>
                    <Col className="colLogoutAccount" sm={6} md={4} lg={1}>
                        <Link to='/hcde498-firstpage/'>
                        {/* <Link to='/'> */}
                            <i class="fas fa-sign-out-alt fa-3x" onClick={this.logout}></i>
                        </Link>
                    </Col>
                </Row>
          </Container>
      );
    }
  }

  export default SignedInBanner;