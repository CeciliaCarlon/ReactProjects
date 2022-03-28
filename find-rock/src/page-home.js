import React from "react";
import { Link } from "react-router-dom";
import "./page-home.css";

class PageHome extends React.Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navBar">
          <Link to="/">
            <h1 className="logo">Find Rock</h1>
          </Link>
          <div className="searchDiv">
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                className="inputBusqueda"
                //value={this.props.busqueda} //Se guarda el value automatico en el estado para optimizar
                type="search"
                placeholder="Busca artista"
                aria-label="Search"
                onChange={this.props.onChange}
              />
              <Link to="search">
                <button type="submit" className="searchButton">
                  GO
                </button>
              </Link>
            </form>
          </div>
        </nav>

        {
          //<NavBar onChange={this.changeHandle} busqueda={this.state.busqueda} />
        }
      </React.Fragment>
    );
  }
}

export default PageHome;
