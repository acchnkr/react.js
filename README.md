npm i -g create-react-app

Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd E:\Hnkr\p1
npm start

---

Componente, empiezan con mayuscula, compila a un nodo para eso siempre tiene que estar la variable React en scope,
todos los componentes deben retornar algo, y pueden ser uno de los siguientes tipos: un string, otro componente o una etiqueta HTML (no en forma de string). funcion

Plugin para Visual Studio Code:
https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Para abreviar en react, asociar al tipo de archivo en VSC:
https://docs.emmet.io/cheat-sheet/

function App() {}

let App = () => {}

class App {}

src/
\_api/
\_ui/
\_layout/
\_App.js
\_Header.js
\_Footer.js
\_Main.js
\_paginas/
\_widgets/

Un componente de tipo class puede mantener su propio estado (state),
y cualquier componente puede recibir paràmetros desde otro componente (props). Los dos son de solo lectura. Se puede cambiar el estado de un compo, pero no por asignacion de variable, es decir:

let state = 1;
state = 2; // No se puede

Los props son obligatoriamente de solo lectura, nunca se pueden modificar.
El state de un compo solo puede ser modificado por ese mismo compo, y nadie mas lo puede cambiar.
Si el state o los props cambian, en cualquier momento, la funcion render del compo (o en su defecto, su return) se tiene que volver a ejecutar. Los props y state solo pueden ser pasados de padre a hijo, no entre hermanos, sin saltear jerarquias.

Patron redux (suscripcion).

props:
function foo(1) {}
foo(1) === <foo a=1 />

Los props que le pasamos a un compo pueden valer 3 cosas: string/boolean(default)/expresion de javascript:
<foo a /> // por defecto es true
<foo a="hola mundo" />
<foo a={1} /> // una expresion javascript siempre va entre llaves

---

Consola de react:
React developer tools

Array.map() => Array - retorna un array de la misma longitud del array saliente.

Array.map((e, i, arr)=>{
return ;
});

## Array.filter() => Array - retorna un array de igual o menor longitud del array saliente.

{...this.state} pasa cada objeto dentro de state por separado, en los parametros

Modificar el state : Se usa una function asincronica que sale de this
de dos formas:

this.setState(()=>{})

this.setState({contador : this.state.contador + 1})

------------------------------------------------

para redefinir el contexto en js
//en js 5 formas de llamar una funcion
 * bind apply call new

funcion()
funcion.call(contexto o this, param1, param2)
funcion.apply(contexto o this, [param1, param2]) // los parametros van en forma de array

// new : crea un objeto nuevo y vacìo, y ejecuta la funcion que tenga al lado pero le redefine el contexto con ese objeto que acaba de crear. Cuando termina la ejecuciòn, retorna el mismo objeto.

function persona() {
	
}
let nuevo = {}
persona.call(nuevo)
return nuevo

new persona()
------------------------------
retorna la referencia pero sin ejecutar
let asd = funcion.bind("bind", param1, param2)

asd()


--------------------------------

 {TRUE/!FALSE} o {FALSE/null/undefined/0/""}

 Array.isArray(Any) => Boolean // chequear si es array

 ------------------

 typeof ""		"string"
 typeof 1	"number"
 typeof true	"boolean"
 typeof undefined	"undefined"
 typeof null	"object" // bug
 typeof {}	"object"
 typeof []	"object"
 
 Prototype.isPrototypeOf(instancia) => boolean

------------------------------------------------
repos varios:
https://github.com/HoracioGutierrez

Sobre la cursada:
https://github.com/HoracioGutierrez/accenture-react


operador REST/SPREAD + destructuring:
Forma en la que se puede sacar el valor de algo, fuera de ese algo.

let obj = {x:1, y:2}
obj.x

forma tradicional:
let x = obj.x
let y = obj.y

forma nueva:
let {x:equis, y:epsilon} = obj
let {x,y,z} = obj // object shorthand


