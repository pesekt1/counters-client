import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
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
