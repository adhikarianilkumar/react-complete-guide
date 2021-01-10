import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'qwq', name: 'Leo1', age: 1, hobby: 'Running' },
      { id:'ss', name: 'Leo2', age: 2, hobby: 'Chasing birds' },
      { id:'ewe', name: 'Leo3', age: 3, hobby: 'Being cute' }
    ],
    otherStates: 'Some other value',
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=> {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); // OR
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({
      persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {
    const btnStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // Pseudo selectors will work with Radium module and this is how it can be done
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    // Prefered way of redering conditionally
    let personsJsx = null;
    if(this.state.showPersons){
      personsJsx = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
            // Key is need in here not in Person Component
            key= { person.id } 
            click={ () => this.deletePersonHandler(index) } 
            name={ person.name } 
            age={ person.age } 
            hobby={ person.hobby }
            changed={ (event) => this.nameChangeHandler(event, person.id) }
            />
          })}
        </div>
      );
      btnStyle.backgroundColor = 'red';
      // Pseudo selectors will work with Radium module and this is how it can be done
      btnStyle[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    let classes = [];
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    return (
       // Only for media queries using Radium
      <StyleRoot>
      {/* <div> */}
      <div className="App">
        <h1>Hello React</h1>

        <p className={ classes.join(' ') }>This is really working!!</p>

        <button 
        style={ btnStyle }
        onClick={ this.togglePersonHandler}>Switch name</button>

        { personsJsx }
        
      </div>
      {/* <Assignment02 />
      </div> */}
      </StyleRoot>
    );
    // Below line of code generates HTML code <div class="App"> <h1>Hi to React</h1> </div>
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'), React.createElement('h1', null, 'Does this work for the second time?'));
  }
}

export default Radium(App); // For pseudo selectors and media queries
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

Radium is popular react module which allows to write inline styles with Pseudo selectors and Media queries and it can be used in both class based and functional components
*/