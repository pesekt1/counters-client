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
    console.log("event handler called:", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
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
