import React, { Component, useState } from "react";

class App extends Component {
  state = { resource: "posts" };

  handleState = newState => this.setState({ resource: newState });

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <div>
          <button
            className="ui violet button"
            onClick={() => this.handleState("posts")}
          >
            Posts
          </button>
          <button
            className="ui black button"
            onClick={() => this.handleState("todos")}
          >
            Todos
          </button>
        </div>
        <h2 className="ui header">
          {" "}{this.state.resource}
        </h2>
      </div>
    );
  }
}

export default App;
