import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
//se asigna el estado a repreater, para cuando cambie los valores    
    this.repeater = this.repeater.bind(this);
    this.state = {
      text: ''
      };
    }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>        
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repeater}/>
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
//se crea la funcion, para que capture el evento '(e)', y se llama la funcion cuando se hace un onChange  
  repeater(e){
    this.setState({
      text: e.target.value
    })
  }

}

export default App;
