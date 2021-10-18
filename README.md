# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app
- composing-components-1

## Composing components

- We could make a new component that uses multiple counters:
```javascript
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
```

- We can use a map() function:
```javascript
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} />
        ))}
      </div>
    );
  }
}
```

Using props - Passing data to components:
```javascript
class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter value={counter.value} selected={true} key={counter.id} />
        ))}
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: this.props.value,
  };
```

- Passing children:
Parent (Counters component)
```javascript
{this.state.counters.map((counter) => (
  <Counter value={counter.value} selected={true} key={counter.id}>
    <h1>id: {counter.id}</h1>
  </Counter>
))}
```

Child (Counter component)
```javascript
render() {
  return (
    <div>
      <h1>
        {this.props.children}
        <span className={this.getClasses()}>{this.formatCount()}</span>
```

- Raising and handling events:
Handling an event in Counters component: This is where the state of counters is so the deletion should be handled here.

```javascript
handleDelete = (counterId) => {
  const counters = this.state.counters.filter((c) => c.id !== counterId);
  this.setState({ counters: counters });
};

render() {
  return (
    <div>
      {this.state.counters.map((counter) => (
        <Counter
          onDelete={this.handleDelete}
          value={counter.value}
          counter={counter}
          selected={true}
          key={counter.id}
        >
```

Raising an event in Counter component: this component does not have a state of counters so it is only raising an event and another component must handle it.
```javascript
<button
  onClick={() => this.props.onDelete(this.props.counter.id)}
  className="btn btn-danger btn-lg m-2"
>
  delete
</button>
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

```javascript

```