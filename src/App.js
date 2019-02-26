import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Container, Row, Col } from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import { BADNAME } from 'dns';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
        {/* <SearchPage /> */}
      </div>
    );
  }
}

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.email = "";
    this.password = "";
  }

  handleSubmit = (event) => {
    console.log(this.email);
    console.log(this.password)
  }

  emailChange = (event) => {
    // console.log(event.target.value);
    this.email = event.target.value;
  }

  passwordChange = (event) => {
    // console.log(event.target.value);
    this.password =event.target.value;
  }

  render() {
    return (
      <div>
        <Banner />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" size="large">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                onChange={this.emailChange}
              />
            </FormGroup>
            <FormGroup controlId="password" size="large">
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                onChange={this.passwordChange}
              />
            </FormGroup>
            <Button
              block
              size="large"
              type="submit"
              // onClick={this.handleSubmit}
            >
              Login
            </Button>
          </form>
          <div className="mt-4">
            <a href="#" >Create Account</a>
          </div>
        </div>
      </div>
    );
  }
}

class ResultsPage extends Component {
  render() {
    return (
      <div>
        Test div
      </div>
    );
  }
}

class SearchPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Container fluid className="searchAndButtons">
          <SearchBar />
          <RowHomeScreenButtons />
        </Container>
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    return (
      <header fluid className="banner">
        <h1>Buy and Sell Textbooks Locally</h1>
        {/* <div class="search-box">
          <form>
            <input class="search-txt" type="text" placeholder="Type to search" aria-label="Search" onChange={this.seachInput}></input>  
          </form>
        </div>  */}
      </header>
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

class HomeScreenButton extends Component {
  render() {
    let type = this.props.type;

    return <a href="#" className="homeBtn m-5 btn-lg" role="button">{type}</a>;
  }
}

class RowHomeScreenButtons extends Component {
    render() {
      return (
        <div className="mt-5">
          <Row className="homePageBtnRow justify-content-center">
          <Col>
            <HomeScreenButton type="My Posts" />
          </Col>
          <Col>
            <HomeScreenButton type="Sell" />
          </Col>
          <Col>
            <HomeScreenButton type="Bookmarks" />
          </Col>
          </Row>
        </div>
      );
    }
}


export default App;
