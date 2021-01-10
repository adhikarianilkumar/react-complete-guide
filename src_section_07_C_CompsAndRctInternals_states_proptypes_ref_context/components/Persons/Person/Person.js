import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';
import personClasses from './Person.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); // Approach TWO
    }

    static contextType = AuthContext; // This works only Class based components 

    componentDidMount(){
        // this.inputElemet.focus(); // Approach ONE
        this.inputElementRef.current.focus(); // Approach TWO
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className={personClasses.Person} >
            // <React.Fragment>
            // <Fragment>
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    { (context) => context.authenticated ? <p>Authenticated!</p> : <p>Please log input</p>}
                </AuthContext.Consumer> */}
                
                {/* This works only Class based components */}
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log input</p> } 
                
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
                    // ref={(inputEl) => {this.inputElemet = inputEl} } // Approach ONE
                    ref={ this.inputElementRef } // Approach TWO
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Auxiliary>
            // </Fragment>
            // </React.Fragment>
            // </div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, personClasses.Person);