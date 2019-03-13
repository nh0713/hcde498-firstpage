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
import logo from './reading.svg'
import openBook from './openBook.jpg'
import college from './college.jpg'
import { Container, Row, Col, Button, Card } from "react-bootstrap";

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
                {/* <div className="outer">
                    <div className="inner">
                        <img src={logo} alt="logo"></img>
                        <h1>Textbook Friends</h1>
                    </div>
                </div> */}
                <div className="landingPageBanner">
                    <img src={college} alt="Landing Page Banner" className="college"></img>
                    <div className="logo">
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={12}>
                                <img src={logo} alt="logo"></img>
                                <h1>Textbook Friends</h1>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={12}>
                                <h2>Buy and Sell Textbooks Locally</h2>
                                <Link to="/getStarted">
                                    <Button className="btnGetStarted" size="lg">Get Started</Button>
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
                                                <li>College students sell their unused textbooks cheaper than used textbook websites</li>
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

                </div>
            </div>
        );
    }
}

class LandingPageBanner extends Component {
    // Math.floor(this.state.seconds /10 % 2) === 0 ? ( <BuyerProcess/>) : (<SellerProcess />)
    render() {
        return (
            <div></div>
            // <Container fluid className='top'>
            //     <Row className='rowTest'>
            //         <Col sm={3} md={3} lg={12}>
            //             <img src={logo} alt="logo"></img>

            //             <div>
            //                 <h1>Textbook Friends</h1>
            //                 <h4>Buy and sell textbooks locally</h4>
            //             </div>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}

// class BuyerProcess extends Component {
//     render() {
//         return(
//             <div>
//                 <LandingPageBanner />
//                 <img src={college}></img>
//                 <Container fluid className="testContainer">
//                     <Row>
//                         <Col lg={3} className="colBackgroundColor">
//                             <Row>
//                                 <Col lg={12} className="testCol">      
//                                     <img src={searchIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Search for a textbook</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3}>
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={contactIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Send a message</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3}>
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={handshakeIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Meetup</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3} className="">
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={learningIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Take your textbook home</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col className="btnGetStarted">
//                             <Button>Get Started</Button>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
// }

// class SellerProcess extends Component {
//     render() {
//         return(
//             <div>
//                 <LandingPageBanner />
//                 <img src={college}></img>
//                 <Container fluid className="testContainer">
//                     <Row>
//                         <Col lg={3} className="colBackgroundColor">
//                             <Row>
//                                 <Col lg={12} className="testCol">      
//                                     <img src={searchIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Post Textbook for Sale</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3}>
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={contactIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Send a message</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3}>
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={handshakeIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Meetup</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                         <Col lg={3} className="">
//                             <Row>
//                                 <Col lg={12} className="testCol">     
//                                     <img src={learningIcon}></img>
//                                 </Col>
//                                 <Col lg={12} className="testCol">
//                                     <div>Take your textbook home</div>
//                                 </Col>
//                             </Row>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col className="btnGetStarted">
//                             <Button>Get Started</Button>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         );
//     }
// }

export default LandingPage;