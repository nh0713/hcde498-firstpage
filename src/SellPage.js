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

        const db = fire.firestore();

        this.state = {
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
        // const test = this.db.collection("textbooksForSale");
        // let query = test.where("textbookName", "==", "Psychology");
        // console.log(query);
        const textbook = this.db.collection("textbooksForSale").add({
            textbookName: this.state.textbookName,
            location: this.state.location,
            condition: this.state.condition,
            price: this.state.price,
            userID: this.userEmail
        })
        console.log(this.state.textbookName);
        console.log(this.state.location);
        console.log(this.state.condition);
        console.log(this.state.price);
    }

    render() {
        return (
            <div>
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
                        <FormLabel>location</FormLabel>
                        <FormControl
                        type="text"
                        name="location"
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="condition" size="large">
                        <FormLabel>Condition</FormLabel>
                        <FormControl
                        type="number"
                        name="condition"
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
                    <Button
                        block
                        size="large"
                        onClick={this.postTextbook}
                    >
                        Post
                    </Button>
                </form>
            </div>
        );
    }
}

export default SellPage;