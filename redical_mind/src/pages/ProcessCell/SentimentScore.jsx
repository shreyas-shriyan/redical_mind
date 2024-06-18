import React from "react";
import { Components } from "../../utils/materialUI";
import data from "./ravi_english_bad.json";
import styles from "./styles";
import { Typography } from "@mui/material";

const { withStyles, Grid, Avatar } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const SentimentScore = ({ classes }) => {
  return (
    <Container lg={12} xs={12} md={12}>
      <Item>
        <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>
          Sentiment Brief :
        </Typography>

        <Typography mt={1}>{data?.sentiment?.brief}</Typography>

        <Typography sx={{ fontSize: "15px", fontWeight: "600" }} mt={2}>
          Sentiment Scores :
        </Typography>
        <Item mt={1}>
          {Object?.keys(data?.sentiment?.score).map((key, index) => {
            return (
              <Typography
                className={classes.list}
              >{`${key} : ${data?.sentiment?.score[key]}`}</Typography>
            );
          })}
        </Item>

        <Typography sx={{ fontSize: "15px", fontWeight: "600" }} mt={2}>
          Bag Of Words :
        </Typography>
        <Item mt={1}>
          {Object?.keys(data?.sentiment?.bag_of_words).map((key, index) => {
            return (
              <Typography
                className={classes.list}
              >{`${key} : ${data?.sentiment?.bag_of_words[key]}`}</Typography>
            );
          })}
        </Item>

        <Typography sx={{ fontSize: "15px", fontWeight: "600" }} mt={2}>
          Sentiment Analysis :
        </Typography>

        <Typography mt={1}>{data?.sentiment?.analysis}</Typography>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(SentimentScore);
