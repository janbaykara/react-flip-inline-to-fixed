import React, { Component } from "react";
import { Spring } from "react-spring";
import Flippable from "/src/components/Flippable";

const styles = {
  expanded: {
    position: "fixed",
    width: "90%",
    height: "90%",
    margin: 20
  },
  inline: {
    position: "relative",
    margin: 0
  }
};

class Implementation extends React.Component {
  state = { expanded: false };

  toggle = () => this.setState({ expanded: !this.state.expanded });

  render() {
    return (
      <Spring to={this.state.expanded ? styles.expanded : styles.inline}>
        {computed => (
          <Flippable
            onClick={this.toggle}
            style={{
              ...computed
              // position: this.state.expanded ? "fixed" : "relative"
            }}
          >
            Click me {this.state.expanded ? "expanded" : "inline"}
          </Flippable>
        )}
      </Spring>
    );
  }
}

export default Implementation;
