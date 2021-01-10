import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return <Person 
        // Key is need in here not in Person Component and it should be on outer element/component
        key= { person.id } 
        click={ () => props.clicked(index) } 
        name={ person.name } 
        age={ person.age } 
        hobby={ person.hobby }
        changed={ (event) => props.changed(event, person.id) }
        />
    }
)}

export default Persons;