import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
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
            onDeleteAll={this.handleDeleteAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
