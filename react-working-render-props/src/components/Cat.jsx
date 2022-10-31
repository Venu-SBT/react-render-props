import React from "react";


class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/cat-follow.png" style={{ position: 'absolute', height: "50px", width: "50px", left: mouse.x, top: mouse.y }} />
      );
    }
}

export default Cat;