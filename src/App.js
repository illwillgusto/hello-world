import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from "./Components/Greet"
import Welcome from '../src/Components/Welcome'
import Hello from './Components/Hello';
import Hello2 from './Components/Hello2';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserGreeting />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Greet name="Diana" heroName="Wonder Woman"/>  */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman"> */}
          {/* <p>This is children props</p> */}
        {/* </Greet> */}
        {/* <Welcome name="Bruce" heroName="Batman" /> */}
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Hello /> */}
        {/* <Hello2 /> */}
      </div>
    );
  }
}



export default App;
