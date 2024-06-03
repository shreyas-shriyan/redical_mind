import React, { useEffect, useState } from "react";
import FilterButton from "../components/Filterbutton";
import styles from "./styles";
import { Components } from "../utils/materialUI";
import CallDetailsCard from "../components/CallDetailsCard";
import UserTable from "../Table/UserTable";
import { useNavigate, useLocation } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import theme from "../utils/theme";

const { withStyles, Grid, Paper, Card, Typography } = Components;

const sentimateData = [
  {
    id: "Neutral",
    label: "Neutral",
    value: 25,
    color: "#F68D2B",
  },
  {
    id: "Positive",
    label: "Positive",
    value: 40,
    color: "#009B83",
  },
  {
    id: "Negative",
    label: "Negative",
    value: 26,
    color: "#F02D14",
  },
];
const sentimateDataByWeek = [
  {
    id: "In Call",
    label: "In Call",
    value: 2,
    color: "#344BFD",
  },
  {
    id: "Ready",
    label: "Ready",
    value: 4,
    color: "#F4A79D",
  },
  {
    id: "On Pause",
    label: "On Pause",
    value: 15,
    color: "#F68D2B",
  },
  {
    id: "Dead Call",
    label: "Dead Call",
    value: 2,
    color: "#009B83",
  },
  {
    id: "Desposing",
    label: "Desposing",
    value: 2,
    color: "#FF5BAA",
  },
];
const sentimateDataByMonth = [
  {
    id: "In Call",
    label: "In Call",
    value: 12,
    color: "#344BFD",
  },
  {
    id: "Ready",
    label: "Ready",
    value: 8,
    color: "#F4A79D",
  },
  {
    id: "On Pause",
    label: "On Pause",
    value: 18,
    color: "#F68D2B",
  },
  {
    id: "Dead Call",
    label: "Dead Call",
    value: 8,
    color: "#009B83",
  },
  {
    id: "Desposing",
    label: "Desposing",
    value: 2,
    color: "#FF5BAA",
  },
];

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
    <Container md={12} xs={12} lg={12} className={classes.mainContainer}>
      <Item sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {filterArray?.map((item, index) => {
          return (
            <FilterButton
              name={item}
              selectedFilter={selectedFilter}
              handleFilter={handleFilter}
            />
          );
        })}
      </Item>
      <Item
        md={12}
        xs={12}
        lg={12}
        sx={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {CardsData?.map((item, index) => {
          return (
            <Item mt={3} md={3} lg={1.9} xs={5.8}>
              <CallDetailsCard data={item} />
            </Item>
          );
        })}
      </Item>
      <Item
        md={12}
        xs={12}
        lg={12}
        sx={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Item md={5.8} lg={3.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment Today
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateData} />
            </Item>
          </Card>
        </Item>
        <Item md={5.8} lg={3.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Week
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateDataByWeek} />
            </Item>
          </Card>
        </Item>
        <Item md={5.8} lg={3.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Month{" "}
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateDataByMonth} />
            </Item>
          </Card>
        </Item>
      </Item>
      <Item
        md={12}
        xs={12}
        lg={12}
        sx={{
          display: "flex",
          gap: "2px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          height: "300px",
        }}
      >
        <Item md={5.9} lg={5.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Distribution Of Customer Sentiment{" "}
            </Typography>
          </Card>
        </Item>
        <Item md={5.9} lg={5.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Interactions Accepted Within SL VS Total Interactions Accepted{" "}
            </Typography>
          </Card>
        </Item>
      </Item>

      <Item md={12} xs={12} lg={12} mt={2} sx={{ width: "360px" }}>
        <UserTable />
      </Item>
    </Container>
  );
};

const SentimateTodayGraph = ({ data }) => {
  return (
    <Item sx={{ height: "200px", display: "flex" }}>
      <div style={{ width: "70%" }}>
        <ResponsivePie
          theme={{
            fontSize: 14,
            fontWeight: "600",
          }}
          enableArcLabels={false}
          valueFormat=" >-1.1%"
          enableArcLinkLabels={false}
          data={data}
          margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
          innerRadius={0.5}
          padAngle={0}
          cornerRadius={1}
          activeOuterRadiusOffset={8}
          colors={{ datum: "data.color" }}
          arcLinkLabelsSkipAngle={5}
          // arcLinkLabels={false}
          arcLinkLabelsTextColor="black"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={5}
          arcLabelsTextColor="black"
          tooltip={(point) => {
            console.log("point", point);
            return (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "5px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: point?.datum?.color,
                  }}
                ></div>
                {point?.datum?.id}- {point?.datum?.value}
              </div>
            );
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                marginTop: "-10px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "10px",
                  backgroundColor: item?.color,
                }}
              ></div>
              <p
                style={{
                  fontSize: "13px",
                  marginLeft: "5px",
                  fontWeight: "500",
                }}
              >
                {`${item?.label}`}
                {/* {`${(item?.value * 100).toFixed(1)}% ${item?.label}`} */}
              </p>
            </div>
          );
        })}
      </div>
    </Item>
  );
};

export default withStyles(styles)(Home);
