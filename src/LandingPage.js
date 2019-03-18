import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import logo from './reading.svg'
import college from './college.jpg'
import { Container, Row, Col, Button, Card, Tabs, Tab } from "react-bootstrap";
import StickyFooter from './StickyFooter'

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
            <div>
                <div className="landingPageBanner">
                    <img src={college} alt="Landing Page Banner"></img>
                    <div className="logo">
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={12}>
                                <img src={logo} alt="logo"></img>
                                <h1>Textbook Friends</h1>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={12}>
                                <h2>Buy and Sell Textbooks Locally</h2>
                                <Link to="/hcde498-firstpage/getStarted">
                                {/* <Link to="/getStarted"> */}
                                    <Button className="btnLoginCreateAccount" size="lg">Login/Create Account</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="whyUse">
                    <h3>Why use Textbook Friends?</h3>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <Card>
                                    <i class="fas fa-dollar-sign fa-5x"></i>
                                    <Card.Body>
                                        <Card.Title>Cheaper</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Cheaper than used textbook websites</li>
                                                <li>No shipping fees</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                <i class="fas fa-fast-forward fa-5x"></i>
                                    <Card.Body>
                                        <Card.Title>Faster</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Recieve your textbooks after class</li>
                                                <li>Meet at a convenient time</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <i class="far fa-smile-beam fa-5x"></i>
                                    <Card.Body>
                                        <Card.Title>Easier</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>No more long lines</li>
                                                <li>Meet on campus</li>
                                                <li>Searching for textbooks is simple</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr></hr>
                <div className="howDoesItWork">
                    <h3>
                        How Does It Work?
                    </h3>
                    <Tabs className="tabs" defaultActiveKey="Buy">
                        <Tab className="tab" eventKey="Buy" title="Buy">
                            <h1>Buy</h1>
                            <Container>
                                <Row> 
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>1</Card.Title>
                                                <Card.Text>
                                                    Search for textbooks
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>2</Card.Title>
                                                <Card.Text>
                                                    Contact Seller
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>3</Card.Title>
                                                <Card.Text>
                                                    Meetup Nearby
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>4</Card.Title>
                                                <Card.Text>
                                                    Start Studying
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab className="tab" eventKey="Sell" title="Sell">
                            <h1>Sell</h1>
                            <Container>
                                <Row> 
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>1</Card.Title>
                                                <Card.Text>
                                                    Post Textbook For Sale
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>2</Card.Title>
                                                <Card.Text>
                                                    Wait For Eager Buyers to Contact You
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>3</Card.Title>
                                                <Card.Text>
                                                    Meetup Nearby
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={3}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>4</Card.Title>
                                                <Card.Text>
                                                    Spend your MONEY
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div>
                <StickyFooter />
            </div>
        );
    }
}

export default LandingPage;