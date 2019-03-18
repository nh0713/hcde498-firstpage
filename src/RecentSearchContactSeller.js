import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'

import { Row, Col, Container, Button } from 'react-bootstrap';
import fire from './config/Fire'

class RecentSearchContactSeller extends Component {
    constructor(props) {
        super(props);
        this.user = fire.auth().currentUser;

        this.state = {
            recentSearchPost: [],
          };
    }


    componentDidMount() {
        const db = fire.firestore();
        const getPostDetails = db.collection(this.props.match.params.textbookName).get().then((snapshot) => {
            for(let i = 0; i < snapshot.docs.length; i++) {
                if(snapshot.docs[i].data().userID === this.props.match.params.sellerUserID) {
                    this.setState({
                        recentSearchPost: snapshot.docs[i].data()
                    });
                    return;
                }
            }
        })
    }

    render() {
        return (
            <div>
                <SignedInBanner />
                <div>
                    <h1>Contact Seller</h1>
                </div>
                <div>
                    {/* If the reqeust has been completed */}
                    {this.state.recentSearchPost.userID === this.props.match.params.sellerUserID ? (
                        <Container fluid>
                            <Row>
                                <Col lg={6} className="colOne">
                                    <div className="imageContainer">
                                        <img src={this.state.recentSearchPost.imageDownloadURL} alt="thumbnail" className="thumbnail"></img>
                                    </div>
                                </Col>
                                <Col className="contactColTwo">
                                    <div><strong>Seller:</strong> {this.state.recentSearchPost.seller}</div>
                                    <div><strong>Seller Email:</strong> {this.state.recentSearchPost.userID}</div>
                                    <div><strong>Meetup Location:</strong> {this.state.recentSearchPost.location}</div>
                                    <div><strong>Price:</strong> {this.state.recentSearchPost.price}</div>
                                    <div><strong>Condition:</strong> {this.state.recentSearchPost.condition}</div>
                                    <Button className="contactBtn" role="button" variant="dark">
                                        <a href={`mailto:${this.state.recentSearchPost.userID}`}>
                                            Email {this.state.recentSearchPost.seller}
                                        </a>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    ) : (
                        // Else display message "Loading Data" should eventually have a loading icon instead of this
                        <div>Loading Data</div>
                    )}
                </div>
            </div>
        );
    }

}

export default RecentSearchContactSeller;