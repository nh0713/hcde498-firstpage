import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import fire from './config/Fire'
import SignedInBanner from './SignedInBanner';
import { Row, Col, Button, Container, Alert } from 'react-bootstrap';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;
        // this.userEmail = this.user.email;

        this.state = {
            searchResults: [],
          };
    }

    componentDidMount() {
        // console.log(this.props);
        const db = fire.firestore();
        console.log(this.props.match.params.textbookName);
        const getSearchResults = db.collection(this.props.match.params.textbookName).get().then((snapshot) => {
            this.setState ({
                searchResults: snapshot.docs,
            });
        })
    }

    resultClicked() {
        console.log('clicked');
    }

    render() { 
        let searchResults = this.state.searchResults.map((post, i) => 
        <div key={i} className="individualPost mt-3" onClick={this.resultClicked}>
            <div>Textbook Name: {this.state.searchResults[i].data().textbookName}</div>
            <div>Meetup Location: {this.state.searchResults[i].data().location}</div>
            <div>Price: {this.state.searchResults[i].data().price}</div>
            <div>Condition: {this.state.searchResults[i].data().condition}</div>
            <div>Seller Email: {this.state.searchResults[i].data().userID}</div>
         </div>)

        return (
            <div>
                <SignedInBanner />
                <Container className="listContainer">
                    {searchResults}
                </Container>
            </div>
        );
    }

}

export default SearchResults;