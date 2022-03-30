import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    //Se usa substr() para eliminar un caracter
    let search = this.props.history.location.search.substr(1);
    this.setState({
      busqueda: search,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/search?" + this.state.busqueda);
  };
  changeHandle = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  componentWillReceiveProps(e) {
    this.props.history.push("/search?" + this.state.busqueda);
  }
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
