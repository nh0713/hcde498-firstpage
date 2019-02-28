import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class LoginBanner extends Component {
    render() {
      return (
        <header className="banner">
          <img src={logo} alt="logo"></img>
          <h1>Textbook Buy & Sell</h1>
        </header>
      );
    }
  }

  export default LoginBanner;