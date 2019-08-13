import React, { Component } from "react"
import Usuario from "./Usuario"

export default class ListadoUsuario extends Component {
    render() {
        return
        <ul ref={this.lista}>
            {
                !usuarios.length
                    ? <li key={0}>No hay usuarios</li>
                    : usuarios.map((e, i) => {
                        return (
                            <li onClick={this.select} style={{ backgroundColor: 'white', color: 'black' }} id={i} key={i}>{e}</li>
                        )
                    })
            }
        </ul>
    }
}