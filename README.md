# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app

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

```javascript

```

```javascript

```