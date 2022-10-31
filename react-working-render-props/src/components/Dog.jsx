import React from "react";

class Dog extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/dog-follow.jpeg" style={{ position: 'absolute', height: "50px", width: "50px", left: mouse.x, top: mouse.y }} />
      );
    }
}

export default Dog;