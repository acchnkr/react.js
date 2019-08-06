import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Footer extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <Fragment>
        <b>
          <p> &copy; Esto es el footer</p>
        </b>
      </Fragment>
    );
  }
}

export default Footer; // una unica vez por archivo
