import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (increment) => {
    this.setState({ count: this.state.count + increment });
  };

  render() {
    return (
      <div>
        <h1>
          {this.props.children}
          <span className={this.getClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.handleIncrement(2)}
            className="btn btn-secondary btn-lg"
          >
            Increment
          </button>
        </h1>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    const zero = "Zero";
    return count === 0 ? zero : count;
  }
}

export default Counter;
