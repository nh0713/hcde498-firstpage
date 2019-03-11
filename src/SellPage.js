import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'
import fire from './config/Fire';
import storage from './config/Fire'
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col} from "react-bootstrap";

class SellPage extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.postTextbook = this.postTextbook.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);

        this.user = fire.auth().currentUser;
        this.userEmail = this.user.email;

        this.state = {
            textbookName: "",
            location: "",
            condition: "",
            price: "",
            displayName: "",
            selectedFile: null,
            imageDownloadURL: null,
            datePosted:"",
          };
    }

    componentDidMount() {
        const db = fire.firestore();
        const getDisplayName = this.userEmail + "info";
        let currentDate = new Date();
        let day = String(currentDate.getDate());
        let month = String(currentDate.getMonth() + 1);
        let dateString = day + "/" + month
            const displayName = db.collection(getDisplayName).get().then((snapshot) => {
                this.setState ({
                    displayName: snapshot.docs[0].data().displayName,
                    datePosted: dateString,
                })
            });
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    postTextbook(e) {
        const db = fire.firestore();
        const textbook = db.collection(this.state.textbookName).add({
            textbookName: this.state.textbookName,
            location: this.state.location,
            condition: this.state.condition,
            price: this.state.price,
            userID: this.userEmail,
            seller: this.state.displayName,
            imageDownloadURL: this.state.imageDownloadURL,
            datePosted: this.state.datePosted,
        });
        const userPosts = db.collection(this.userEmail).add({
            textbookName: this.state.textbookName,
            location: this.state.location,
            condition: this.state.condition,
            price: this.state.price,
            imageDownloadURL: this.state.imageDownloadURL,
            datePosted: this.state.datePosted,
        })
    }

    getDisplayName(db) {
        const getDisplayName = this.userEmail + "info";
        const displayName = db.collection(getDisplayName).get().then((snapshot) => {
            this.setState ({
                displayName: snapshot.docs[0].data().displayName,
            })
        });
    }

    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    fileUploadHandler = () => {
        const storageRef = fire.storage().ref();
        const uploadTask = storageRef.child(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile);

        uploadTask.on('state_changed', 
        (snapshot) => {

        }, (error) => {

      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            this.setState({
                imageDownloadURL: downloadURL
            })
        });
      });
    }

    render() {
        return (
            <div>
                <SignedInBanner />
                <Container>
                    <Row>
                        <Col lg={6}>
                            <input type="file" onChange={this.fileSelectedHandler}></input>
                            <Button onClick={this.fileUploadHandler}>Upload</Button>
                            <div className='imgPlaceholder mt-4'>
                                <img src={this.state.imageDownloadURL} alt="textbook image"></img>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="login">
                                <form className="searchPage">
                                    <FormGroup controlId="textbookName" size="large">
                                        <FormLabel>Textbook Name</FormLabel>
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
                                        <FormLabel>Condition</FormLabel>
                                        <FormControl as="select" onChange={this.handleChange} name="condition">
                                            <option value="1 (Poor)">1 (Poor)</option>
                                            <option value="2 (Decent)">2 (Decent)</option>
                                            <option value="3 (Used)">3 (Used)</option>
                                            <option value="4 (Ligtly Used)">4 (Ligtly Used)</option>
                                            <option value="5 (Perfect)">5 (Perfect)</option>
                                        </FormControl>
                                    </FormGroup>
                                    {/* <Link to='myPosts'> */}
                                    <Link to='/hcde498-firstpage/myPosts'>
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
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default SellPage;