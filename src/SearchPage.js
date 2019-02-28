import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SignedInBanner from './SignedInBanner'

class SearchPage extends Component {
    render() {
      return (
        <div>
          <SignedInBanner />
          <Container fluid className="searchAndButtons">
            <SearchBar />
            <RowHomeScreenButtons />
          </Container>
        </div>
      );
    }
  }

  class SearchBar extends Component{
    constructor(props) {
      super(props);
      this.searchText = "";
    }
  
    searchClicked = (event) => {
      console.log(this.searchText);
    }
  
    searchInput = (event) => {
      this.searchText = event.target.value;
    }
  
    render() {
      return (
        <div className="search-box">
          <form>
            <input className="search-txt" type="text" placeholder="Type to search" aria-label="Search" onChange={this.searchInput}></input>  
          </form>        
          <a className="search-btn" href='#' onClick={this.searchClicked}>
            <i className="fas fa-search fa-2x"></i>
          </a>
        </div>
      );
      
    }
  }

  class SearchPageButton extends Component {
    render() {
      let type = this.props.type;
  
      return <a href="#" className="homeBtn m-5 btn-lg" role="button">{type}</a>;
    }
  }

  class RowHomeScreenButtons extends Component {
    render() {
      return (
        <Container className="mt-5">
          <Row className="homePageBtnRow">
            <Col lg={4} className="mt-2">
                <SearchPageButton type="My Posts" />
            </Col>
            <Col lg={4} className="mt-2">
                <SearchPageButton type="Sell" />
            </Col>
            <Col lg={4} className="mt-2">
                <SearchPageButton type="Bookmarks" />
            </Col>
          </Row>
        </Container>
      );
    }
}

export default SearchPage;