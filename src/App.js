import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";
import CountersService from "./services/countersHttpService";

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

  retrieveCounters = () => {
    CountersService.getAll()
      .then((response) => {
        this.setState({
          counters: response.data,
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDelete = (counterId) => {
    CountersService.delete(counterId)
      .then((response) => {
        const counters = [...this.state.counters];
        console.log(counters);
        console.log(response.data);
        const deletedCounter = counters.find((c) => c.id === response.data.id);
        const index = counters.indexOf(deletedCounter);
        console.log(index);
        counters.splice(index, 1);
        this.setState({ counters: counters });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDeleteAll = () => {
    CountersService.deleteAll()
      .then((response) => {
        this.setState({
          counters: [],
        });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleDecrement = (counter) => {
    CountersService.decrement(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...response.data };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleIncrement = (counter) => {
    CountersService.increment(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...response.data };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleReset = () => {
    CountersService.resetAll()
      .then((response) => {
        this.setState({ counters: response.data });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleAddCounter = () => {
    CountersService.add()
      .then((response) => {
        const counters = [...this.state.counters];
        counters.push(response.data);
        this.setState({ counters: counters });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleLike = (counter) => {
    CountersService.like(counter)
      .then((response) => {
        console.log("response: ", response.data);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...response.data };
        this.setState({ counters: counters });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { counters } = this.state;

    return (
      <React.Fragment>
        <Navbar
          totalCounters={counters.filter((c) => c.value > 0).length}
          totalLikes={counters.filter((c) => c.liked === true).length}
        />
        <main className="container">
          <Counters
            counters={counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onAddCounter={this.handleAddCounter}
            onDeleteAll={this.handleDeleteAll}
            onLike={this.handleLike}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
