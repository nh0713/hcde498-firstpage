import React, { Component } from 'react';
import './App.css';
import LoginPage from './Login'
import CreateAccount from './CreateAccount'
import { Container, Row, Col } from "react-bootstrap";
import LoginBanner from './LoginBanner'

class LoginCreateAccount extends Component{
    render(){
        return (
            <div>
                <LoginBanner />
                <Row className="loginCreateAccount">
                    <Col sm={12} md={6} lg={6}>
                        <LoginPage />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <CreateAccount />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginCreateAccount;