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

We want a better layout. We will use App component as the main component hosting all the other components. We want a simple navbar from bootstrap and main container also from the Bootstrap:
```javascript
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}
```

Now we want to control the state from the App component. So we move the state and all the handlers there:
```javascript
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("event handler handleDelete called:", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    console.log("event handler handleIncrement called, counter:", counter);
    const counters = [...this.state.counters]; //copy an array - with references
    //const counters = this.state.counters.map((c) => c);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clone object without the reference, we dont want to directly change the state.
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    console.log("reset called.");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
```

Counters component is now fully controlled:
```javascript
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            selected={true}
            key={counter.id}
          >
            <div>id: 
```

Navbar should show active counters:

App.js:
```javascript
<Navbar
  totalCounters={this.state.counters.filter((c) => c.value > 0).length}
/>
```

navbar.jsx:
```javascript
Navbar:{" "}
<span className="badge rounded-pill bg-primary">
  {this.props.totalCounters}
</span>
```