import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import LoginPage from './Login'
import CreateAccount from './CreateAccount'
import Error from './Error'
import fire from './config/Fire';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/hcde498-firstpage/' component={LoginOrSearchPage} exact/>
          <Route path='/hcde498-firstpage/login' component={LoginPage} />
          <Route path='/hcde498-firstpage/createAccount' component={CreateAccount} />
          <Route path='/hcde498-firstpage/searchPage' component={SearchPage} />
          <Route component={Error} />
        </Switch>
      </Router>
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
      this.state.user ? ( <SearchPage/>) : (<LoginPage />)
    );
  }
}

export default App;

