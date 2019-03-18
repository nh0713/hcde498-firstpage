import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import logo from './reading.svg'
import { Container, Row, Col, Button, Card, Tabs, Tab } from "react-bootstrap";

class StickyFooter extends Component {
    render(){
        return (
            <footer className="footer">
                {/* <Container fluid>
                    <Row>
                        <Col>
                            Created By: Nathan Han and Jang Soo Lim
                        </Col>
                        <Col>
                            Lorem ipsum
                        </Col>
                        <Col>
                            Lorem ipsum
                        </Col>
                    </Row>
                </Container>
                <hr></hr> */}
                <Container fluid>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright: Textbook Friends
                    </div>
                </Container>
            </footer>
        );
    }
}

export default StickyFooter