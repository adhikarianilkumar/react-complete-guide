import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Assignment01 from './Assignment01/Assignment01'

class App extends Component {
  state = {
    persons: [
      { name: 'Leo1', age: 1, hobby: 'Running' },
      { name: 'Leo2', age: 2, hobby: 'Chasing birds' },
      { name: 'Leo3', age: 3, hobby: 'Being cute' }
    ],
    otherStates: 'Some other value'
  }

  switchNameHandler = ( newName) => {
    this.setState({
      persons: [
        { name: newName, age: 1, hobby: 'Running' },
        { name: 'Leo2', age: 2, hobby: 'Chasing birds' },
        { name: 'Leo3', age: 31, hobby: 'Being cute' }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Leo1', age: 1, hobby: 'Running' },
        { name: event.target.value, age: 2, hobby: 'Chasing birds' },
        { name: 'Leo3', age: 31, hobby: 'Being cute' }
      ]
    })
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div>
        <div className="App">
          <h1>Hello React</h1>

          <button 
          style={ btnStyle }
          onClick={ ()=> this.switchNameHandler('It\'s NOT recommnded') }>Switch name</button>

          <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } hobby={ this.state.persons[0].hobby }/>

          <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } hobby={ this.state.persons[1].hobby } onChanged={ this.nameChangeHandler.bind(this) }/>

          <Person click={this.switchNameHandler.bind(this, 'It\'s recommnded')} name={ this.state.persons[2].name } age={ this.state.persons[2].age } hobby={ this.state.persons[2].hobby }> Also I like running</Person>
          
        </div>

        <Assignment01 />

      </div>
    );
    // Below line of code generates HTML code <div class="App"> <h1>Hi to React</h1> </div>
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'), React.createElement('h1', null, 'Does this work for the second time?'));
  }
}

export default App;
/*
Creating components in two different ways:

1. Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => 
const cmp = () => { 
  return <div>some JSX</div> 
} (using ES6 arrow functions as shown here is recommended but optional)

props allow you to pass data from a parent (wrapping) component to a child (embedded) component.

2. class-based components (also referred to as "containers", "smart" or "stateful" components) => 
class Cmp extends Component { 
  render () { 
    return <div>some JSX</div> 
  } 
} 

state simply is a property of the component class, you have to call it state  though - the name is not optional. You can then access it via this.state  in your class JSX code (which you return in the required render() method). Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state.
*/