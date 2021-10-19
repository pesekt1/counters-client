# React-demo

## implementing http service
- We want to connect to existing API (web server app).

- axios library: create http requests to our backend which runs locally on 3001 port:

```javascript
import axios from "axios";

class CountersService {
  getAll() {
    return axios.get("http://localhost:3001/api/counters");
  }

  deleteAll() {
    return axios.delete("http://localhost:3001/api/counters");
  }

  add() {
    return axios.post("http://localhost:3001/api/counters");
  }

  delete(id) {
    return axios.delete("http://localhost:3001/api/counters/" + id);
  }

  increment(counter) {
    const incrementedCounter = { ...counter };
    incrementedCounter.value++;
    return axios.put(
      "http://localhost:3001/api/counters/" + counter.id,
      incrementedCounter
    );
  }

  decrement(counter) {
    const decrementedCounter = { ...counter };
    decrementedCounter.value--;
    return axios.put(
      "http://localhost:3001/api/counters/" + counter.id,
      decrementedCounter
    );
  }

  like(counter) {
    const likedCounter = { ...counter };
    likedCounter.liked = !likedCounter.liked;
    console.log(likedCounter);
    return axios.put(
      "http://localhost:3001/api/counters/" + counter.id,
      likedCounter
    );
  }

  resetAll() {
    return axios.put("http://localhost:3001/api/counters/");
  }
}

export default new CountersService();
```

- retrieve counters from the backend - we can read the response from the web server:
```javascript
  retrieveCounters = () => {
    CountersService.getAll()
      .then((response) => {
        this.setState({
          counters: response.data,
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
```

- All the handlers must be changed from using the fake service to use our new axios http service:
```javascript
  handleDeleteAll = () => {
    CountersService.deleteAll()
      .then((response) => {
        this.setState({
          counters: [],
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
```
... etc...