import React, { Component } from "react";
import pose from "popmotion-pose";
import Flippable from "/src/components/Flippable";

class Implementation extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    if (this.node) {
      const { width, height } = window.getComputedStyle(this.node);
      this.poseConfig = {
        flip: {
          transition: { type: "spring", stiffness: 200, damping: 50 }
        },
        inline: {
          position: "relative",
          width,
          height,
          margin: 0
        },
        expanded: {
          position: "absolute",
          width: "100%",
          height: "100%",
          margin: 20
        }
      };
      this.pose = pose(this.node, this.poseConfig);
    }
  }

  toggle = () => this.setState({ expanded: !this.state.expanded });

  componentDidUpdate(prevProps, prevState) {
    this.pose.measure();
    const nextPose = prevState.expanded ? "inline" : "expanded";
    this.pose.set(nextPose);
    console.log(this.pose.get());
    this.node.style.setProperty("position", this.poseConfig[nextPose].position);

    this.pose.flip("", {});
  }

  render() {
    return (
      <Flippable
        innerRef={ref => {
          this.node = ref;
        }}
        onClick={this.toggle}
        pose={this.state.expanded ? "expanded" : "inline"}
      >
        Click me {this.state.expanded ? "expanded" : "inline"}
      </Flippable>
    );
  }
}

export default Implementation;
