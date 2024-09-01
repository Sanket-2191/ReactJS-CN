import { Component } from "react";

class Person extends Component {
  // Lifecycle method to show alert on removal
  componentWillUnmount() {
    const { email } = this.props.person;
    alert(`${email} has been removed.`);
    console.log("unmounted");

  }

  render() {
    const { img, email, id } = this.props.person;
    const { removePerson } = this.props;
    return (
      <div className="person">
        <button onClick={() => removePerson(id)}>X</button>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
