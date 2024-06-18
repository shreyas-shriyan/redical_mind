import React from "react";
import { Components } from "../../utils/materialUI";
import data from "./ravi_english_bad.json";
import styles from "./styles";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";

const { withStyles, Grid, Avatar } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const ChatConversion = ({ classes }) => {
  return (
    <Container lg={12} xs={12} md={12}>
      <Item
        lg={12}
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Item
          xs={12}
          lg={2}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PhoneCallbackRoundedIcon
              fontSize="large"
              sx={{
                color: theme.palette.primary.sidebarSecondary,
              }}
            />
            <Item>
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                Call With Abhishek
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                Ravi Jain Answered 1:34 PM
              </Typography>
              {/* <Typography
                mt={0.5}
                sx={{ fontSize: "12px", textAlign: "center" }}
              >
                Today 1:34 PM
              </Typography> */}
            </Item>
          </Item>
        </Item>
      </Item>
      <Item className={classes.chatConatiner} mt={3}>
        {data?.conversation?.map((item, index) => {
          return (
            <Item lg={12} xs={12} md={12} sx={{ display: "flex" }}>
              <Item
                lg={5.5}
                xs={6}
                md={5.5}
                // mt={0.5}
                sx={{
                  ml: index % 2 === 1 && "auto",
                  height: "auto",
                }}
              >
                <Item className={classes.speakers}>
                  <Avatar
                    src={index % 2 === 1 && "../../public/image.png"}
                    sx={{
                      bgcolor: theme.palette.primary.sidebarSecondary,
                      width: 24,
                      height: 24,
                      fontSize: "10px",
                    }}
                  >
                    A
                  </Avatar>
                  <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                    {item?.speaker}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      ml: "auto",
                      mr: 1,
                    }}
                  >
                    {item?.timestamp}
                  </Typography>
                </Item>
                <Item
                  lg={12}
                  xs={12}
                  md={12}
                  mt={1}
                  p={1}
                  className={classes.ChatConversionBox}
                >
                  <Typography sx={{ fontSize: "15px" }}>
                    {item?.dialogue}
                  </Typography>
                </Item>
              </Item>
            </Item>
          );
        })}
      </Item>
    </Container>
  );
};

export default withStyles(styles)(ChatConversion);
