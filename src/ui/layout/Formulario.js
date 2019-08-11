import React, { Component, Fragment } from "react";

//export default class App extends Component {
class Formulario extends Component {
  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <input value={this.props.usuario} onChange={this.props.handleChange} type="text" placeholder="Usuario" />
        </div>
        <button>Enviar</button> &nbsp;
        <button onClick={this.props.borrar}>Borrar</button>
      </form>
    )
  }
}

export default Formulario; // una unica vez por archivo
