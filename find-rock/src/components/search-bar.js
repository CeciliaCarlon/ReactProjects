import React from "react";
import "./search-bar.css";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  handleChange = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <nav className="topNavBar">
          <Link to="/">
            <h1 className="logo">Find Rock</h1>
          </Link>
          <div className="searchContainer">
            <form className="form" onSubmit={this.props.handleSubmit}>
              <input
                className="inputBusqueda"
                value={this.props.busqueda} //Se guarda el value automatico en el estado para optimizar
                type="search"
                placeholder="Busca artista"
                aria-label="Search"
                onChange={this.props.onChange}
              />
              <button type="submit" className="searchButton">
                GO
              </button>
            </form>
          </div>
        </nav>
        <hr />
      </>
    );
  }
}

export default SearchBar;
