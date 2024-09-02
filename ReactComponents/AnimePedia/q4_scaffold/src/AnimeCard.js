import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    return <div className="anime-card" key={this.props.index}>
      <img src={this.props.anime.image} alt={this.props.anime.name} />
      <p>{this.props.anime.name}</p>
    </div>;
  }
}

export default AnimeCard;
// {
//   name: "Full Metal Alchemist",
//   image:
//     "https://image.tmdb.org/t/p/original/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg"
// }