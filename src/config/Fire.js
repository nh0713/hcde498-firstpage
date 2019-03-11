import firebase from 'firebase';
import'firebase/storage';

const config = {
    apiKey: "AIzaSyA_jKe7ug9rZwmgEY64XC6hkm8rB4ckWww",
    authDomain: "hcde-498-final-project.firebaseapp.com",
    databaseURL: "https://hcde-498-final-project.firebaseio.com",
    projectId: "hcde-498-final-project",
    storageBucket: "hcde-498-final-project.appspot.com",
    messagingSenderId: "45130628859"
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {
    storage, fire as default   
}