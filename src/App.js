import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BADNAME } from 'dns';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <Banner />
        <div class="container searchAndButtons">
          <SearchBar />
          <RowHomeScreenButtons />
        </div>
      </div>
    );
  }
}

class Banner extends Component {
  render() {
    return (
      <div class="container-fluid banner">
        <h1>Buy and Sell Textbooks Locally</h1>
      </div>
    )
  }
}

class SearchBar extends Component{
  searchClicked(event) {
    console.log("search clicked");
  }

  render() {
    return (
      <div class="search-box">
        <form>
          <input class="search-txt" type="text" placeholder="Type to search" aria-label="Search"></input>  
        </form>        
        <a class="search-btn" href='#' onClick={this.searchClicked}>
          <i class="fas fa-search fa-2x"></i>
        </a>
      </div>
    )
    
  }
}

class HomeScreenButton extends Component {
  render() {
    let type = this.props.type;

    return <a href="#" class="btn m-5 btn-lg" role="button">{type}</a>
  }
}

class RowHomeScreenButtons extends Component {
    render() {
      return (
          <div class="row justify-content-center">
            <HomeScreenButton type="My Posts" />
            <HomeScreenButton type="Sell" />
            <HomeScreenButton type="Bookmarks" />
          </div>
      );
    }
}


export default App;
