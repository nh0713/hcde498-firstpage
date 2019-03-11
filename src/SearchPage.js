import React, { Component } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
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
            <input className="search-txt" type="text" placeholder="Type Textbook Title" aria-label="Search" onChange={this.searchInput}></input>  
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

  class SearchPageButton extends Component {
    render() {
      let type = this.props.type;
  
      return <Button className="homeBtn" role="button">{type}</Button>;
    }
  }

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