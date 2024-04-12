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
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import './Components/appStyles.css' // regular stylesheets being imported 
import styles from './appStyles.module.css' // when importing module stylesheets, this module will only apply to this component 
import Form from './Components/Form'
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComponent from './Components/PureComponent';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';

class App extends Component {
  render() {
    return (
      <div className='App'>



        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table></Table> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <Stylesheet primary= {true} />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> when styling from the module */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
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
