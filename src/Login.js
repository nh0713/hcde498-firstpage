import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import LoginBanner from './LoginBanner'
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
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        }
    
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
          <LoginBanner />
          <div className="login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" size="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" size="large"> 
                <FormLabel>Password</FormLabel>
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
                onClick={this.login}
              >
                Login
            </Button>
            </form>
            {/* <Link to="/hcde498-firstpage/createAccount"> */}
            {/* <Link to="/createAccount"> */}
                <div className="mt-4">
                    <a className="createAccount" href="#" >Create Account</a>
                </div>
            {/* </Link> */}
          </div>
        </div>
      );
    }
  }

export default LoginPage;