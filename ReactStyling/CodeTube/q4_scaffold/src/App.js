import "./styles.css";
import "./styles.css";
import { Component } from "react";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import { courses } from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { bagItems: [] };
  }

  isCourseinBag = (id) => {
    console.log("isCourseinBag :", id);
    return Boolean(this.state.bagItems.find((c) => c[id] == id));
  };

  handleAddToBag = async (id) => {
    const course = courses.find((c) => c.id === id);

    await this.setState({ bagItems: [course, ...this.state.bagItems] });
    console.log("In app for add bag Items:", course);
    console.log("In app for this.state:", this.state.bagItems);

  };

  handleRemoveFromBag = async (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    await this.setState({ bagItems: filteredCourses });
    console.log("In app for bag Items:", this.setState.bagItems);

  };

  render() {
    return (
      <div className="App">
        <Navbar bagCount={this.state.bagItems.length} />
        <h3>CodeTube Catalog</h3>
        <div className="container">
          <List
            bagItems={this.state.bagItems}
            isCourseinBag={this.isCourseinBag}
            handleAdd={this.handleAddToBag}
            handleRemove={this.handleRemoveFromBag}
          />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
