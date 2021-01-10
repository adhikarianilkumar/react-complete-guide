import React from 'react';
import personClasses from './Person.css';

const person = ( props ) => {
    const rnd = Math.random(); 
    if(rnd > 0.7){
        throw new Error('someronejn')
    }   
    return (
    <div className={ personClasses.Person} >
        <p onClick={ props.click}>I am { props.name } and I am { props.age } years old. I like { props.hobby }</p>
        <p>{ props.children }</p>
        <input type='text' onChange={ props.changed} value={ props.name } />
    </div>
    )
}

export default person;

/*
Functional comp
    props.name

Class based comp
    this.props.name
 */