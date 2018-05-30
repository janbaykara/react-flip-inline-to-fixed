import React, { Component } from "react";
import FlipMove from "react-flip-move";
import Flippable from "/src/components/Flippable";

class Implementation extends React.Component {
  state = { expanded: false };

  toggle = () => this.setState({ expanded: !this.state.expanded });

  render() {
    return (
      <FlipMove>
        {this.state.expanded && <div />}
        <Flippable
          key="flipit"
          onClick={this.toggle}
          theme={this.state.expanded ? "expanded" : "inline"}
        >
          Click me {this.state.expanded ? "expanded" : "inline"}
        </Flippable>
      </FlipMove>
    );
  }
}

export default Implementation;
