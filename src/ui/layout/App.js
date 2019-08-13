import React, { Component, Fragment } from "react";
import Main from "./Main";
import Footer from "./Footer";
import Header from "./Header";
import Formulario from "./Formulario";
import ListadoUsuarios from "../widgets/ListadoUsuarios";

//export default class App extends Component {
class App extends Component {
  //let state = ;
  constructor() {
    super();
    this.state = {
      links: ["usuarios", "faq", "contacto"],
      contador: 0,
      mostrar: true,
      usuario: "",
      usuarios: []
    }
    this.selectedItem = -1
    this.lista = React.createRef()
    this.sumarContador = this.sumarContador.bind(this) // se suele bindear asi
    this.mostrarForm = this.mostrarForm.bind(this)
    this.select = this.select.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.render = this.render.bind(this)
  }

  mostrarForm() {
    this.setState({ mostrar: !this.state.mostrar })
    console.log("Mostrar= " + this.state.mostrar)
  }

  select(e) {
    //console.log(e.target.innerHTML + " selected.");
    console.dir(e.target)
    console.log("Selected id: "+e.target.id)
    this.selectedItem = e.target.id
    this.setState({ usuario: e.target.innerHTML })

    e.target.parentNode.childNodes.forEach((e, i) => {
      e.style.backgroundColor = 'white'
      e.style.color = 'black'
    });

    e.target.style.backgroundColor = 'red'
    e.target.style.color = 'white'
  }

  sumarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  handleSubmit(e) {
    e.preventDefault()
    //console.log(e)
    //let copia = this.state.usuarios.slice(0)
    //let copia = [...this.state.usuarios,this.state.usuario], usuario : ""
    //copia.push(this.state.usuario)
    if(this.state.usuario === "") {
      return
    }

    if(this.selectedItem === -1) { // new item
      console.log("New added: "+this.usuario)
      this.setState({ usuarios: [...this.state.usuarios, this.state.usuario], usuario: "" })
    } else { // edit item
      let copia = this.state.usuarios
      console.log(copia[this.selectedItem] + " has been modified")
      copia[this.selectedItem] = this.state.usuario
      this.setState({ usuarios : copia, usuario : "" })
      this.selectedItem = -1
    }
    this.lista.current.childNodes.forEach((e, i) => {
      e.style.backgroundColor = 'white'
      e.style.color = 'black'
    });
  }

  handleChange(e) {
    //console.log(e.target.value)
    this.setState({ usuario: e.target.value })
  }

  handleDelete(e) {
    if(this.selectedItem === -1) {
      console.log("No selection")
      e.preventDefault()
      return
    }
    console.log("Delete: "+this.state.usuarios[this.selectedItem]+" ("+this.selectedItem+")" )
    this.state.usuarios.splice(this.selectedItem, 1)
    this.setState({ usuarios: this.state.usuarios, usuario: "" })
    this.selectedItem = -1
    console.dir(e)

    this.lista.current.childNodes.forEach((e, i) => {
        e.style.backgroundColor = 'white'
        e.style.color = 'black'
    });
    e.preventDefault()
  }

  render() {
    //return <div><p>Hola mundo class 1</p>, <p>Hola mundo class 2</p></div>;
    //return [<p>Hola mundo class 1</p>, <p>Hola mundo class 2</p>];
    //document.createDocumentFragment();
    let { contador, links, mostrar, mostrarForm, usuario, usuarios } = this.state;
    return (
      <Fragment>
        <Header links={links} />
        <p>Contador : {contador}</p>
        <button
          onClick={this.sumarContador}
        //onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          +
        </button><button onClick={this.mostrarForm}>Mostrar</button>
        <br />
        {mostrar ? <Formulario
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          usuario={usuario}
          borrar={this.handleDelete}
          usuarios={usuarios}
        />
          : null}
        <br></br>

        <hr />
        <ListadoUsuarios usuarios={usuarios} />
        
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
