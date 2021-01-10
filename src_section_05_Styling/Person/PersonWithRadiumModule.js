import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = ( props ) => {
    // const personStyle = {
    //     '@media(min-width: 500px)' : {
    //         width: '450px',
    //         backgroundColor: 'lightyellow'
    //     }
    // }

    const personStyle = {
        '@media only screen and (max-width: 500px) and (min-width: 200px)' : {
            width: '450px',
            backgroundColor: 'yellow'
        }
    }
    return (
    <div className='Person' style={ personStyle }>
        <p onClick={ props.click}>I am { props.name } and I am { props.age } years old. I like { props.hobby }</p>
        <p>{ props.children }</p>
        <input type='text' onChange={ props.changed} value={ props.name } />
    </div>
    )
}

export default Radium(person);

/*
Functional comp
    props.name

Class based comp
    this.props.name
 */