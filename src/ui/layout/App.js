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
      mostrar : true,
      usuario : "",
      usuarios : []
    }
    this.sumarContador = this.sumarContador.bind(this) // se suele bindear asi
    this.mostrar = this.mostrar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  mostrar() {
    this.setState({mostrar : !this.state.mostrar})
    console.log("Mostrar= "+this.state.mostrar)
  }

  sumarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  handleSubmit(e) {
    e.preventDefault()
    
    //let copia = this.state.usuarios.slice(0)
    //let copia = [...this.state.usuarios,this.state.usuario], usuario : ""
    //copia.push(this.state.usuario)
    this.setState({usuarios : [...this.state.usuarios,this.state.usuario], usuario : ""})
  }

  handleChange(e) {
    //console.log(e.target.value)
    this.setState({usuario : e.target.value})
  }

  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    let {contador,links,mostrar,usuario,usuarios} = this.state;
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
        { this.state.mostrar ? <Formulario 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange} 
          usuario={usuario}
          /> 
          : null }
        <button onClick={this.mostrar}>Mostrar</button>
        <hr/>
        <ul>
          {!usuarios.length 
            ? <li key={0}>No hay usuarios</li>
            : usuarios.map((e,i) => 
              <li key={i}>{e}</li>
            )}
        </ul>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App; // una unica vez por archivo
