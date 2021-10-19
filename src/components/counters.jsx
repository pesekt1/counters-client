import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
      onAddCounter,
      onDeleteAll,
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-danger btn-lg">
          Reset all
        </button>
        <button onClick={onAddCounter} className="btn btn-primary btn-lg m-2">
          Add counter
        </button>
        <button onClick={onDeleteAll} className="btn btn-danger btn-lg">
          Delete all
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            selected={true}
            key={counter.id}
          >
            <span className="badge bg-secondary bbg-lg m-2">
              id: {counter.id}
            </span>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
