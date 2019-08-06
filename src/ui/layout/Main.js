import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Main extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <Fragment>
        <h2>Esto es el Main</h2>
      </Fragment>
    );
  }
}

export default Main; // una unica vez por archivo
