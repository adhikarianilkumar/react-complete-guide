import React from 'react';
import personClasses from './Person.css';

const person = ( props ) => { 
    console.log('[Person.js] rendering...'); 
    return (
    <div className={ personClasses.Person} >
        <p onClick={ props.click}>I am { props.name } and I am { props.age } years old. I like { props.hobby }</p>
        <p>{ props.children }</p>
        <input type='text' onChange={ props.changed} value={ props.name } />
    </div>
    )
}

export default person;