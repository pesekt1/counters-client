# React-demo

## FakeCountersService

We dont have a backend for this app yet so we can use a fake service returning an array of predefined values. This will be mocking a scenario where we have a service using an http communication with the backend.

- fake counters service:

services/fakeCountersService.js: Fake data array + CRUD methods... database mock.
```javascript
let counters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function getCounters() {
  return counters;
}

function getCounter(id) {
  return counters.find((c) => c.id === id);
}

function addCounter() {
  const newId = counters.length ? counters[counters.length - 1].id + 1 : 1;
  const newCounter = { id: newId, value: 0 };
  counters.push(newCounter);
  return counters;
}

// increment +1 or -1
function updateCounter(counter, increment) {
  let counterInDb = counters.find((c) => c.id === counter.id) || {};
  counterInDb.value = counter.value + increment;
  return counterInDb;
}

function deleteCounter(id) {
  let counterInDb = counters.find((m) => m.id === id);
  counters.splice(counters.indexOf(counterInDb), 1);
  return counterInDb;
}

function deleteAll() {
  counters = [];
}

function resetAll() {
  counters.forEach((element) => {
    element.value = 0;
  });
}

const FakeService = {
  getCounters,
  getCounter,
  addCounter,
  updateCounter,
  deleteCounter,
  deleteAll,
  resetAll,
};

export default FakeService;
```

```javascript
import FakeService from "./services/fakeCountersService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [],
    };
  }

  componentDidMount() {
    this.retrieveCounters();
    console.log("App component mounted");
  }

  //we dont want array references nor item references
  retrieveCounters = () => {
    let countersCopy = [];
    for (let i = 0; i < FakeService.getCounters().length; i++) {
      countersCopy[i] = { ...FakeService.getCounters()[i] };
    }
    this.setState({ counters: countersCopy });
  };

  handleDelete = (counterId) => {
    FakeService.deleteCounter(counterId);
    this.retrieveCounters();
  };

  handleDeleteAll = () => {
    FakeService.deleteAll();
    this.retrieveCounters();
  };

  handleDecrement = (counter) => {
    FakeService.updateCounter(counter, -1);
    this.retrieveCounters();
  };

  handleIncrement = (counter) => {
    FakeService.updateCounter(counter, 1);
    this.retrieveCounters();
  };

  handleReset = () => {
    FakeService.resetAll();
    this.retrieveCounters();
  };

  handleAddCounter = () => {
    FakeService.addCounter();
    this.retrieveCounters();
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