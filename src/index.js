import React from "react"; //ES6
//const React = require("react") //CommonJS

import ReactDOM from "react-dom";
import App from "../src/ui/layout/App";
import {Provider} from "react-redux"
import store from "./api/store"

//let App = () => <p>asdf</p>;

/*let App = () => {
  return <b>Hola mundo</b>;
};*/

//class App extends React.Component {

ReactDOM.render(
  <Provider sore={store}>
    <App />, // App()  ---jsx
  </Provider>,
  document.getElementById("root")
);
