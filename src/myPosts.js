import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import fire from './config/Fire'
import SignedInBanner from './SignedInBanner';
import { Row, Col, Button, Container } from 'react-bootstrap';

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;

        this.state = {
            myPosts: [],
          };
    }

    componentDidMount() {
        const db = fire.firestore();
        const getUserPosts = db.collection(this.userEmail).get().then((snapshot) => {
            this.setState ({
                myPosts: snapshot.docs,
            });
        })
    }

    render() {
        let postList = this.state.myPosts.map((post, i) => 
            <div key={i} className="individualPost mt-3">
                <div>{this.state.myPosts[i].data().textbookName}</div>
                <div>{this.state.myPosts[i].data().location}</div>
                <div>{this.state.myPosts[i].data().price}</div>
                <div>{this.state.myPosts[i].data().condition}</div>
             </div>)

        return (
            <div>
                <SignedInBanner />
                <Container className="listContainer">
                    {postList}
                </Container>
            </div>
        );
    }
}

export default MyPosts;