import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SimilarArtist from "./components/similar-artist.js";
import "./page-artist.css";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
    loading: false,
    error: null,
    errorMensaje: "",
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };

  changeHandle = (e) => {
    this.setState({ busqueda: e.target.value });
  };

  componentDidUpdate(prevProp) {
    if (this.props.location !== prevProp.location) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let artist = this.props.history.location.search.substr(1);
    let url =
      "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" +
      artist +
      "&api_key=fa0f6d50e3a6c20e775430014924475c&format=json";
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
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6 artistContainer center">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                className="pictureArtist margins40"
              />
              <h3>{this.state.data.artist.name}</h3>
              <p className="artistDescription">
                {this.state.data.artist.bio.summary}
              </p>
            </div>
          </div>
          <SimilarArtist data={this.state.data.artist.similar.artist} />
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
