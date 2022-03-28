import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({ [this.props.busqueda]: e.target.value });
  };
  render() {
    return (
      <>
        <nav className="topNavBar">
          <Link to="/">
            <h1 className="logo">Find Rock</h1>
          </Link>
          <div className="searchContainer">
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                className="inputBusqueda"
                //value={this.props.busqueda} //Se guarda el value automatico en el estado para optimizar
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

export default NavBar;
