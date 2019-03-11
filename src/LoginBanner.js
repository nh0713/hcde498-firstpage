import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class LoginBanner extends Component {
    render() {
      return (
        <Container fluid>
          <Row className="banner">
              <Col sm={12} md={8} lg={9}>
                {/* <Link to='/hcde498-firstpage/'> */}
                  <Link to='/'>
                    <img src={logo} alt="logo"></img>
                </Link>
              </Col>
              <Col className="colLogoutAccount" sm={6} md={2} lg={2}>
                  {/* <Button variant="info">Account</Button> */}
              </Col>
              <Col className="colLogoutAccount" sm={6} md={2} lg={1}>
                  <Link to='/'>
                      {/* <Button variant="dark">Logout</Button> */}
                  </Link>
              </Col>
            </Row>
          </Container>
      );
    }
  }

  export default LoginBanner;