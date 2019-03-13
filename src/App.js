import React, { Component } from "react";
import "./App.css";
//import NewImageGrid from "./components/ImageGrid";
import NewImageGrid from "./components/NewImageGrid";
import MultiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div>
        <NewImageGrid />
      </div>
    );
  }
}

export default App;
