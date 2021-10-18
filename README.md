# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app
- composing-components-1
- composing-components-2

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


```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```