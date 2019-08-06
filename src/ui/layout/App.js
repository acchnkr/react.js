import React, { Component, Fragment } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";

//export default class App extends Component {
class App extends Component {
  //let state = ;
  constructor() {
    super();
    this.state = {
      links: ["usuarios", "faq", "contacto"],
      contador: 0
    };
  }

  sumarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

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
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App; // una unica vez por archivo
