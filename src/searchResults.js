import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import fire from './config/Fire'
import SignedInBanner from './SignedInBanner';
import { Row, Col, Container, Button } from 'react-bootstrap';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;

        this.state = {
            searchResults: [],
          };
    }

    componentDidMount() {
        // console.log(this.props);
        const db = fire.firestore();
        // console.log(this.props.match.params.textbookName);
        const getSearchResults = db.collection(this.props.match.params.textbookName).get().then((snapshot) => {
            this.setState ({
                searchResults: snapshot.docs,
            });
        })
    }

    resultClicked(index) {
        console.log(index);
        console.log('clicked');
    }

    render() { 
        let searchResults = this.state.searchResults.map((post, i) => 
            // <Link style={{ textDecoration: 'none' }} key={i} to={`/searchResults/${this.state.searchResults[i].data().textbookName}/${i}`} onClick={this.resultClicked(i)}>
            <Link style={{ textDecoration: 'none' }} key={i} to={`/hcde498-firstpage/searchResults/${this.state.searchResults[i].data().textbookName}/${i}`} onClick={this.resultClicked}>
                <Row className="individualPost mb-3">
                    <Col lg={4} className="colOne">
                        <img src={this.state.searchResults[i].data().imageDownloadURL} alt="thumbnail" className="thumbnail"></img>
                    </Col>
                    <Col lg={6} className="colTwo">
                        <div><strong>Seller:</strong> {this.state.searchResults[i].data().seller}</div>
                        <div><strong>Seller Email:</strong> {this.state.searchResults[i].data().userID}</div>
                        <div><strong>Meetup Location:</strong> {this.state.searchResults[i].data().location}</div>
                        <div><strong>Condition:</strong> {this.state.searchResults[i].data().condition}</div>
                        <div><strong>Date Posted:</strong> {this.state.searchResults[i].data().datePosted}</div>
                    </Col>
                    <Col lg={2} className="colThree">
                        <div>{this.state.searchResults[i].data().price}</div>
                    </Col> 
                </Row>
            </Link>)

        return (
            <div>
                <SignedInBanner />
                <div>
                    <h1>Search Results for <strong>{this.props.match.params.textbookName}</strong></h1>
                </div>
                <Container className="listContainer">
                    {searchResults}
                </Container>
            </div>
        );
    }

}

export default SearchResults;