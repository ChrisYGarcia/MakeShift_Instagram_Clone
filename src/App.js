import React, { Component } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
//import MultiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div>
        <ImageGrid />
      </div>
    );
  }
}

export default App;
