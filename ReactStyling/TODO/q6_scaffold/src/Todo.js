import { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div className="todo" key={this.props.pos}>
        <p>{this.props.text}</p>


        <button onClick={() => this.props.handleRemove(this.props.text)}>x</button>
      </div>
    );
  }
}
