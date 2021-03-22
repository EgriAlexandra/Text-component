import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
  state = {
    textLenght: ""
  }

  changeHandler = (event) => {
    this.setState({textLenght : event.target.value});
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.textLenght.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({textLenght: updatedText});
  }

  render() {
    const charList = this.state.textLenght.split('').map((ch, index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" 
        onChange={this.changeHandler}
        value={this.state.textLenght}
        />
        <p>Your text: {this.state.textLenght}</p>
        <Validation inputLength={this.state.textLenght.length}/>
        {charList}
      </div>
    );
  }
}

export default App;

