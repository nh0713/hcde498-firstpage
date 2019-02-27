import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


class Banner extends Component {
    render() {
      return (
        <header fluid className="banner">
          <h1>Buy and Sell Textbooks Locally</h1>
        </header>
      );
    }
  }

  export default Banner;