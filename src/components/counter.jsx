import React, { Component } from "react";

class Conter extends Component {
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag 1", "tag 2", "tag 3", "tag 4"]
  // };

  render() {
    let clases = this.getBadge();
    console.log("prop", this.props);
    return (
      <React.Fragment>
        {/* <img src={this.state.imgURL} alt="" /> */}
        <div className="container">
          <div className="form-row">
            <div className="col-md-1" style={{ marginTop: 10 }}>
              <h4>{this.props.counter.id}</h4>
            </div>
            <div className="col-md-1">
              <span
                className={clases}
                style={{
                  margin: 50,
                  padding: 8,
                  fontSize: 15,
                  fontWeight: "bold",
                  height: 38,
                  paddingTop: 10
                }}
              >
                {this.formatCount()}
              </span>
            </div>
            <div className="col-md-2">
              <button
                style={{ marginTop: 9 }}
                // onClick={() => this.handleIncrement({ id: 1 })}
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-danger"
              >
                Increment
              </button>
            </div>
            <div className="7">
              <button
                style={{ marginTop: 9 }}
                className="btn btn-secondary"
                onClick={() => this.props.onDelete(this.props.counter.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* {this.handleIncrement} */}
        {/* {this.renderList()} */}
      </React.Fragment>
    );
  }

  getBadge() {
    let clases = "badge m-2 badge-";
    clases += this.props.counter.value === 0 ? "warning" : "primary";
    return clases;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderList() {
    if (this.state.tags.length === 0) {
      return <p>There are no Tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  // handleIncrement = id => {
  //   console.log(id.id);
  //   this.setState({ count: this.state.count + 1 });
  // };
}

export default Conter;
