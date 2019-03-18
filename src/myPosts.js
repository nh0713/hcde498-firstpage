import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import fire from './config/Fire'
import SignedInBanner from './SignedInBanner';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Footer from './Footer'

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;

        this.state = {
            myPosts: [],
          };
    }

    // Set myPosts to the collection associated to users email
    componentDidMount() {
        const db = fire.firestore();
        const getUserPosts = db.collection(this.userEmail).get().then((snapshot) => {
            this.setState ({
                myPosts: snapshot.docs,
            });
        })
    }

    // Does not work
    deletePost(index) {
        console.log(index);
    }

    render() {
        let postList = this.state.myPosts.map((post, i) => 
            <Row key={i} className="individualPost mb-4">
                <Col lg={4} className="colOne">
                    <img src={this.state.myPosts[i].data().imageDownloadURL} alt="thumbnail" className="thumbnail"></img>
                </Col>
                <Col lg={6} className="colTwo">
                    <div><strong>Textbook Title:</strong> {this.state.myPosts[i].data().textbookName}</div>
                    <div><strong>Meetup Location:</strong> {this.state.myPosts[i].data().location}</div>
                    <div><strong>Price:</strong> {this.state.myPosts[i].data().price}</div>
                    <div><strong>Condition:</strong> {this.state.myPosts[i].data().condition}</div>
                    <div><strong>Date Posted:</strong> {this.state.myPosts[i].data().datePosted}</div>
                </Col>
                <Col className="colThreeDeleteIcon" lg={2}>
                    <Row>
                        <Col className="colThreeDeleteIcon mb-2" lg={12}>
                            <i class="far fa-trash-alt fa-3x" onClick={this.deletePost(i)}></i>
                        </Col>
                        <Col className="colThreeDeleteIcon mt-2" lg={12}>
                            <div>
                                <Button role="button" variant="primary">Edit</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
             </Row>)

        return (
            <div>
                <SignedInBanner />
                <Container className="listContainer">
                <div>
                    <h1>My Posts</h1>
                </div>
                    {postList}
                </Container>
            </div>
        );
    }
}

export default MyPosts;