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
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/> 
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />
        {/* <Hello /> */}
        {/* <Hello2 /> */}
      </div>
    );
  }
}



export default App;
