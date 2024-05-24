import React from "react";
import { Drawer, List, ListItem, useMediaQuery } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ open, onClose, drawerWidth }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const sidebarRoute = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Summary", path: "/summary" },
    { name: "Root Cause Analysis", path: "/rootCauseAnalysis" },
    { name: "Sentiment Analysis", path: "/sentimentAnalysis" },
    { name: "FTE Required", path: "/FTERequired" },
    { name: "Call Volume", path: "/callVolume" },
    { name: "Average Hold Time", path: "/averageHoldTime" },
    { name: "Schedule Shrinkage", path: "/scheduleShrinkage" },
    { name: "Occupancy", path: "/occupancy" },
    { name: "Headcount", path: "/headcount" },
  ];

  const selectedObj = {
    fontSize: "13px",
    width: "170px",
    backgroundColor: theme.palette.primary.sidebarSecondary,
    padding: "8px",
    fontWeight: 600,
    borderRadius: "6px",
  };
  const unSelectedObj = {
    fontSize: "13px",
    width: "170px",
    padding: "8px",
    fontWeight: 600,
    borderRadius: "6px",
  };

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: theme.palette.primary.sidebar,
              color: theme.palette.primary.white,
            },
          }}
        >
          <List>
            <ListItem component={Link} to="/">
              <img src="../../public/logo.svg" alt="icon" />
            </ListItem>
            {sidebarRoute?.map((item, index) => {
              return (
                <ListItem
                  sx={{ marginTop: index === 0 && 3 }}
                  key={index}
                  button
                  component={Link}
                  to={item?.path}
                >
                  <div
                    style={
                      item?.path === location?.pathname
                        ? selectedObj
                        : unSelectedObj
                    }
                  >
                    {item?.name}
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: theme.palette.primary.sidebar,
              color: theme.palette.primary.white,
            },
          }}
        >
          <List>
            <ListItem component={Link} to="/">
              <img width={180} src="../../public/logo.svg" alt="icon" />
            </ListItem>
            {sidebarRoute?.map((item, index) => {
              return (
                <ListItem
                  sx={{ marginTop: index === 0 && 3 }}
                  key={index}
                  button
                  component={Link}
                  to={item?.path}
                >
                  <div
                    style={
                      item?.path === location?.pathname
                        ? selectedObj
                        : unSelectedObj
                    }
                  >
                    {item?.name}
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
