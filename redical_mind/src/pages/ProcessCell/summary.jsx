import React from "react";
import { Components } from "../../utils/materialUI";
import data from "./ravi_english_bad.json";
import styles from "./styles";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";

const { withStyles, Grid, Avatar } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Summary = ({ classes }) => {
  return (
    <Container lg={12} xs={12} md={12}>
      <Item>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Here is a summary of the key points from the transcript:
        </Typography>
        <ul>
          {data?.description?.call_summary?.map((item) => {
            return (
              <li key={item}>
                <Typography className={classes.list}>{item}</Typography>
              </li>
            );
          })}
        </ul>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(Summary);
