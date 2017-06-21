import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from "firebase"


var config = {
    apiKey: "AIzaSyD8ruCR99nsDSL44GqhSZOu9nC_i6RftOY",
    authDomain: "contracts-b9532.firebaseapp.com",
    databaseURL: "https://contracts-b9532.firebaseio.com",
    projectId: "contracts-b9532",
    storageBucket: "contracts-b9532.appspot.com",
    messagingSenderId: "632497945652"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
