import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from "./Components/Greet"
import Welcome from '../src/Components/Welcome'
import Hello from './Components/Hello';
import Hello2 from './Components/Hello2';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet /> 
        {/* <Welcome /> */}
        <Hello />
        <Hello2 />
      </div>
    );
  }
}



export default App;
