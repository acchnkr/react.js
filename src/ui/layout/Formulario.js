import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Formulario extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <form>
        <div>
          <input type="text" placeholder="Usuario" />
        </div>
        <button>Enviar</button>
      </form>
    )
  }
}

export default Formulario; // una unica vez por archivo
