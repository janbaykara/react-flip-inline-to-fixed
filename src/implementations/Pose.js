import React, { Component } from "react";
import posed from "react-pose";
import Flippable from "/src/components/Flippable";

const Flipper = posed(Flippable)({
  expanded: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "90%",
    height: "90%",
    margin: 20,
    fip: true
  },
  inline: {
    position: "relative",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    margin: 0,
    flip: true
  }
});

class Implementation extends React.Component {
  state = { expanded: false };

  toggle = () => this.setState({ expanded: !this.state.expanded });

  render() {
    return (
      <Flipper
        onClick={this.toggle}
        pose={this.state.expanded ? "expanded" : "inline"}
      >
        Click me {this.state.expanded ? "expanded" : "inline"}
      </Flipper>
    );
  }
}

export default Implementation;
