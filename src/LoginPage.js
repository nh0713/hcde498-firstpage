import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './App.css';
import fire from './config/Fire';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        email: '',
        password: ''
        };
    }

    // Handle change from user input
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        }

    // validate login credentials
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            alert(error);
        });
    }  
  
    render() {
      return (
        <div>
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" size="large">
                <FormLabel className="formLabel">Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" size="large"> 
                <FormLabel className="formLabel">Password</FormLabel>
                <FormControl
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                block
                size="large"
                type="submit"
                className="btnSubmitCredentials"
                onClick={this.login}
              >
                Login
            </Button>
            </form>
          </div>
        </div>
      );
    }
  }

export default LoginPage;