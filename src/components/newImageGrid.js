import React, { Component } from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { GridTile } from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class newImageGrid extends Component {
  state = {
    photos: [],
    currentImg: "",
    open: false
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

  render() {
    let imageListContent;

    let imgArr = this.state.photos.map(photo => photo.url);
    let titleArr = this.state.photos.map(photo => photo.title);
    let arr2 = [
      0,
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

    imageListContent = (
      <GridList cols={5}>
        {arr2.map(img => (
          <GridTile
            title={titleArr[img]}
            actionIcon={
              <IconButton onClick={() => this.handleOpen(imgArr[img])}>
                <Icon color="white" />
              </IconButton>
            }
          >
            <img src={imgArr[img]} alt="" />
          </GridTile>
        ))}
      </GridList>
    );
    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg} alt="" style={{ width: "100%" }} />
        </Dialog>
      </div>
    );
  }
}

export default newImageGrid;
