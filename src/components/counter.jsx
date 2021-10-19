import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
  }

  disableDecrementButton() {
    return this.props.counter.value > 0 ? false : true;
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const zero = "Zero";
    return value === 0 ? zero : value;
  }

  render() {
    //console.log(this.props);
    const { onDecrement, onIncrement, onDelete, counter, children } =
      this.props;

    return (
      <div>
        <h1>
          {children}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            disabled={this.disableDecrementButton()}
            onClick={() => onDecrement(counter)}
            className="btn btn-danger btn-lg m-2"
          >
            -
          </button>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-success btn-lg"
          >
            Increment
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-lg m-2"
          >
            delete
          </button>
        </h1>
      </div>
    );
  }
}

export default Counter;
