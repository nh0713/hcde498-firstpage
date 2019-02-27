import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Banner from './Banner'

class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.email = "";
      this.password = "";
    }
  
    handleSubmit = (event) => {
      console.log(this.email);
      console.log(this.password)
    }
  
    emailChange = (event) => {
      console.log(event.target.value);
      this.email = event.target.value;
    }
  
    passwordChange = (event) => {
      console.log(event.target.value);
      this.password = event.target.value;
    }
  
    render() {
      return (
        <div>
          <Banner />
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" size="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  onChange={this.emailChange}
                />
              </FormGroup>
              <FormGroup controlId="password" size="large"> 
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  onChange={this.passwordChange}
                />
              </FormGroup>
              <Button
                block
                size="large"
                type="submit"
                onClick={this.handleSubmit}
              >
                Login
            </Button>
            </form>
            <div className="mt-4">
              <a href="#" >Create Account</a>
            </div>
          </div>
        </div>
      );
    }
  }

export default LoginPage;