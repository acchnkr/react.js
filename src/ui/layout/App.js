import React, { Component, Fragment } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

//export default class App extends Component {
class App extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App; // una unica vez por archivo
