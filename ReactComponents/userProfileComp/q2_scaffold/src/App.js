import About from "./About";
import Skills from "./About";
import Hero from "./Hero";
import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
class App extends Component {
  render() {
    return (
      <>
        {/* render your component here  */}
        <Hero />
        <Skills />
        <About />

      </>

    )
  }
}
export default App