import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import _ from "lodash";

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
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; //copy an array - with references
    //const counters = this.state.counters.map((c) => c);
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clone object without the reference, we dont want to directly change the state.
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = _.cloneDeep(this.state.counters);
    counters.map((c) => (c.value = 0));
    this.setState({ counters: counters });
  };

  handleAddCounter = () => {
    console.log("add counter");
    const counters = [...this.state.counters];
    const newId = counters.length ? counters[counters.length - 1].id + 1 : 1;
    const counter = { id: newId, value: 0 };
    counters.push(counter);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onAddCounter={this.handleAddCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
