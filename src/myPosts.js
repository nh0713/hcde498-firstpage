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

        // console.log('running');
        // const db = fire.firestore();
        // const getUserPosts = db.collection(this.userEmail).get().then((snapshot) => {
        //     this.myPosts = snapshot.docs;
        //     console.log(this.myPosts[0].data());
        // })
    }

    componentDidMount() {
        console.log('mounting');
        const db = fire.firestore();
        const getUserPosts = db.collection(this.userEmail).get().then((snapshot) => {
            console.log(snapshot.docs[0].data());
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

class Post extends Component {
    render() {
        return (
            <div className="individualPost mt-3">
                <div>Name</div>
                <div>Location</div>
                <div>Condition</div>
                <div>Price</div>
            </div>
        )
    }
}

export default MyPosts;