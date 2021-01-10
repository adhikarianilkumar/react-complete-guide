import React, { Component } from 'react';
import './Assignment02.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class Assignment02 extends Component {
  state = {text : ''};

  textChangeHandler = (event) => {
    this.setState({text: event.target.value})
  }

  deletCharHandler = (index) => {
    const textArr = this.state.text.split('');
    textArr.splice(index , 1);
    this.setState({text: textArr.join('')})
  }
  render() {
    const minTextLen = 5;
    let textToCahComp = null;
    
    if(this.state.text.length >= minTextLen){
      textToCahComp = (
        <div>
          {
            this.state.text.split('').map((char, index) => {
              return <CharComponent 
              key={ index }
              char={ char }
              click={ () => this.deletCharHandler(index)}
               />
            })
          }
        </div>
      )
    }
    
    return (
      <div className="Assignment02">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div>
          <p>
            <b>Solution:</b>
          </p>

          <hr/>

          <input 
          type='text' value={ this.state.text} 
          onChange={ this.textChangeHandler }
          placeholder='Enter text here'
          />

          <ValidationComponent 
          textLength={ this.state.text.length }
          minTextLen={ minTextLen }
          />

          <br/>

          <p>Current text length is { this.state.text.length}</p>

          { textToCahComp }

        </div>
      </div>
    );
  }
}

export default Assignment02;
