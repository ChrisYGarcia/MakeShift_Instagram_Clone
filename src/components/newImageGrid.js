import React, { Component } from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import GridListTile from "@material-ui/core/GridListTile";
//import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import FlatButton from "material-ui/FlatButton";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import SvgIcon from "@material-ui/core/SvgIcon";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
class NewImageGrid extends Component {
  state = {
    photos: [],
    currentImg: "",
    open: false,
    description: ""
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
        <GridList cols={5} cellHeight={250}>
          <GridListTile key="Subheader" cols={5} style={{ height: "auto" }}>
            <ListSubheader component="div">Christopher Garcia</ListSubheader>
          </GridListTile>
          {arr2.map(tile => (
            <GridListTile key={tile.id}>
              <img src={imgArr[tile]} alt={titleArr[tile]} />
              <GridListTileBar
                title={titleArr[tile]}
                subtitle={<span>Description:{this.state.description}</span>}
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(imgArr[tile])}>
                    <SvgIcon>
                      <path d="M 0.8125 0 C 0.4125 0 1.4802974e-16 0.4125 0 0.8125 L 0 23.1875 C 0 23.5875 0.4125 24 0.8125 24 L 23.1875 24 C 23.5875 24 24 23.5875 24 23.1875 L 24 0.8125 C 24 0.4125 23.5875 1.4802974e-16 23.1875 0 L 0.8125 0 z M 10 4 C 13.3 4 16 6.7 16 10 C 16 11.3 15.60625 12.5 14.90625 13.5 L 20.09375 18.6875 C 20.19375 18.7875 20.1875 19.1875 19.6875 19.6875 C 19.1875 20.1875 18.7875 20.19375 18.6875 20.09375 L 13.5 14.90625 C 12.5 15.60625 11.3 16 10 16 C 6.7 16 4 13.3 4 10 C 4 6.7 6.7 4 10 4 z M 10 6 C 7.790861 6 6 7.790861 6 10 C 6 12.209139 7.790861 14 10 14 C 12.209139 14 14 12.209139 14 10 C 14 7.790861 12.209139 6 10 6 z" />
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
                  value={this.state.Description}
                  onChange={this.handleChange}
                  margin="normal"
                  variant="outlined"
                />

                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.handleClose} color="primary">
                    Submit
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
