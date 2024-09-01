import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Fetch images in componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          photos: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  }

  // Use the required lifecycle methods here

  render() {
    // Display loading status here
    const { photos, loading, error } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <div className="App">
        {photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
