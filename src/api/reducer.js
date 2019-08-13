let init = {
    contador : 0
}

let reducer = ( state = init, action ) => {
    switch (action) {
        case "CONTADOR_AUMENTA":
            return { contador : state.contador +1 }
        default:
            return state;
    }
}

export default reducer