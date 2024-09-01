import React from "react";
import "./styles.css";

const MOODS = [
  "happy",
  "sad",
  "angry",
  "excited",
  "fearful",
  "disgusted",
  "surprised"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      prediction: ""
    };
  }

  handleClick() {
    const moodIndex = Math.floor(Math.random() * MOODS.length);
    this.setState(
      { prediction: MOODS[moodIndex], count: this.state.count + 1 },
      async () => {
        await this.setState({ count: this.state.count + 1 })
        console.log("this.state:", this.state)
      }
    );

  }

  render() {
    return (
      <div>
        <h1>Mood Predictor</h1>
        {this.state.prediction && (
          <p>
            Mood predictor has predicted that you mood will be
            <b> {this.state.prediction} </b>today.
          </p>

        )}

        <button onClick={this.handleClick.bind(this)}>Predict Mood</button>
      </div>
    );
  }
}

export default App;
