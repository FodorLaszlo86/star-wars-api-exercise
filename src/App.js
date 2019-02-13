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
    const SWPeopleArr = this.state.people.map(SWPpl => 
          <StarWarsPeople 
              key={SWPpl.name}
              name={SWPpl.name} 
              height={SWPpl.height} 
              mass={SWPpl.mass} 
              birthDate={SWPpl.birth_year} 
          />)
    return (
      <div className="App">
      <header>
        <h1>Luke, Use An API!!!</h1>
      </header>
      <section className='peopleContainer'>
        { SWPeopleArr }
      </section>
      </div>
    );
  }
}

export default App;
