import React, { Component } from 'react';
import StarWarsPeople from './StarWarsPeople';
import './App.css';

class App extends Component {
  state = {
    people: []
  }


  componentDidMount = () => {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => this.setState({ people: data.results }))
    .catch(() => console.log('FAILED TO LOAD YOUR DATA SIR'))
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
