import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import fire from './config/Fire';

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.createAccount = this.createAccount.bind(this);

        this.state = {
            email: "",
            password: "",
            passwordRetype: "",
            displayName: "",
            collegeYouAttend: "",
          };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createAccount(e){
      const db = fire.firestore();
        const userInfo = db.collection(this.state.email + 'info').add({
            displayName: this.state.displayName,
            userID: this.state.email,
            college: this.state.collegeYouAttend,
        });
      if(this.state.password === this.state.passwordRetype){
          e.preventDefault();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{console.log(u)})
          .catch((error) => {
              console.log(error);
              alert(error);
              })
      } else {
          alert("passwords do not match");
          console.log("passwords do not match");
      }
    }
  
    render() {
      return (
        <div>
          <div className="login">
            <form onSubmit={this.createAccount}>
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
              <FormGroup controlId="password" size="large"> 
                <FormLabel>Retype Password</FormLabel>
                <FormControl
                  type="password"
                  name="passwordRetype"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="displayName" size="large"> 
                <FormLabel>First Name</FormLabel>
                <FormControl
                  type="text"
                  name="displayName"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="college" size="large"> 
                <FormLabel>College you attend</FormLabel>
                <FormControl
                  type="text"
                  name="collegeYouAttend"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                block
                size="large"
                type="submit"
                onClick={this.createAccount}
              >
                Create Account
            </Button>
            </form>
          </div>
        </div>
      );
    }
  }

export default CreateAccount;