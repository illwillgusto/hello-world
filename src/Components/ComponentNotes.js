/*Lifecycle Methods
-Mounting: when an instance of a component is being created and inserted into the DOM 
-Updating: when a component is being re-rendered as a result of changes to either its props or state
-Unmounting: when a component is being removed from the DOM
-Error Handling: when there is an error during rendering, in a lifecycle method, or in the constructor 
of an child component 


Mounting phase has 4 methods:
constructor
static getDerivedStateFromProps
render()
componentDidMount

Updating phase has 5 methods;
static getDerivedStateFromProps
shouldComponentUpdate
render()
getSnapshotBeforeUpdate
componentDidUpdate

Unmounting phase has 1 method:
componentWillUnmount

Error Handling has 2 methods:
static getDerivedStateFromError
componentDidCatch
 */