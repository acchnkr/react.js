import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Header extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();

    return (
      <header>
        <h1>Esto es el header</h1>
        <nav>
          {this.props.links.map((e,i) => {
            return <a key={i} href={e}> {e} </a>;
          })}
        </nav>
      </header>
    );
  }
}

export default Header; // una unica vez por archivo
