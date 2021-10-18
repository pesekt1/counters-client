# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app



## Counter app

Create a component:
src/components/counter.jsx:

```javascript
import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

Dynamic values and functions: Syntax:
```javascript
class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    const zero = <h1>Zero</h1>;
    return count === 0 ? zero : count;
  }
}
```

We can use any attributes from state:

```javascript
state = {
  count: 0,
  imageUrl: "https://picsum.photos/200",
};

render() {
  return (
    <div>
      <img src={this.state.imageUrl} />
      <span>{this.formatCount()}</span>
      <button>Increment</button>
    </div>
  );
}
```

Class styles:
```javascript
render() {
  return (
    <div>
      <span className="badge bg-primary m-2">{this.formatCount()}</span>
      <button>Increment</button>
    </div>
  );
}
```

Dynamically setting the class based on a value:

```javascript
render() {
  let classes = "badge m-2 ";
  classes += this.state.count === 0 ? "bg-warning" : "bg-primary";

  return (
    <div>
      <h1>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-lg">Increment</button>
      </h1>
    </div>
  );
}
```

Extract into a method:
```javascript
render() {
  return (
    <div>
      <h1>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-lg">Increment</button>
      </h1>
    </div>
  );
}

getClasses() {
  let classes = "badge m-2 ";
  classes += this.state.count === 0 ? "bg-warning" : "bg-primary";
  return classes;
}
```

Rendering a list - using map() function:
```javascript
render() {
  return (
    <div>
      <h1>
        <span className={this.getClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-lg">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </h1>
    </div>
```

Handling events:
```javascript
handleIncrement() {
  console.log("increment clicked");
}

<button
  onClick={this.handleIncrement}
  className="btn btn-secondary btn-lg"
>
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