import React from "react";
import NavBar from "./nav-bar";

class SearchBar extends React.Component {
  /*
  handleChange = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
    console.log("Buscando al artista");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.busqueda);
  };*/
  render() {
    //const MyCSS = lazy(() => import(this.props.class));
    return (
      <>
        <NavBar busqueda={this.props.busqueda} onChange={this.props.onChange} />
        {/*
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Find Rock</a>
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input
                className="form-control me-2"
                value={this.props.busqueda} //Se guarda el value automatico en el estado para optimizar
                type="search"
                placeholder="Busca artista"
                aria-label="Search"
                onChange={this.props.onChange}
              />
            </form>
          </div>
        </nav>
    */}
      </>
    );
  }
}

export default SearchBar;
