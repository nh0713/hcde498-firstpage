import React, { Component } from 'react';
import './App.css';
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount'
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import LoginBanner from './LoginBanner'
import Footer from './Footer'

class LoginCreateAccount extends Component{
    render(){
        return (
            <div>
                <LoginBanner />
                {/* User can click the tabs to switch between login and create accont */}
                <Row className="tabsContainer">
                    <Col>
                        <div>
                            <Tabs className="tabs">
                                <Tab className="tab" eventKey="login" title="Login">
                                    <LoginPage />
                                </Tab>
                                <Tab className="tab" eventKey="createAccount" title="Create Account">
                                    <CreateAccount />
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
    
    

export default LoginCreateAccount;