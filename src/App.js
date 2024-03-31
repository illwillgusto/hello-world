import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from "./Components/Greet"
import Welcome from '../src/Components/Welcome'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet />
        <Welcome />
      </div>
    );
  }
}



export default App;
