import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (value, e) => {
    console.log(e);
    console.log(value);
    this.setState((state) => {
      return { isToggleOn: state.isToggleOn ? false : true };
    });
  };
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick("Test String", e)}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
export default ToggleButton;
