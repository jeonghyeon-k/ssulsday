<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./views/style/index.scss";
import * as serviceWorker from './serviceWorker';
import Root from "./Root";
>>>>>>> e3910b9... no message
=======
import "./views/style/index.scss";
>>>>>>> f1a538dd6a98e1b05ab5b14b45e077283a46c6b8

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
