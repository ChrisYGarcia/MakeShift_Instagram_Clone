import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Modal } from "@material-ui/core";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  },
  card: {
    display: "inline-block",
    width: "100%"
  },
  dialog: {
    borderBottom: "none",
    borderTop: "none",
    boxSizing: "border-box",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 16
  }
};

/* const styles1 = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
} */

class ImageGrid extends Component {
  state = {
    photos: [],
    open: false,
    currentImg: ""
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
    //  const { classes } = this.props;
    const cards = [
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
    //  let objParsed = JSON.parse(this.state.photos[0]);
    let arr = this.state.photos.map(photo => photo.url);
    console.log(arr);
    const actions = [
      <Button label="Close" primary={true} onClick={this.handleClose} />
    ];
    return (
      <Grid container spacing={40}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={4} lg={3}>
            <Card style={styles.card}>
              <CardMedia
                image={arr[card]}
                title="Image title"
                style={styles.media}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => this.handleOpen(arr[card])}
                  size="small"
                  color="primary"
                >
                  View
                </Button>
                <div>
                  <Dialog
                    style={styles.dialog}
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                    <img
                      src={this.state.currentImg}
                      alt=""
                      // style={{ width: "100%" }}
                    />
                  </Dialog>
                </div>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

// We need an intermediary variable for handling the recursive nesting.

export default ImageGrid;
