import React, { useEffect, useState } from "react";
import FilterButton from "../components/Filterbutton";
import styles from "./styles";
import { Components } from "../utils/materialUI";
import CallDetailsCard from "../components/CallDetailsCard";
import UserTable from "../Table/UserTable";
import { useNavigate, useLocation } from "react-router-dom";
import { ResponsivePie } from "@nivo/pie";
import theme from "../utils/theme";
import ProcessCell from "./ProcessCell/ProcessCell";
const {
  withStyles,
  Grid,
  Paper,
  Card,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} = Components;

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
const sentimateDataByQuater = [
  {
    id: "In Call",
    label: "In Call",
    value: 48,
    color: "#344BFD",
  },
  {
    id: "Ready",
    label: "Ready",
    value: 85,
    color: "#F4A79D",
  },
  {
    id: "On Pause",
    label: "On Pause",
    value: 16,
    color: "#F68D2B",
  },
  {
    id: "Dead Call",
    label: "Dead Call",
    value: 52,
    color: "#009B83",
  },
  {
    id: "Desposing",
    label: "Desposing",
    value: 44,
    color: "#FF5BAA",
  },
];
const sentimateDataByYear = [
  {
    id: "In Call",
    label: "In Call",
    value: 682,
    color: "#344BFD",
  },
  {
    id: "Ready",
    label: "Ready",
    value: 856,
    color: "#F4A79D",
  },
  {
    id: "On Pause",
    label: "On Pause",
    value: 188,
    color: "#F68D2B",
  },
  {
    id: "Dead Call",
    label: "Dead Call",
    value: 912,
    color: "#009B83",
  },
  {
    id: "Desposing",
    label: "Desposing",
    value: 150,
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
    { name: "Total Calls Today", value: 0 },
    { name: "Avg Handle Time", value: 0 },
    { name: "Interactions Answered", value: 0 },
    { name: "Answered Within SL", value: 0 },
    { name: "Service Level", value: 0 },
    { name: "Abondoned Rate", value: 0 },
  ];

  const [selectedFilter, setSelectedFilter] = useState("Sentiment");
  const [selectedValue, setSelectedValue] = useState("Today");
  const [graphData, setGraphData] = useState(sentimateData);
  const [cardData, setCardData] = useState(CardsData);

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location?.pathname === "/") {
      navigate("/qms/executive-overview");
    }
  }, []);

  const handleFilter = (name) => {
    setSelectedFilter(name);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    const name = e.target.value;
    if (name === "Today") {
      setGraphData(sentimateData);
    } else if (name === "This Week") {
      setGraphData(sentimateDataByWeek);
    } else if (name === "This Month") {
      setGraphData(sentimateDataByMonth);
    } else if (name === "This Quarter") {
      setGraphData(sentimateDataByQuater);
    } else {
      setGraphData(sentimateDataByYear);
    }
  };

  const handleSubmit = () => {
    setCardData([
      { name: "Total Calls Today", value: 13546 },
      { name: "Avg Handle Time", value: 603 },
      { name: "Interactions Answered", value: 10910 },
      { name: "Answered Within SL", value: 9239 },
      { name: "Service Level", value: "68%" },
      { name: "Abondoned Rate", value: "19%" },
    ]);
  };

  return (
    <Container md={12} xs={12} lg={12} className={classes.mainContainer}>
      <Item
        md={12}
        xs={12}
        lg={12}
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <Item
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
            ml: "auto",
          }}
        >
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
        <Item>
          <FormControl sx={{ width: "auto" }} size="small">
            <InputLabel id="demo-simple-select-label">Span</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              MenuProps={{
                sx: {
                  "&& .Mui-selected": {
                    color: "white",
                    background: theme.palette.primary.sidebarSecondary,
                  },
                },
              }}
              sx={{
                "& [aria-expanded=true]": {
                  background: "#EBF4FF",
                },
              }}
              value={selectedValue}
              label="Span"
              onChange={handleChange}
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="This Week">This Week</MenuItem>
              <MenuItem value="This Month">This Month</MenuItem>
              <MenuItem value="This Quarter">This Quarter</MenuItem>
              <MenuItem value="This Year">This Year</MenuItem>
            </Select>
          </FormControl>
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
        }}
      >
        {cardData?.map((item, index) => {
          return (
            <Item mt={3} md={3} lg={1.9} xs={5.8}>
              <CallDetailsCard data={item} />
            </Item>
          );
        })}
      </Item>
      <Item xs={12} lg={12} md={12} mt={2}>
        <ProcessCell handleSubmit={handleSubmit} />
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
              <SentimateTodayGraph data={graphData} />
            </Item>
          </Card>
        </Item>
        <Item md={5.8} lg={3.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            {/* <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Week
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateDataByWeek} />
            </Item> */}
          </Card>
        </Item>
        <Item md={5.8} lg={3.9} xs={12} mt={2}>
          <Card className={classes.card} sx={{ ...theme.card }}>
            {/* <Typography
              className={classes.cardText}
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sentiment This Month{" "}
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateDataByMonth} />
            </Item> */}
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
        <UserTable status={true} />
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
