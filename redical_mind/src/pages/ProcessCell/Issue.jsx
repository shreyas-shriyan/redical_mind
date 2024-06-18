import React from "react";
import { Components } from "../../utils/materialUI";
import data from "./ravi_english_bad.json";
import styles from "./styles";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";

const { withStyles, Grid, Avatar } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Issue = ({ classes }) => {
  return (
    <Container lg={12} xs={12} md={12}>
      <Item>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          Based on the transcript, here are a few issues I noticed in the call:
        </Typography>
        <ul>
          {data?.description?.issue?.map((item) => {
            return (
              <li key={item}>
                <Typography className={classes.list}>{item}</Typography>
              </li>
            );
          })}
        </ul>
      </Item>
      <Typography className={classes.list}>
        In summary, the key issues were the lack of cancellation/refund,
        confusion over food order, ineffective hold time, communication gap, and
        lack of a satisfactory resolution for the customer. The agent could have
        handled the frustrated customer better.
      </Typography>

      <Typography className={classes.list} mt={2.5}>
        <Typography>
          <b> Remarks : </b>
        </Typography>
        <Typography mt={1}>{data?.description?.remarks}</Typography>
      </Typography>
      <Typography mt={2.5}>
        <Typography>
          <b> Resolution : </b>
        </Typography>
        <Typography mt={1}> {data?.description?.resolution} </Typography>
      </Typography>
    </Container>
  );
};

export default withStyles(styles)(Issue);
