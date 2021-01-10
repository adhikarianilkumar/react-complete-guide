import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // No state is initialized in Persons compnent so getDerivedStateFromProps will throw warning message
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps', props, state);
    //     return state;
    // }

    // Older version of React will support componentWillReceiveProps method
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps');
    //     console.log(props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Scroll coordinates for example' };
    }

    // Older version of React will support componentWillUpdate method
    // componentWillUpdate(){
    //     console.log('[Persons.js] componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                // Key is need in here not in Person Component and it should be on outer element/component
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                hobby={person.hobby}
                changed={(event) => this.props.changed(event, person.id)}
            />
        }
        )
    }
};

export default Persons;