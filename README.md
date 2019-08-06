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
