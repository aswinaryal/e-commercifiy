import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello ashwin'
    }
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.name}</p>
        <button onClick = {() => this.setState({name: 'pristina'})} >Change Text</button>
    </div> 
    )
  }
}

export default App;
