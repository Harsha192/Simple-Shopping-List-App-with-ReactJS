import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: "Bread", value: 0 },
  //     { id: "Milk", value: 1 },
  //     { id: "Butter", value: 4 },
  //     { id: "Apple", value: 0 }
  //   ]
  // };

  // handleDelete = counterId => {
  //   console.log("handle delete", counterId);
  //   const countersNew = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters: countersNew });
  // };

  // handleIncrement = counter => {
  //   console.log(counter);
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   console.log("called");
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <div className="container">
          <button
            onClick={this.props.onReset}
            type="button"
            className="btn btn-primary"
          >
            Reset
          </button>
        </div>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
