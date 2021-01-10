import React, { Component } from 'react';
import personClasses from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={personClasses.Person} >
                <p
                    onClick={this.props.click}>
                    I am {this.props.name} and
                I am {this.props.age} years old.
                I like {this.props.hobby}
                </p>

                <p>
                    {this.props.children}
                </p>

                <input type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        )
    }
}

export default Person;