import React, { Component } from "react";
import ImageGrid from "./components/ImageGrid";
import Navbar from "./components/Navbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Navbar />
          <ImageGrid />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
