import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.intervalId = null; // To store the interval ID
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => ({
      curIndex: prevState.curIndex + 1,
      currentName: prevState.fullName.substring(0, prevState.curIndex + 1) // Update substring logic
    }));
  };

  componentDidUpdate(prevProps) {

    // Reset currentName and curIndex when showName is toggled off
    if (this.state.curIndex == this.state.fullName.length - 1 && !this.props.showName && prevProps.showName) {
      this.setState({ curIndex: 0, currentName: "" });
    }
    // Start the effect if showName is true and wasn't true before
    if (this.props.showName && !prevProps.showName) {
      this.intervalId = setInterval(this.typeWriterEffect, 500);
    }

    // Stop the effect if showName is false and was true before
    if (!this.props.showName && prevProps.showName) {
      clearInterval(this.intervalId);
    }


  }

  componentWillUnmount() {
    // Clear the interval if the component is unmounted
    clearInterval(this.intervalId);
    console.log("unmounted");

  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
