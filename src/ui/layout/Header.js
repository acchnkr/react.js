import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Header extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <Fragment>
        <div>
          <h1>Esto es el header</h1>
          <nav>
            <a href="#asdf">link_1</a> &nbsp;
            <a href="#asdf">link_2</a> &nbsp;
            <a href="#asdf">link_3</a> &nbsp;
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Header; // una unica vez por archivo
