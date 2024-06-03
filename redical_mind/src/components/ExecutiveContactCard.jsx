import React from "react";
import { Components } from "../utils/materialUI";
import styles from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import theme from "../utils/theme";
const { withStyles, Grid, Paper, Card, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const ExecutiveContactCard = ({ classes, data, dataIndex }) => {
  return (
    <Card
      md={3}
      xs={12}
      lg={3}
      className={classes.executiveCardContainer}
      sx={{ ...theme.card }}
    >
      <Item className={classes.headingContainer}>
        <Typography>{data?.name}</Typography>
      </Item>
      <Container p={1.5}>
        <Item spacing={2} className={classes.progressContainer}>
          {[1, 2, 3, 4]?.map((item, index) => {
            return (
              <Item
                sx={{
                  backgroundColor:
                    dataIndex === index ? data?.colorDark : "#D9D9D9",
                }}
                className={classes.progress}
              ></Item>
            );
          })}
        </Item>

        <Item className={classes.volumeContainer} mt={2}>
          <VolumeContainer data={data} name="Volume" />
        </Item>
        <Item className={classes.volumeContainer} mt={2}>
          <VolumeContainer data={data} name="Service Level" />
        </Item>

        <Item mt={2} md={12} xs={12} lg={12}>
          <Typography
            sx={{
              fontWeight: "600",
              color: theme.palette.primary.sidebar,
            }}
          >
            Top 5 Drivers
          </Typography>
          {data?.topDriver?.map((item) => {
            return (
              <Item
                sx={{
                  backgroundColor: "#D9D9D9",
                  width: "100%",
                  position: "relative",
                  height: "25px",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
                mt={1.5}
              >
                <Item
                  p={0.2}
                  sx={{
                    width: `${+item?.value}%`,
                    backgroundColor: data?.colorLight,
                    border: "none",
                    position: "absolute",
                    height: "25px",
                    zIndex: -1,
                    borderRadius: `2px solid ${data?.colorDark}`,
                  }}
                ></Item>
                <Typography
                  sx={{
                    fontSize: "13.5px",
                    zIndex: 999,
                    overflowWrap: "normal",
                    ml: 1,
                    fontWeight: "500",
                  }}
                >
                  {`${item?.name} : ${item?.value}% `}
                </Typography>
              </Item>
            );
          })}
        </Item>
      </Container>
    </Card>
  );
};

const VolumeContainer = ({ data, name }) => {
  return (
    <Item sx={{ display: "flex" }} p={1}>
      <Item sx={{ width: "70%" }}>
        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            color: theme.palette.primary.sidebar,
          }}
        >
          {name === "Volume" ? data?.volume : `${data?.service}%`}
        </Typography>
        <Item sx={{ display: "flex", alignItems: "center" }}>
          {name === "Volume" ? (
            <KeyboardArrowUpIcon fontSize="11" color="black" />
          ) : (
            <KeyboardArrowDownIcon fontSize="11" color="black" />
          )}
          <Typography sx={{ fontSize: "13px", color: "#686868" }}>
            {name === "Volume" ? data?.volumeGraphMom : data?.serviceGraphMom}%
            MOM
          </Typography>
        </Item>
      </Item>
      <Item>
        <img
          width={72}
          src={`../../public/ExcativeOverview/${
            name === "Volume" ? data?.name : `${data?.name}Graph`
          }.svg`}
          alt="icon"
        />
      </Item>
    </Item>
  );
};

export default withStyles(styles)(ExecutiveContactCard);
