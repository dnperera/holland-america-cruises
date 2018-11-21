import React, { Component } from "react";
import NavBar from "./NavBar";
import Itineraries from "./Itineraries";
import "../styles/styles.scss";
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Itineraries />
      </React.Fragment>
    );
  }
}

export default App;
