import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: "Bread", value: 0 },
      { id: "Milk", value: 1 },
      { id: "Butter", value: 4 },
      { id: "Apple", value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("handle delete", counterId);
    const countersNew = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: countersNew });
  };

  handleIncrement = counter => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("called");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
