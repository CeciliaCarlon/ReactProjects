import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: "",
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=fa0f6d50e3a6c20e775430014924475c&format=json"
    );
  }

  componentDidMount() {}

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <h1>{this.props.busqueda}</h1>
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artista, i) => {
              return (
                <ArtistCard
                  img={artista.image[2]["#text"]}
                  title={artista.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
