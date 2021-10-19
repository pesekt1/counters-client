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
