import React, { useEffect, useState } from "react";
import FilterButton from "../components/Filterbutton";
import styles from "./styles";
import { Components } from "../utils/materialUI";
import theme from "../utils/theme";
import CallDetailsCard from "../components/CallDetailsCard";
import UserTable from "../Table/UserTable";
import { useNavigate, useLocation } from "react-router-dom";

const { withStyles, Grid, Paper, Card, Typography } = Components;

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

  const [selectedFilter, setSelectedFilter] = useState("Sentiment");

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location?.pathname === "/") {
      navigate("/qms/sentiment-analysis");
    }
  }, []);

  const handleFilter = (name) => {
    setSelectedFilter(name);
  };
  return (
    <Container direction="column" className={classes.mainContainer}>
      <Item sx={{ display: "flex", gap: "10px" }}>
        {filterArray?.map((item, index) => {
          return (
            <Item>
              <FilterButton
                name={item}
                selectedFilter={selectedFilter}
                handleFilter={handleFilter}
              />
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
          <Card className={classes.card}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment Today
            </Typography>
          </Card>
        </Item>
        <Item md={4} lg={4} xs={12}>
          <Card className={classes.card}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Week
            </Typography>
          </Card>
        </Item>
        <Item md={4} lg={4} xs={12}>
          <Card className={classes.card}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Month{" "}
            </Typography>
          </Card>
        </Item>
      </Container>
      <Container spacing={2} sx={{ mt: 1, height: "300px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.card}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Distribution Of Customer Sentiment{" "}
            </Typography>
          </Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.card}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Interactions Accepted Within SL VS Total Interactions Accepted{" "}
            </Typography>
          </Card>
        </Item>
      </Container>

      <Container sx={{ mt: 2 }}>
        <UserTable />
      </Container>
    </Container>
  );
};

export default withStyles(styles)(Home);
