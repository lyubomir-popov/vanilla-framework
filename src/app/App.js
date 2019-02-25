import React, { Component } from "react";
import uuidv4 from "uuid/v4";

import GlobalNav from "./components/GlobalNav";
import Container from "./containers/Container";

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

  render = () => {
    const { strips } = this.state;
    return (
      <div className="App">
        <GlobalNav />
        <Container
          strips={strips}
          addStrip={this.addStrip}
          removeStrip={this.removeStrip}
        />
      </div>
    );
  };
}

export default App;
