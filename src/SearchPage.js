import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'
import logo from './reading.svg';
import Footer from './Footer'

import fire from './config/Fire'

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.user = fire.auth().currentUser;

    this.state = {
      recentSearches: [],
    };
  }

  componentDidMount() {
    const db = fire.firestore();
    console.log(this.user.email);
    const getRecentSearches = db.collection(`${this.user.email}RecentSearches`).get().then((snapshot) => {
        this.setState ({
            recentSearches: snapshot.docs,
        });
    });
  }

  render() {
    let recentSearchResults = []
    if(this.state.recentSearches.length > 0) {
      console.log(this.state.recentSearches.length);
      recentSearchResults = this.state.recentSearches.reverse().map((post, i) => 
        // <Link style={{ textDecoration: 'none' }} key={i} to={`/${this.state.recentSearches[i].data().textbookName}/${this.state.recentSearches[i].data().userID}`}>
          <Link style={{ textDecoration: 'none' }} key={i} to={`/hcde498-firstpage/${this.state.recentSearches[i].data().textbookName}/${this.state.recentSearches[i].data().userID}`} onClick={this.resultClicked}>
            <Row className="individualPost mb-3">
                <Col lg={4} className="colOne">
                    <img src={this.state.recentSearches[i].data().imageDownloadURL} alt="thumbnail" className="thumbnail"></img>
                </Col>
                <Col lg={6} className="colTwo">
                    <div><strong>Seller:</strong> {this.state.recentSearches[i].data().seller}</div>
                    <div><strong>Seller Email:</strong> {this.state.recentSearches[i].data().userID}</div>
                    <div><strong>Meetup Location:</strong> {this.state.recentSearches[i].data().location}</div>
                    <div><strong>Condition:</strong> {this.state.recentSearches[i].data().condition}</div>
                    <div><strong>Date Posted:</strong> {this.state.recentSearches[i].data().datePosted}</div>
                </Col>
                <Col lg={2} className="colThree">
                    <div>{this.state.recentSearches[i].data().price}</div>
                </Col> 
            </Row>
        </Link>
      )
    }
    return (
      <div>
        <SignedInBanner />
        <Container fluid className="searchAndButtonsContainer">
          <Container fluid className="searchAndButtons">
            <SearchBar />
            <RowHomeScreenButtons />
          </Container>
        </Container>
        <Container fluid>
          <Container className="recentSearchListContainer">
            <h1>Recent Searches</h1>
            {recentSearchResults}
          </Container>
        </Container>
      </div>
    );
  }
}

  class SearchBar extends Component{
    constructor(props) {
      super(props);
      this.searchText = "";

      this.state = {
        textbookName: "",
      };
    }
  
    searchClicked = (event) => {
      this.setState({textbookName: this.searchText});
    }
  
    searchInput = (event) => {
      this.searchText = event.target.value;
      this.setState({textbookName: this.searchText});
    }
  
    render() {
      return (
        <div className="search-box">
          <form>
            <input className="search-txt" type="text" placeholder="Title (EX: Building Java Programs)" aria-label="Search" onChange={this.searchInput}></input>  
          </form>
          <Link to={`/hcde498-firstpage/searchResults/${this.state.textbookName}`}>
          {/* <Link to={`/searchResults/${this.state.textbookName}`}> */}
            {/* <a className="search-btn" href='#' onClick={this.searchClicked}> */}
              <i className="search-btn fas fa-search fa-2x"></i>
            {/* </a>  */}
          </Link>   
        </div>
      );
      
    }
  }

  // template for button on SearchPage
  class SearchPageButton extends Component {
    render() {
      let type = this.props.type;
  
      return <Button className="homeBtn" role="button">{type}</Button>;
    }
  }

  // Container for the row of buttons under the search bar (My Posts, Sell, Bookmarks)
  class RowHomeScreenButtons extends Component {
    render() {
      return (
        <Container className="mt-5">
          <Row className="homePageBtnRow">
            <Col sm={12} md={6} lg={4}>
              {/* <Link to='/myPosts'> */}
              <Link to='/hcde498-firstpage/myPosts'>
                <SearchPageButton type="My Posts" />
              </Link>
            </Col>
            <Col sm={12} md={6} lg={4}>
              {/* <Link to="/sellPage"> */}
              <Link to='/hcde498-firstpage/sellPage'>
                <SearchPageButton type="Sell" />
              </Link>
            </Col>
            <Col sm={12} md={12} lg={4}>
                <SearchPageButton type="Bookmarks" />
            </Col>
          </Row>
        </Container>
      );
    }
}

export default SearchPage;