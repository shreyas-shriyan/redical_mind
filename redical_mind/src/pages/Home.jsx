import React from "react";
import FilterButton from "../components/Filterbutton";
import styles from "./styles";
import { Components } from "../utils/materialUI";
import theme from "../utils/theme";
import CallDetailsCard from "../components/CallDetailsCard";
import UserTable from "../Table/UserTable";

const { withStyles, Grid, Paper, Card } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Home = ({ classes }) => {
  const filterArray = [
    "Summary",
    "Sentiment",
    "Categories",
    "Custom Entities",
    "Issues, Actions, Outcomes",
  ];
  const CardsData = [
    { name: "Total Calls Today", value: 13546 },
    { name: "Avg Handle Time", value: 603 },
    { name: "Interactions Answered", value: 10910 },
    { name: "Answered Within SL", value: 9239 },
    { name: "Service Level", value: "68%" },
    { name: "Abondoned Rate", value: "19%" },
  ];
  return (
    <Container direction="column" className={classes.mainContainer}>
      <Item sx={{ display: "flex", gap: "10px" }}>
        {filterArray?.map((item, index) => {
          return (
            <Item>
              <FilterButton name={item} />
            </Item>
          );
        })}
      </Item>
      <Item sx={{ display: "flex", gap: "10px", mt: 3 }}>
        {CardsData?.map((item, index) => {
          return (
            <Item>
              <CallDetailsCard data={item} />
            </Item>
          );
        })}
      </Item>
      <Container spacing={2} sx={{ mt: 0, height: "250px" }}>
        <Item md={4} lg={4} xs={12}>
          <Card sx={{ height: "100%", zIndex: 1 }}></Card>
        </Item>
        <Item md={4} lg={4} xs={12}>
          <Card sx={{ height: "100%", zIndex: 1 }}></Card>
        </Item>
        <Item md={4} lg={4} xs={12}>
          <Card sx={{ height: "100%", zIndex: 1 }}></Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 1, height: "250px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card sx={{ height: "100%", zIndex: 1 }}></Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card sx={{ height: "100%", zIndex: 1 }}></Card>
        </Item>
      </Container>

      <Container sx={{ mt: 2 }}>
        <UserTable />
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Home);
