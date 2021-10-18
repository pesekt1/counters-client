import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-lg m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
