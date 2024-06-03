import React from "react";
import { Components } from "../utils/materialUI";
import styles from "./styles";
import ExecutiveContactCard from "../components/ExecutiveContactCard";
import theme from "../utils/theme";

const { withStyles, Grid, Card, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Overview = ({ classes }) => {
  const cardData = [
    {
      name: "Calls",
      volume: "26,666",
      volumeGraphMom: "7.68",
      service: "78.3",
      serviceGraphMom: "3.71",
      colorDark: "#4D2AB2",
      colorLight: "#7394F3",
      topDriver: [
        { name: "Account Question", value: "28.8" },
        { name: "Open Account", value: "27.6" },
        { name: "Close Account", value: "15.2" },
        { name: "General Complaint", value: "55.3" },
        { name: "Mobile App  Question", value: "9.8" },
      ],
    },
    {
      name: "Chats",
      volume: "8,088",
      volumeGraphMom: "7.95",
      service: "85.6",
      serviceGraphMom: "4.71",
      colorDark: "#5CC09F",
      colorLight: "#80F5E9",
      topDriver: [
        { name: "Open Account", value: "24.6" },
        { name: "Mobile App  Question", value: "10.8" },
        { name: "Account Question", value: "22.8" },
        { name: "Close Account", value: "15.2" },
        { name: "General Complaint", value: "17.3" },
      ],
    },
    {
      name: "Emails",
      volume: "20,184",
      volumeGraphMom: "9.85",
      service: "75.6",
      serviceGraphMom: "2.82",
      colorDark: "#61C2D9",
      colorLight: "#8DDAF7",
      topDriver: [
        { name: "Close Account", value: "44.2" },
        { name: "Open Account", value: "28.6" },
        { name: "General Complaint", value: "72.3" },
        { name: "Mobile App  Question", value: "6.8" },
        { name: "Account Question", value: "5.8" },
      ],
    },
    {
      name: "Escalation",
      volume: "1,063",
      volumeGraphMom: "4.98",
      service: "30.3",
      serviceGraphMom: "2.93",
      colorDark: "#ED7470",
      colorLight: "#F9C8B8",
      topDriver: [
        { name: "Account Question", value: "14.8" },
        { name: "Close Account", value: "16.2" },
        { name: "General Complaint", value: "14.3" },
        { name: "Open Account", value: "28.6" },
        { name: "Mobile App  Question", value: "9.8" },
      ],
    },
  ];
  return (
    <Container md={12} xs={12} lg={12} className={classes.mainContainer}>
      <Item sx={{ display: "flex", gap: "10px" }}>
        <Typography>Executive Contact Center Overview</Typography>
      </Item>
      <Item
        spacing={2}
        md={12}
        xs={12}
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {cardData?.map((item, index) => {
          return (
            <Item md={5.85} xs={12} lg={2.85} mt={2}>
              <ExecutiveContactCard dataIndex={index} data={item} />
            </Item>
          );
        })}
      </Item>
      <Container spacing={2} sx={{ mt: 0, height: "250px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 0, height: "250px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 0, height: "250px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 0, height: "250px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 0, height: "320px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 0, height: "320px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card }}></Card>
        </Item>
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Overview);
