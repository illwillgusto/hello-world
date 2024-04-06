/*Lifecycle Methods
-Mounting: when an instance of a component is being created and inserted into the DOM 
-Updating: when a component is being re-rendered as a result of changes to either its props or state
-Unmounting: when a component is being removed from the DOM
-Error Handling: when there is an error during rendering, in a lifecycle method, or in the constructor 
of an child component 


Mounting phase has 4 methods:
constructor(props) - a special function that will get called whenever a new component is created. 
used to initialize the state or binding the event handlers.
call a special function which is super(props)
the only place expected to change or set the state by directly overwriting this.state

static getDerivedStateFromProps - when the state of the component depends on changes in props over time.
set the state 

render() - only required method in a class component. 
read props & state and return JSX.
Do not change state or interact with DOM or make ajax calls
Children components lifecycle methods are also executed 

componentDidMount - only called once 
invoked immediately after a component and all its children components have been rendered to the DOM.
cause side effects to load data 

Updating phase has 5 methods;
static getDerivedStateFromProps - method is called every time a component is re-rendered 
used when the state depends on the props of the component. NO SIDE EFFECTS.

shouldComponentUpdate - dictates if the component should re-render or not, by default all class components will 
re-render whenever the props they receive or their state changes. this method can prevent default behavior 
by returning false. compare the existing props and state values w/ the next props and state values, and return 
true or false to let React know whether the component should update of not. Performance optimization.
NO SIDE EFFECTS

render() - read props & state and return JSX. the JSX describes the UI.

getSnapshotBeforeUpdate - previous props and previous state as its parameters. Called right before the changes from 
the virtual DOM are to be reflected in the DOM. You could use this method Capture some information from the DOM. 
this method will either return 'null' or a value, that value will be passed as the 3rd parameter to the componentDidUpdate 
method. 

componentDidUpdate - this method will be called after the render is finished in the re-render cycles. this method 
accepts 3 parameters; previous props, previous state, the snapshot value returned from getSnapshotBeforeUpdate method.
this method will only be called once each re-render cycle. you can cause side effects for this method, you can make 
Ajax calls. before the call you have to compare the previous props with the new props then decide whether to make 
the Ajax call or not.

Unmounting phase has 1 method:
componentWillUnmount

Error Handling has 2 methods:
static getDerivedStateFromError
componentDidCatch
 */