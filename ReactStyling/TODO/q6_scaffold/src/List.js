import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {/* Render the todo here from the props*/
          this.props.todos.map((todo, i) => (
            <Todo text={todo.text} pos={i} handleRemove={this.props.handleRemove} key={i} />
          ))
        }
      </div>
    );
  }
}
