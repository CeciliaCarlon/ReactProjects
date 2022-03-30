import React from "react";
import { Link } from "react-router-dom";
import "./page-home.css";

class PageHome extends React.Component {
  state = {
    busqueda: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/search?" + this.state.busqueda);
  };
  onChange = (e) => {
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
                value={this.props.busqueda}
                type="search"
                placeholder="Busca artista"
                aria-label="Search"
                onChange={this.onChange}
              />
              <button type="submit" className="searchButton">
                GO
              </button>
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
