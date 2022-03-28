import React from "react";
import "./artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-3">
          <div className="item">
            <img className="picture" src={this.props.img} />
            <p className="title">{this.props.title}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ArtistCard;
