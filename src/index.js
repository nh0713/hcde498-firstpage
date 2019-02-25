import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var config = {
apiKey: "AIzaSyA_jKe7ug9rZwmgEY64XC6hkm8rB4ckWww",
authDomain: "hcde-498-final-project.firebaseapp.com",
databaseURL: "https://hcde-498-final-project.firebaseio.com",
projectId: "hcde-498-final-project",
storageBucket: "hcde-498-final-project.appspot.com",
messagingSenderId: "45130628859"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
