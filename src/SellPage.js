import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'
import fire from './config/Fire';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import { unwatchFile } from 'fs';

class SellPage extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.postTextbook = this.postTextbook.bind(this);

        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;

        this.state = {
            userEmail: "",
            textbookName: "",
            location: "",
            condition: "",
            price: "",
          };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    postTextbook(e) {
        
        const db = fire.firestore();
        const textbook = db.collection(this.state.textbookName).add({
            textbookName: this.state.textbookName,
            location: this.state.location,
            condition: this.state.condition,
            price: this.state.price,
            userID: this.userEmail
        });
        const userPosts = db.collection(this.userEmail).add({
            textbookName: this.state.textbookName,
            location: this.state.location,
            condition: this.state.condition,
            price: this.state.price,
        })
        const getUserPosts = db.collection(this.userEmail).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().textbookName);
            })
        })
    }

    render() {
        return (
            <div className="login">
                <SignedInBanner />
                <form className="searchPage">
                    <FormGroup controlId="textbookName" size="large">
                        <FormLabel>Display Name</FormLabel>
                        <FormControl
                        type="text"
                        name="textbookName"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="location" size="large">
                        <FormLabel>Location</FormLabel>
                        <FormControl
                        type="text"
                        name="location"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="price" size="large">
                        <FormLabel>Price</FormLabel>
                        <FormControl
                        type="text"
                        name="price"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="condition" size="large">
                        <FormLabel>Condition (0 - 10)</FormLabel>
                        <FormControl
                        type="number"
                        name="condition"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    {/* <Link to='myPosts'> */}
                    <Link to='/hcde498-firstpage/sellPage'>
                        <Button
                            block
                            size="large"
                            onClick={this.postTextbook}
                        >
                            Post
                    </Button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default SellPage;