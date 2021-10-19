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
