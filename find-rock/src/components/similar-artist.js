import React from "react";
import ArtistCard from "./artist-card";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="marginTop40">Similar Artist</h5>
        <hr />
        <div className="row">
          <div className="col-md-3">
            <ArtistCard
              img="https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/500x500.jpg"
              title="Artista"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/500x500.jpg"
              title="Artista"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/500x500.jpg"
              title="Artista"
            />
          </div>
          <div className="col-md-3">
            <ArtistCard
              img="https://cdns-images.dzcdn.net/images/cover/8a2b95cda407d004d829831d20e2e20b/500x500.jpg"
              title="Artista"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
