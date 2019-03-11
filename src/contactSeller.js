import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'

import { Row, Col, Container, Button } from 'react-bootstrap';
import fire from './config/Fire'

class ContactSeller extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;

        this.state = {
            userPosts: [],
            index: 0,
          };
    }


    componentDidMount() {
        console.log(this.props.match.params.textbookName);
        console.log(this.props.match.params.index);
        this.setState({
            index: this.props.match.params.index
        })
        const db = fire.firestore();
        const getPostDetails = db.collection(this.props.match.params.textbookName).get().then((snapshot) => {
            this.setState ({
                userPosts: snapshot.docs,
            });
        })
    }

    render() {
        if (this.state.userPosts.length > 0) {
            console.log(this.state.userPosts[this.state.index].data().seller);
        }
        return (
            <div>
                <SignedInBanner />
                <div>
                    <h1>Contact Seller</h1>
                </div>
                <div>
                    {/* If the reqeust has been completed */}
                    {this.state.userPosts.length > 0 ? (
                        <Container fluid>
                            <Row>
                                <Col lg={6} className="colOne">
                                    <div className="imageContainer">
                                        <img src={this.state.userPosts[this.state.index].data().imageDownloadURL} alt="thumbnail" className="thumbnail"></img>
                                    </div>
                                </Col>
                                <Col className="contactColTwo">
                                    <div className="test">
                                    <div><strong>Seller:</strong> {this.state.userPosts[this.state.index].data().seller}</div>
                                    <div><strong>Seller Email:</strong> {this.state.userPosts[this.state.index].data().userID}</div>
                                    <div><strong>Meetup Location:</strong> {this.state.userPosts[this.state.index].data().location}</div>
                                    <div><strong>Price:</strong> {this.state.userPosts[this.state.index].data().price}</div>
                                    <div><strong>Condition:</strong> {this.state.userPosts[this.state.index].data().condition}</div>
                                    <Button className="contactBtn" role="button" variant="dark">
                                        <a href={`mailto:${this.state.userPosts[this.state.index].data().userID}`}>
                                            Email {this.state.userPosts[this.state.index].data().seller}
                                        </a>
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        // Else display message "Loading Data"
                        <div>Loading Data</div>
                    )}
                </div>
            </div>
        );
    }

}

export default ContactSeller;