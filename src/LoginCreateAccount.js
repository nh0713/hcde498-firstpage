import React, { Component } from 'react';
import './App.css';
import LoginPage from './Login'
import CreateAccount from './CreateAccount'
import { Container, Row, Col } from "react-bootstrap";

class LoginCreateAccount extends Component{
    render(){
        return (
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <LoginPage />
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <CreateAccount />
                </Col>
            </Row>
        )
    }
}

export default LoginCreateAccount;