import React, { Component } from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import GridListTile from "@material-ui/core/GridListTile";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import FlatButton from "material-ui/FlatButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SvgIcon from "@material-ui/core/SvgIcon";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import svgPath from "../media/svg";

console.log(svgPath);
class NewImageGrid extends Component {
  state = {
    photos: [],
    currentImg: "",
    open: false,
    description: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      const photos = res.data;
      this.setState({ photos });
    });
  }

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    let imageListContent;
    console.log(this.state.description);
    let imgArr = this.state.photos.map(photo => photo.url);
    let titleArr = this.state.photos.map(photo => photo.title);
    let arr2 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ];
    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];
    return (
      <div>
        <GridList cols={5} cellHeight={300}>
          <GridListTile key="Subheader" cols={5} style={{ height: "auto" }}>
            <ListSubheader component="div">Christopher Garcia</ListSubheader>
          </GridListTile>
          {arr2.map(tile => (
            <GridListTile key={tile.id}>
              <img src={imgArr[tile]} alt={titleArr[tile]} />
              <GridListTileBar
                title={titleArr[tile]}
                subtitle={
                  <span>
                    Description:
                    {this.state.description[tile]}
                  </span>
                }
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(imgArr[tile])}>
                    <SvgIcon>
                      <path fill="white" d={svgPath} />
                    </SvgIcon>
                  </IconButton>
                }
              />
              <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <img
                  src={this.state.currentImg}
                  alt=""
                  style={{ width: "100%" }}
                />
                <TextField
                  id="outlined-name"
                  label="Enter Description"
                  value={this.state.Description[tile]}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                />

                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Submit
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
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

export default NewImageGrid;
