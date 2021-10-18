# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app
- composing-components-1
- composing-components-2

## composing components - part 2

Create single source of truth: Counters component will hold the state. 

Counter compoenent will be stateless - it will be a controlled component. 

It will receive data via props and raise event when data needs to be updated.

Replace all appearances of "this.state" with this.props.counter

Counter.jsx:
Create onIncrement event.
```javascript
<button
  onClick={() => this.props.onIncrement(this.props.counter)}
```


Counters.jsx:
```javascript
  handleIncrement = (counter) => {
    console.log("event handler handleIncrement called, counter:", counter);
    const counters = [...this.state.counters]; //copy an array - with references
    //const counters = this.state.counters.map((c) => c);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clone object without the reference, we dont want to directly change the state.
    counters[index].value++;
    this.setState({ counters: counters });
  };
```

- syncing multiple components:
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

```javascript

```

```javascript

```