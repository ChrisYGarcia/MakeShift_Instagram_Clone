import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30"
  },
  card: {
    display: "inline-block",
    width: "100%"
  }
};

class ImageGrid extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      const photos = res.data;
      this.setState({ photos });
  })
  }
  



  render() {
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
    return (
      <Grid container spacing={40}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={4} lg={3}>
            <Card style = {styles.card}>
              <CardMedia
                image={arr[card]}  // eslint-disable-line max-len
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
                <Button size="small" color="primary">
                  View
                </Button>
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

export default ImageGrid;
