# React-demo

## branches sequence:

- create-react-app
- hello-world
- counter-app
- composing-components-1
- composing-components-2
- composing-components-3
- fake-counters-service

Functioning demo on Heroku:
https://react-demo-web-dev.herokuapp.com/

Next steps: 

- create a web server in node.js + database (MongoDB or MySQL) to persist the state instead of having the counters array in the memory.

- use axios library to communicate with the web server.

## FakeCountersService

We dont have a backend for this app yet so we can use a fake service returning an array of predefined values.

- fake counters service:

services/fakeCountersService.js: Fake data array + CRUD methods... database mock.
```javascript
const counters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

export function getCounters() {
  return counters;
}

export function getCounter(id) {
  return counters.find((c) => c.id === id);
}

export function saveCounter(counter) {
  let counterInDb = counters.find((c) => c.id === counter.id) || {};
  counterInDb.value = counter.value;
  return counterInDb;
}

export function deletecounter(id) {
  let counterInDb = counters.find((m) => m.id === id);
  counters.splice(counters.indexOf(counterInDb), 1);
  return counterInDb;
}
```

```javascript
class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
    };
  }

  componentDidMount() {
    this.retrieveCounters();
  }

  retrieveCounters = () => {
    const counters = getCounters();
    this.setState({ counters: counters });
  };
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