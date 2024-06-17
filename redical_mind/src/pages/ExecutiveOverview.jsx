import React from "react";
import { Components } from "../utils/materialUI";
import styles from "./styles";
import ExecutiveContactCard from "../components/ExecutiveContactCard";
import theme from "../utils/theme";
import { ResponsivePie } from "@nivo/pie";

const { withStyles, Grid, Card, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const sentimateData = [
  {
    id: "Very Satisfied",
    label: "Very Satisfied ",
    value: 55,
    color: "#0A3260",
  },
  {
    id: "Neutral",
    label: "Neutral",
    value: 35,
    color: "#0F5FBA",
  },
  {
    id: "Very Unsatisfied",
    label: "Very Unsatisfied",
    value: 20,
    color: "#3D82CF",
  },
  {
    id: "Satisfied",
    label: "Satisfied",
    value: 5,
    color: "#5E98DA",
  },
  {
    id: "Satisfied",
    label: "Satisfied",
    value: 11,
    color: "#A5CFFF",
  },
];

const FirstResponseChannelData = [
  { name: "Urgent", value: 312, color: "#F44B3C", sla: 10, ticket: 54 },
  { name: "High", value: 232, color: "#FB8F54", sla: 65, ticket: 26 },
  { name: "Medium", value: 128, color: "#54BEEF", sla: 74, ticket: 13 },
  { name: "Low", value: 98, color: "#5ECAC5", sla: 90, ticket: 54 },
];
const FirstResponseData = [
  { name: "Network Outage", value: 10, sla: 10, ticket: 10 },
  { name: "Billing Issue", value: 65, sla: 65, ticket: 65 },
  { name: "Payment Issues", value: 74, sla: 74, ticket: 13 },
  { name: "Speed Problem", value: 52, sla: 52, ticket: 54 },
  { name: "Internet Problem", value: 42, sla: 42, ticket: 54 },
  { name: "Uncategorized", value: 72, sla: 72, ticket: 54 },
];

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
        <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
          Executive Contact Center Overview
        </Typography>
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
      <Container spacing={2} sx={{ mt: 0, height: "350px" }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card, p: 2 }}>
            <Typography sx={{ ...theme.cardHeading }}>
              First Response SLA% by Channel
            </Typography>
            <Item>
              <FirstResponseChannel data={FirstResponseChannelData} />
            </Item>
          </Card>
        </Item>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card, p: 2 }}>
            <Typography sx={{ ...theme.cardHeading }}>
              First response time by issue type and SLA%
            </Typography>
            <Item>
              <FirstResponse data={FirstResponseData} />
            </Item>
          </Card>
        </Item>
        {/* <Item md={6} lg={6} xs={12}>
         
        </Item> */}
      </Container>
      <Container spacing={2} sx={{ mt: 0 }}>
        <Item md={6} lg={6} xs={12}>
          <Card className={classes.overviewCard} sx={{ ...theme.card, p: 2 }}>
            <Typography sx={{ ...theme.cardHeading }}>
              Customer Satisfaction (CSAT){" "}
            </Typography>
            <Item>
              <SentimateTodayGraph data={sentimateData} />
            </Item>
          </Card>
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
    </Container>
  );
};

const SentimateTodayGraph = ({ data }) => {
  return (
    <Item sx={{ height: "250px", display: "flex" }}>
      <div style={{ width: "70%" }}>
        <ResponsivePie
          theme={{
            fontSize: 14,
            fontWeight: "600",
          }}
          enableArcLabels={false}
          arcLinkLabelsSkipAngle={11}
          arcLinkLabelsTextOffset={2}
          arcLinkLabelsTextColor="black"
          arcLinkLabelsOffset={-25}
          arcLinkLabelsDiagonalLength={30}
          arcLinkLabelsStraightLength={20}
          arcLinkLabelsThickness={0}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={1}
          valueFormat=" >-1.1%"
          enableArcLinkLabels={true}
          data={data}
          margin={{ top: 40, right: 45, bottom: 40, left: 45 }}
          innerRadius={0.7}
          padAngle={0}
          cornerRadius={1}
          activeOuterRadiusOffset={5}
          colors={{ datum: "data.color" }}
          // arcLinkLabels={false}
          tooltip={(point) => {
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

const FirstResponseChannel = ({ data }) => {
  return (
    <Item md={12} xs={12} lg={12} mt={1}>
      {data?.map((item) => {
        return (
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Item md={7} ld={7} xs={7}>
              <Typography sx={{ fontSize: "13px", mb: 0.5 }}>
                {item?.name}
              </Typography>
              <Item
                sx={{
                  backgroundColor: "#D9D9D9",
                  width: "100%",
                  position: "relative",
                  height: "30px",
                  zIndex: 1,
                  display: "flex",
                  borderRadius: "5px",

                  alignItems: "center",
                }}
              >
                <Item
                  p={0.2}
                  sx={{
                    width: `${+item?.sla}%`,
                    backgroundColor: item?.color,
                    border: "none",
                    position: "absolute",
                    height: "30px",
                    borderRadius: "5px",
                    zIndex: -1,
                  }}
                ></Item>
              </Item>
            </Item>
            <Item md={1.5} ld={1.5} xs={1.5} ml={3} mt={2}>
              <Typography
                sx={{ fontSize: "14px" }}
              >{`${item?.sla}%`}</Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                Met SLA
              </Typography>
            </Item>
            <Item md={1.5} ld={1.5} xs={1.5} ml={2} mt={2}>
              <Typography
                sx={{ fontSize: "14px" }}
              >{`${item?.value}`}</Typography>
            </Item>
            <Item md={2} ld={2} xs={2} mt={2}>
              <Typography sx={{ fontSize: "14px" }}>
                {`(${item?.ticket}%)`}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                Ticket
              </Typography>
            </Item>
          </Item>
        );
      })}
    </Item>
  );
};
const FirstResponse = ({ data }) => {
  return (
    <Item md={12} xs={12} lg={12} mt={1}>
      {data?.map((item) => {
        return (
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Item md={7} ld={7} xs={7}>
              <Typography sx={{ fontSize: "13px", mb: 0.5 }}>
                {item?.name}
              </Typography>
              <Item
                sx={{
                  backgroundColor: "#8EC3D1",
                  width: "100%",
                  position: "relative",
                  height: "20px",
                  zIndex: 1,
                  display: "flex",
                  borderRadius: "5px",

                  alignItems: "center",
                }}
              >
                <Item
                  p={0.2}
                  sx={{
                    width: `${+item?.sla}%`,
                    backgroundColor: "#1B59F8",
                    border: "none",
                    position: "absolute",
                    height: "20px",
                    borderRadius: "5px",
                    zIndex: -1,
                  }}
                ></Item>
              </Item>
            </Item>
            <Item md={1.5} ld={1.5} xs={1.5} ml={3} mt={2}>
              <Typography
                sx={{ fontSize: "14px" }}
              >{`${item?.sla}%`}</Typography>
            </Item>
            <Item md={1.5} ld={1.5} xs={1.5} ml={2} mt={2}>
              <Typography
                sx={{ fontSize: "14px" }}
              >{`${item?.value}`}</Typography>
            </Item>
            <Item md={2} ld={2} xs={2} mt={2}>
              <Typography sx={{ fontSize: "14px" }}>
                {`(${item?.ticket}%)`}
              </Typography>
            </Item>
          </Item>
        );
      })}
    </Item>
  );
};

export default withStyles(styles)(Overview);
