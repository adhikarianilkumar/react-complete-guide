import React from 'react';
// import './Person.css';

import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (max-width: 500px) {
        width: 450px;
        background-color: lightyellow;
}
`;

const person = ( props ) => {
    // const personStyle = {
    //     '@media(min-width: 500px)' : {
    //         width: '450px',
    //         backgroundColor: 'lightyellow'
    //     }
    // }

    const personStyle = {
        // '@media only screen and (max-width: 500px) and (min-width: 200px)' : {
        //     width: '450px',
        //     backgroundColor: 'yellow'
        // }
    }
    return (
    // <div className='Person' style={ personStyle }>
    <StyledDiv>
        <p onClick={ props.click}>I am { props.name } and I am { props.age } years old. I like { props.hobby }</p>
        <p>{ props.children }</p>
        <input type='text' onChange={ props.changed} value={ props.name } />
    </StyledDiv>
    // </div>
    )
}

export default person;

/*
Functional comp
    props.name

Class based comp
    this.props.name
 */