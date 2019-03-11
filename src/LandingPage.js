import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import MyPosts from './myPosts'
import SearchResults from './searchResults'
import ContactSeller from './contactSeller'
import logo from './logo.svg';
import searchIcon from './magnifier.svg';
import contactIcon from './email.svg';
import handshakeIcon from './handshake.svg';
import learningIcon from './learning.svg';
import college from './college.jpg';
import { Container, Row, Col, Button } from "react-bootstrap";

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = { 
            seconds: 0
        };
      }


    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            Math.floor(this.state.seconds /10 % 2) === 0 ? ( <BuyerProcess/>) : (<SellerProcess />)
        );
    }
}

class LandingPageBanner extends Component {
    render() {
        return (
            <Container fluid className='top'>
                <Row className='rowTest'>
                    <Col sm={3} md={3} lg={12}>
                        <img src={logo} alt="logo"></img>

                        <div>
                            <h1>Textbook Friends</h1>
                            <h4>Buy and sell textbooks locally</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

class BuyerProcess extends Component {
    render() {
        return(
            <div>
                <LandingPageBanner />
                <img src={college}></img>
                <Container fluid className="testContainer">
                    <Row>
                        <Col lg={3} className="colBackgroundColor">
                            <Row>
                                <Col lg={12} className="testCol">      
                                    <img src={searchIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Search for a textbook</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={contactIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Send a message</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={handshakeIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Meetup</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} className="">
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={learningIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Take your textbook home</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="btnGetStarted">
                            <Button>Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class SellerProcess extends Component {
    render() {
        return(
            <div>
                <LandingPageBanner />
                <img src={college}></img>
                <Container fluid className="testContainer">
                    <Row>
                        <Col lg={3} className="colBackgroundColor">
                            <Row>
                                <Col lg={12} className="testCol">      
                                    <img src={searchIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Post Textbook for Sale</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={contactIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Send a message</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={handshakeIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Meetup</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3} className="">
                            <Row>
                                <Col lg={12} className="testCol">     
                                    <img src={learningIcon}></img>
                                </Col>
                                <Col lg={12} className="testCol">
                                    <div>Take your textbook home</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="btnGetStarted">
                            <Button>Get Started</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default LandingPage;