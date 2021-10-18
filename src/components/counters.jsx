import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

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
    console.log("reset called.");
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            selected={true}
            key={counter.id}
          >
            <div>id: {counter.id}</div>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
