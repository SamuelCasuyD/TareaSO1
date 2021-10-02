import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Docker-Meetup</h1>
        </header>
        <p className="App-intro">
          Welcome University Mariano Galvez Guatemala

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <br/>
        
        <h2>
        Sistemas Operativos 1
        </h2>
        <p>
        	El curso de Sistemas Operativos 1 tiene como objetivo principal que el estudiante aplique 
y entienda el concepto de Exclusión mutua entre procesos. Y pueda implementar las 
diferentes soluciones que existen en la administración de Sistemas Operativos. 
        </p>
        
        <br/>
        
                <h2>
        Centro Universitario
        </h2>
                <p>
La Universidad Mariano Gálvez de Guatemala es una universidad privada en Guatemala. Su nombre hace referencia al prócer y preclaro jurisconsulto Doctor José Mariano Gálvez (Jefe del Estado de Guatemala 1831-1838), fundador de la Academia de Estudios y reformador de la educación guatemalteca, quien promovió importantes innovaciones en todos los órdenes de la vida del Estado. Luchó por que la enseñanza fuera laica, fue fundador de la Biblioteca y Museo Nacional, respetó las leyes y garantías individuales, libertad de prensa y emisión del pensamiento.  
        </p>
      </div>
    );
  }
}

export default App;
