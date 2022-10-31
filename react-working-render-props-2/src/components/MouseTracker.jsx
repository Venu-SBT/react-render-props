import React from "react";
import Cat from "./Cat";
import Dog from "./Dog";
import Mouse from "./Mouse";

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        {/* <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/> */}
        {/* <Mouse rendering={mouse => (
          <Dog mouse={mouse} />
        )}/> */}

        {/* <Mouse children={mouse => (
          <Dog mouse={mouse} />
        )}/> */}
        {/* Same as */}
        <Mouse>
          {(mouse) => <Dog mouse={mouse} />}          
        </Mouse>
      </div>
    );
  }
}

export default MouseTracker;