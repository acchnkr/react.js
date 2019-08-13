import React, { Component } from "react"

export default class Usuario extends Component {
    render() {
        return
        {
            !usuarios.length
            ? <li key={0}>No hay usuarios</li>
            : usuarios.map((e, i) => {
                return (
                    <li onClick={this.select} style={{ backgroundColor: 'white', color: 'black' }} id={i} key={i}>{e}</li>
                )
            })
        }

    }
}