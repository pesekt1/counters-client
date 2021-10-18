import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>
          {this.props.children}
          <span className={this.getClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-lg"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-lg m-2"
          >
            delete
          </button>
        </h1>
      </div>
    );
  }

  getClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const zero = "Zero";
    return value === 0 ? zero : value;
  }
}

export default Counter;
