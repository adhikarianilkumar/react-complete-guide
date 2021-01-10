import React, { Component } from 'react';
// Note: It is good to know how to use it but you should only use it when there might be an uncontrollable bug/issue in runtime code

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({hasError: true, errorMessage: err})
    }
    render(){
        // if(this.state.hasError){
        //     return <h1>{ this.state.errorMessage }</h1>
        // } else {
        //     return this.props.children;
        // }

    return (this.state.hasError ? <h1>{ this.state.errorMessage }</h1> : this.props.children);
    }
}

export default ErrorBoundary;