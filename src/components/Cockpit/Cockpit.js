import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	console.log(authContext.authenticated);
	// useEffect(); can be used multiple times

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Fake http request...
		// const timer = setTimeout(() => {
		//   alert('Saved Data to cloud');
		// }, 1000);

		// setTimeout(() => {
		// 	alert('Saved Data to cloud');
		// }, 1000);

		toggleBtnRef.current.click();

		return () => {
			// This will be executed BEFORE the main useEffect runs, but AFTER the first render cycle
			// alert('Stop saving Data to cloud');
			// clearTimeout(timer);
			console.log('[Cockpit.js] Cleaup work in useEffect');
		}
	}, []); // Pass an empty Array to execute only once during initialization and when it destroys or pass one or more props/state to execute when it changes. Exapmple [props.persons, ...]

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] Cleaup work in 2nd useEffect');
		}
	})

	let btnClasses = '';
	if (props.showPersons) btnClasses = classes.Red;

	let assignedclasses = [];
	if (props.personsLength <= 1) {
		assignedclasses.push(classes.bold);
	}
	if (props.personsLength <= 2) {
		assignedclasses.push(classes.red);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedclasses.join(' ')}>This is really working!!</p>
			<button
				ref={ toggleBtnRef }
				className={btnClasses}
				onClick={props.clicked}>Toggle names</button>
			
			{/* <AuthContext.Consumer>
				{ (context) => <button onClick={context.login}>Log in</button> }
			</AuthContext.Consumer> */}

			<button onClick={authContext.login}>Log in</button>
			
		</div>
	)
}

export default React.memo(Cockpit); // Stores the snapshot of the component and updates only if there is change and do not add this if your component needs to update all the more often