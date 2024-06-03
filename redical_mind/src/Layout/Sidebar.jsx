import React from "react";
import { Drawer, List, ListItem, useMediaQuery } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ open, onClose, drawerWidth }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const sidebarRoute = [
    { name: "Root Cause Analysis", path: "/qms/sentiment-analysis" },
    // { name: "Home", path: "" },
    { name: "Executive Overview", path: "/qms/executive-overview" },
    { name: "FTE Required", path: "/FTE-required" },
    { name: "Call Volume", path: "/call-volume" },
    { name: "Average Hold Time", path: "/average-hold-Time" },
    { name: "Schedule Shrinkage", path: "/schedule-shrinkage" },
    { name: "Occupancy", path: "/occupancy" },
    { name: "Headcount", path: "/headcount" },
    { name: "Planning View", path: "/planning-view" },
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
            zIndex: 999,
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
              <img src="../../public/logo.svg" alt="icon" width={180} />
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
