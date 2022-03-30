import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";

class ArtistCard extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-3">
          <Link to={"artist?" + this.props.title}>
            <div className="item">
              <img className="picture" src={this.props.img} />
              <p className="title">{this.props.title}</p>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default ArtistCard;
