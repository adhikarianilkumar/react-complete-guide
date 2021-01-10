import React from 'react';
import './Person.css'

const person = ( props ) => {
    return (
    <div className='Person'>
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