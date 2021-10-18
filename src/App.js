import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App - constructor called.");
  }

  componentDidMount() {
    console.log("App - mounted.");
  }

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
    //console.log("reset called.");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  render() {
    console.log("App rendered.");
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
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
