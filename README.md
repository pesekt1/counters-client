# React-demo

## composing components - part 3

- Change navbar into a stateless functional component:
```javascript
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar:{" "}
            <span className="badge rounded-pill bg-primary">
              {props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
```
This is possible if a class has only one function and no state.


- Destructuring arguments:
```javascript
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
```

- Mounting phase:

In App component add this:
```javascript
constructor() {
super();
console.log("App - constructor called.");
}

componentDidMount() {
console.log("App - mounted.");
}

render() {
console.log("App rendered.");
```
Add console.log also in render methods of counters and counter. Reload the page and see the sequence in the console.


- Update phase: We can work with previous props and previous state:
```javascript
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value){//Ajax call and get data from the server}
  }
```

- Unmount phase: When removing a component from the DOM
```javascript
  componentWillUnmount() {
    console.log("Counter - unmount");
  }
```

- Decrement button:

App.js:
```javascript
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };
```

counter.jsx:
```javascript
<button
  disabled={this.disableDecrementButton()}
  onClick={() => onDecrement(counter)}
  className="btn btn-danger btn-lg"
>
  -
</button>

disableDecrementButton() {
  return this.props.counter.value > 0 ? false : true;
}
```

- Add counter button:

counters.jsx:
```javascript
<button onClick={onAddCounter} className="btn btn-primary btn-lg m-2">
  Add counter
</button>
```

```javascript
handleAddCounter = () => {
  console.log("add counter");
  const counters = [...this.state.counters];
  const newId = counters.length ? counters[counters.length - 1].id + 1 : 1;
  const counter = { id: newId, value: 0 };
  counters.push(counter);
  this.setState({ counters: counters });
};
```