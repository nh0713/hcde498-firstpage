import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount'
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import LoginBanner from './LoginBanner'

class LoginCreateAccount extends Component{
    render(){
        return (
            <div>
                <LoginBanner />
                <Container>
                    {/* <Row className="loginCreateAccount">
                        <Col sm={12} md={6} lg={6}>
                            <LoginPage />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <CreateAccount />
                        </Col>
                    </Row> */}
                    <Tabs className="tabs" defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab className="tab" eventKey="login" title="Login">
                            <LoginPage />
                        </Tab>
                        <Tab className="tab" eventKey="createAccount" title="Create Account">
                            <CreateAccount />
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        )
    }
}

export default LoginCreateAccount;