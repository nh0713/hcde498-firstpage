import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import fire from './config/Fire'
import SignedInBanner from './SignedInBanner';
import { Row, Col, Button, Container } from 'react-bootstrap';

class Bookmarks extends Component {
    render() {
        return (
            <Container className="conBookmark">  
                <Row className="rowBookmark">
                    <Col lg={6} className="colBookmark">
                        <input type="text"></input>
                        <div>
                            Class 1
                        </div>
                    </Col>
                    <Col lg={6}>
                        <input type="text"></input>
                        <div>
                            Class 2
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <input type="text"></input>
                        <div>
                            Class 3
                        </div>
                    </Col>
                    <Col lg={6}>
                        <input type="text"></input>
                        <div>
                            Class 4
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Bookmarks;