import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";
import validator from 'validator'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: ""
    };
  }
  setImageUrl = (e) => {//event handler to set the url of the image
    this.setState({ imageUrl: e.target.value });

  };
  // Function to add image to local storage
  addImageToLS = () => {

    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  onAddImage = (e) => {//function to add a new image 
    // localStorage.removeItem("images")
    e.preventDefault();
    const imageUrl = this.state.imageUrl;
    const isValidImageUrl = validator.isURL(imageUrl, { protocols: ['http', 'https'], require_tld: true });
    if (isValidImageUrl && !this.state.images.includes(this.state.imageUrl)) {
      this.addImageToLS();
      this.setState((prevState) => {
        return {
          images: [...prevState.images, this.state.imageUrl],
          imageUrl: ""
        };
      });
    } else {
      this.setState({ imageUrl: "" });
    }
  };

  // Use appropriate lifecycle method to get images at the time of mounting
  componentDidMount() {
    const images = this.getImagesFromLS();
    this.setState({
      images: [...images],
      imageUrl: ""
    });
  }



  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            onChange={this.setImageUrl}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={this.state.images} />
      </>
    );
  }
}
