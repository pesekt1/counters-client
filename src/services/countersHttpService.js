import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;

class CountersService {
  getAll() {
    return axios.get("counters");
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
