import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import MyPosts from './myPosts'
import SearchResults from './searchResults'
import ContactSeller from './contactSeller'
import LandingPage from './LandingPage'
import RecentSearchContactSeller from './RecentSearchContactSeller'

import fire from './config/Fire'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/hcde498-firstpage/' component={LandingPage} exact/>
          <Route path='/hcde498-firstpage/getStarted' component={LoginOrSearchPage} exact/>
          <Route path='/hcde498-firstpage/searchPage' component={SearchPage} />
          <Route path='/hcde498-firstpage/sellPage' component={SellPage} />
          <Route path='/hcde498-firstpage/myPosts' component={MyPosts} />
          <Route path='/hcde498-firstpage/searchResults/:textbookName' component={SearchResults} />
          <Route path='/hcde498-firstpage/searchResults/:textbookName/:index' component={ContactSeller} />
          <Route path='/hcde498-firstpage/:textbookName/:sellerUserID' component={ContactSeller} />
          <Route component={Error} />
        </Switch>
      </Router>
      // <Router>
      //   <Switch>
      //     <Route path='/' component={LandingPage} exact/>
      //     <Route path='/getStarted' component={LoginOrSearchPage} exact/>
      //     <Route path='/searchPage' component={SearchPage} />
      //     <Route path='/sellPage' component={SellPage} />
      //     <Route path='/myPosts' component={MyPosts} />
      //     <Route path='/searchResults/:textbookName' component={SearchResults} exact/>
      //     <Route path='/searchResults/:textbookName/:index' component={ContactSeller} exact/>
      //     <Route path='/:textbookName/:sellerUserID' component={RecentSearchContactSeller} exact/>
      //     <Route component={Error} />
      //   </Switch>
      // </Router>
    );
  }
}

class LoginOrSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  //Check if user is already logged in
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      // If user is logged in go to SearchPage, if not go to LoginCreateAccount
      this.state.user ? ( <SearchPage/>) : (<LoginCreateAccount />)
    );
  }
}

export default App;

