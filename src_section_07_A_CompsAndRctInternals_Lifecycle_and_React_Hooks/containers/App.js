import React, { Component, PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent { 
	// PureComponent will check and updates DOM if any state/props changes i.e. NO shouldComponentUpdate is need to implemented
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');

		// this.state = {
		//   persons: [
		//     { id:'qwq', name: 'Leo1', age: 1, hobby: 'Running' },
		//     { id:'ss', name: 'Leo2', age: 2, hobby: 'Chasing birds' },
		//     { id:'ewe', name: 'Leo3', age: 3, hobby: 'Being cute' }
		//   ],
		//   otherStates: 'Some other value',
		//   showPersons: false
		// }
	}

	// Also bleow state can be set in constructor
	state = {
		persons: [
			{ id: 'qwq', name: 'Leo1', age: 1, hobby: 'Running' },
			{ id: 'ss', name: 'Leo2', age: 2, hobby: 'Chasing birds' },
			{ id: 'ewe', name: 'Leo3', age: 3, hobby: 'Being cute' }
		],
		otherStates: 'Some other value',
		showPersons: false,
		removeCockpit: true
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props, state);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	// Do not add this check if your component needs to update all the more often
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[App.js] shouldComponentUpdate');
	// 	return (
	// 		nextProps.persons != this.state.persons ||
	// 		nextProps.changed != this.state.changed ||
	// 		nextProps.clicked != this.state.clicked
	// 	); // "true" continues to update but "false" not
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[App.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[App.js] componentWillUnmount');
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 1, hobby: 'Running' },
				{ name: 'Leo2', age: 2, hobby: 'Chasing birds' },
				{ name: 'Leo3', age: 31, hobby: 'Being cute' }
			]
		})
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
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
			persons: persons
		})
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice(); // OR
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({ showPersons: !doesShow })
	}

	render() {
		console.log('[App.js] render');

		// Prefered way of redering conditionally
		let personsJsx = null;
		if (this.state.showPersons) {
			personsJsx = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangeHandler}
			/>;
		}
		return (
			<div className={classes.App}>
				<button onClick={() => this.setState({ removeCockpit: !this.state.removeCockpit })}>Remove Cockpit</button>
				{
					this.state.removeCockpit ?
						<Cockpit
							title={this.props.appTitle}
							clicked={this.togglePersonHandler}
							showPersons={this.state.showPersons}
							personsLength={this.state.persons.length}
						/>
						: null
				}

				{personsJsx}

			</div>
		);
	}
}

export default App;
/*

*/