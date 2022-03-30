import React from "react";
import ArtistCard from "./artist-card";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="marginTop40">Similar Artist</h5>
        <hr />
        <div className="row">
          {/* Uso slice para traer solo 4 resultados */}
          {this.props.data.slice(0, 4).map((artista, i) => {
            return (
              <div className="col-md-3">
                <ArtistCard
                  img={artista.image[2]["#text"]}
                  title={artista.name}
                  key={i}
                />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
