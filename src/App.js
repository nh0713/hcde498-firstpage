import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchPage from './SearchPage'
import Error from './Error'
import LoginCreateAccount from './LoginCreateAccount'
import SellPage from './SellPage'
import fire from './config/Fire'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/hcde498-firstpage/' component={LoginOrSearchPage} exact/>
          <Route path='/hcde498-firstpage/searchPage' component={SearchPage} />
          <Route path='/hcde498-firstpage/sellPage' component={SellPage} />
          <Route component={Error} />
        </Switch>
      </Router>
      /* <div>
        <Router>
          <Switch>
            <Route path='/' component={LoginOrSearchPage} exact/>
            <Route path='/searchPage' component={SearchPage} />
            <Route path='/sellPage' component={SellPage} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div> */
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

