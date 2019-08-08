import React, { Component, Fragment } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import Formulario from "./Formulario";

//export default class App extends Component {
class App extends Component {
  //let state = ;
  constructor() {
    super();
    this.state = {
      links: ["usuarios", "faq", "contacto"],
      contador: 0,
      mostrar : true
    }
    this.sumarContador = this.sumarContador.bind(this) // se suele bindear asi
    this.mostrar = this.mostrar.bind(this)
  }

  mostrar() {
    this.setState({mostrar : !this.state.mostrar})
    console.log("Mostrar= "+this.state.mostrar)
  }

  sumarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    return (
      <Fragment>
        <Header links={this.state.links} />
        <p>Contador : {this.state.contador}</p>
        <button
          onClick={this.sumarContador}
          //onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          +
        </button>
        { this.state.mostrar ? <Formulario/> : null }
        <button onClick={this.mostrar}>Mostrar</button>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App; // una unica vez por archivo
