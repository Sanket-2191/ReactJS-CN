import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleClearingInput = () => {
    // e.preventDefault();
    this.setState({
      text: ""
    });
  }

  // task = {
  //   text: this.state.text,
  //   id: this.props.newId
  // }

  render() {
    return (
      <div className="form" >
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        {/* Add onclick event on the button to add the todos */}
        <button onClick={() => {
          this.props.handleAdd(this.state.text)
          this.handleClearingInput();

        }}>Add</button>
      </div>
    );
  }
}
