import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./components/search-bar.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageArtist from "./page-artist.js";
import Layout from "./components/layout.js";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/search" component={PageSearchResult}></Route>
          <Route exact path="/artist" component={PageArtist}></Route>
          <Route path="/" component={PageHome}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
