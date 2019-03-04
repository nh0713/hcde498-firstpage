import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import MyPosts from './myPosts'
import SearchResults from './searchResults'
import fire from './config/Fire'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/hcde498-firstpage/' component={LoginOrSearchPage} exact/>
          <Route path='/hcde498-firstpage/searchPage' component={SearchPage} />
          <Route path='/hcde498-firstpage/sellPage' component={SellPage} />
          <Route path='/hcde498-firstpage/myPosts' component={MyPosts} />
          <Route path='/hcde498-firstpage/searchResults/:textbookName' component={SearchResults} />
          <Route component={Error} />
        </Switch>
      </Router>
      // <Router>
      //   <Switch>
      //     <Route path='/' component={LoginOrSearchPage} exact/>
      //     <Route path='/searchPage' component={SearchPage} />
      //     <Route path='/sellPage' component={SellPage} />
      //     <Route path='/myPosts' component={MyPosts} />
      //     <Route path='/searchResults/:textbookName' component={SearchResults} />
      //     <Route component={Error} />
      //   </Switch>
      // </Router>
    );
  }
}

class LoginOrSearchPage extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

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
      this.state.user ? ( <SearchPage/>) : (<LoginCreateAccount />)
    );
  }
}

export default App;

