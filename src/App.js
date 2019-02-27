import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BADNAME } from 'dns';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchPage from './SearchPage'
import Banner from './Banner'
import LoginPage from './Login'
import CreateAccount from './CreateAccount'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CreateAccount /> */}
        {/* <LoginPage /> */}
        <SearchPage />
      </div>
    );
  }
}

export default App;
