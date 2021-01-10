import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnClasses = '';

    // Prefered way of redering conditionally
    let personsJsx = null;
    if(this.state.showPersons){
      personsJsx = (
        <div>
          { this.state.persons.map((person, index) => {
            // Key is need in here not in Person Component and it should be on outer element/component
            return <ErrorBoundary key= { person.id }>
              <Person 
              key= { person.id } 
              click={ () => this.deletePersonHandler(index) } 
              name={ person.name } 
              age={ person.age } 
              hobby={ person.hobby }
              changed={ (event) => this.nameChangeHandler(event, person.id) }
              />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClasses = classes.Red;
    }

    let assignedclasses = [];
    if(this.state.persons.length<=1){
      assignedclasses.push(classes.bold);
    }
    if(this.state.persons.length<=2){
      assignedclasses.push(classes.red);
    }
    return (
      // <div> 
      <div className={classes.App}>
        <h1>Hello React</h1>

        <p className={ assignedclasses.join(' ') }>This is really working!!</p>

        <button 
        className={ btnClasses }
        onClick={ this.togglePersonHandler}>Toggle names</button>

        { personsJsx }
        
      </div>
      // <Assignment02 />
      // </div>
    );
    // Below line of code generates HTML code <div class="App"> <h1>Hi to React</h1> </div>
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'), React.createElement('h1', null, 'Does this work for the second time?'));
  }
}

export default App; // For pseudo selectors and media queries
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

Radium 
  is popular react module which allows to write inline styles with Pseudo selectors and Media queries and it can be used in both class based and functional components.

Styled-components 
  allows to create react components with dynamically generated CSS classes but this works when I do not want to keep my styles seperate file and more organized.

CSS Modules (Prefered)
  allow to keep our styles in seperate file and helps to avoid naming clashes. To enable CSS modules for 'react-scrpts: "1.x.x"' follow below steps
  1. Stop your NPM server and run npm eject(this will create config folder and modify your pakage.json)
  2. Look for "test: /\.css$/" in both webpack.config.dev.js and webpack.config.prod.js and add below options to css-loader (loader: require.resolve('css-loader'))  
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
  3. Run npm start
  4. Do "import chooseNameOfYourChoice from './path_to_css_file';" and chooseNameOfYourChoice is an object and has all CSS styles from the imported file 

  Note: For 'react-scrpts: "2.x.x"'
    1. Do not run "npm eject"
    2. Just rename css file as filename.module.css 
    3. Do "import chooseNameOfYourChoice from './path_to_css_file';" and chooseNameOfYourChoice is an object and has all CSS styles from the imported file 
*/