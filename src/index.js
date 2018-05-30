import React from "react";
import { render } from "react-dom";
import FlipMove from "./implementations/FlipMove";
import Pose from "./implementations/Pose";
import ManualPose from "./implementations/ManualPose";
import Spring from "./implementations/Spring";

class App extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <div style={{ width: 100 }}>
          <h3>FlipMove</h3>
          <FlipMove />

          <h3>Pose 😣</h3>
          <Pose />

          <h3>Pose.flip() (works!)</h3>
          <ManualPose />

          <h3>Spring</h3>
          <Spring />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
