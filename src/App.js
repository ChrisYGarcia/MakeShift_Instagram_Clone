import React, { Component } from "react";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import newImageGrid from "./components/newImageGrid";
//import MultiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div>
        <newImageGrid />
      </div>
    );
  }
}

export default App;
