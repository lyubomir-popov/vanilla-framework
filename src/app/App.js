import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import GlobalNav from "./components/GlobalNav";
import Container from "./containers/Container";

const moveItem = (origArr, fromIndex, toIndex) => {
  const arr = [...origArr];
  const el = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, el);
  return arr;
};

class App extends Component {
  state = {
    strips: []
  };

  addStrip = type => {
    const { strips } = this.state;
    const newStrip = {
      id: uuidv4(),
      type
    };
    this.setState({ strips: [...strips, newStrip] });
  };

  removeStrip = id => {
    const { strips } = this.state;
    this.setState({ strips: strips.filter(strip => strip.id !== id) });
  };

  moveStrip = (id, dir) => {
    const { strips } = this.state;
    const fromIndex = strips.findIndex(strip => strip.id === id);
    const toIndex = dir === "up" ? fromIndex - 1 : fromIndex + 1;

    if (toIndex >= 0 && toIndex <= strips.length - 1) {
      this.setState({ strips: moveItem(strips, fromIndex, toIndex) });
    }
  };

  render = () => {
    const { strips } = this.state;
    return (
      <div className="App">
        <GlobalNav />
        <Container
          strips={strips}
          addStrip={this.addStrip}
          removeStrip={this.removeStrip}
          moveStrip={this.moveStrip}
        />
      </div>
    );
  };
}

export default App;
