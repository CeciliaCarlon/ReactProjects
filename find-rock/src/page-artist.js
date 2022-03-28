import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SimilarArtist from "./components/similar-artist.js";
import "./page-artist.css";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6 artistContainer center">
              <img
                src="https://cdns-images.dzcdn.net/images/artist/cb971c5aa061d7c4127839d2e5a47a55/264x264.jpg"
                className="pictureArtist margins40"
              />
              <h3>Bombita Rodríguez</h3>
              <p className="artistDescription">
                Hijo de Evelyn Tacuara (en alusión al Movimiento Nacionalista
                Tacuara), vedette del nacionalismo católico, que le inculcó su
                amor por la música, y de Grunkel "Cacho" Abramov, más conocido
                como el payaso Barricada, "el más renombrado clown del
                trotskismo, quien le legó su pasión por las masas"​ Su verdadero
                nombre es Pío Abramov.​Hizo furor en los '70, canciones,
                películas y shows de TV. Y tuvo un rival: Cecilio (también
                interpretado por Capusotto), el cantante de la reacción ortodoxa
                (cuyo otro exponente musical fue el grupo Los López Reggae),
                ídolo de Tradición, Familia y Propiedad quien mediante sus
                canciones defendía el libre mercado, los valores católicos y la
                persecución de comunistas. Actualmente, Bombita vive exiliado en
                Cuba.
              </p>
            </div>
          </div>
          <SimilarArtist />
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
