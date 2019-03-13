import React, { Component } from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SvgIcon from "@material-ui/core/SvgIcon";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import svgPath from "../media/svg";
import { Typography } from "@material-ui/core";

class ImageGrid extends Component {
  state = {
    photos: [],
    currentImg: "",
    currentTile: 0,
    open: false,
    descriptions: []
  };

  // Once ImageGrid is mounted, this method let local storage and/or the API update any information into state.
  componentDidMount() {
    localStorage.getItem("Descriptions") &&
      this.setState({
        descriptions: JSON.parse(localStorage.getItem("Descriptions"))
      });

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // This method opens the dialog box and updates the currentImg and currentTile states from the given params
  // This is important for updating descriptions
  handleOpen = (img, tile) => {
    this.setState({ open: true, currentImg: img, currentTile: tile });
  };

  // This method closes the dialog box
  handleClose = () => {
    this.setState({ open: false });
  };

  // This method takes in the number of the currentTile as well as the user input to update the specific element in the descriptions array within state
  handleChange = tile => e => {
    console.log(tile);
    let descriptions = [...this.state.descriptions]; // create the copy of state array
    descriptions[tile] = e.target.value; //new value
    this.setState({ descriptions }); // updating state
  };

  // Keeping the localStorage up to date
  componentWillUpdate() {
    localStorage.setItem(
      "Descriptions",
      JSON.stringify(this.state.descriptions)
    );
  }

  render() {
    // Testing if descriptions are updating
    console.log(this.state.descriptions);

    // imgArr holds the 'url' data from the photos json data
    let imgArr = this.state.photos.map(photo => photo.url);
    // titleArr holds the 'title' data from the photos json data
    let titleArr = this.state.photos.map(photo => photo.title);

    // This array is to control how many tiles are being outputted. At the moment, it is 25 elements for 25 image tiles
    // the numbers are useful in order to iterate through the imgArr/titleArr and get the specific url/title data we need
    // prettier-ignore
    let gridCount = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
    ];

    return (
      <div>
        <GridList cols={5} cellHeight={300}>
          {" "}
          {/* GridList of 5 columns */}
          <GridListTile key="Subheader" cols={5} style={{ height: "auto" }}>
            <ListSubheader
              component="div"
              style={{
                fontSize: 50,
                marginBottom: 100,
                marginLeft: -15
              }}
            >
              Christopher Garcia - Label Insight Front-End Challenge
            </ListSubheader>
            <Typography
              component="h5"
              variant="h5"
              gutterBottom
              style={{ marginBottom: 50 }}
            >
              Click on pencil icon to edit descriptions
            </Typography>
          </GridListTile>{" "}
          {/* Iterating through gridCount*/}
          {gridCount.map(tile => (
            <GridListTile key={tile.id}>
              <img src={imgArr[tile]} alt={titleArr[tile]} />
              <GridListTileBar
                style={{
                  height: "25%",
                  wordBreak: "break-all",
                  textAlign: "justify"
                }}
                title={titleArr[tile]}
                subtitle={
                  <span style={{ fontSize: 15 }}>
                    Description: {this.state.descriptions[tile]}
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(imgArr[tile], tile)}
                  >
                    <SvgIcon>
                      <path fill="white" d={svgPath} />
                    </SvgIcon>
                  </IconButton>
                }
              />
              <Dialog
                overlayStyle={{ backgroundColor: "transparent" }}
                style={{ width: "600px", height: "750px", marginLeft: "30%" }}
                modal={false}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <img
                  src={this.state.currentImg}
                  alt=""
                  style={{ width: "100%" }}
                />
                <TextField
                  id="standard-name"
                  label="Enter Description"
                  value={this.state.descriptions[this.state.currentTile]}
                  onChange={this.handleChange(this.state.currentTile)}
                  margin="normal"
                  variant="outlined"
                />

                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Submit
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default ImageGrid;
