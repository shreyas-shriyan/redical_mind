import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import theme from "../utils/theme";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import LogoutIcon from "@mui/icons-material/Logout";

const Navbar = ({ onMenuClick, drawerWidth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("authToken");
    // navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        // zIndex: (theme) => theme.zIndex.drawer - 1,
        zIndex: 900,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: theme.palette.primary.white,
        // boxShadow: "none",
        boxShadow: "rgba(0, 0, 0, 0.24) 2px 1px 5px",
        color: theme.palette.primary.sidebar,
      }}
    >
      <Toolbar>
        <IconButton
          //   color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            display: { sm: "none" },
            color: theme.palette.primary.sidebar,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1, ml: "15vw", mr: 3 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search"
            sx={{
              width: "35vw",
              "& .MuiOutlinedInput-root": {
                color: "#000",
                backgroundColor: "#EBF4FF",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "none",
                  borderWidth: "1px solid #EBF4FF",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#2e2e2e",
                fontWeight: "bold",
              },
            }}
            InputProps={{
              style: {
                borderRadius: "25px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Typography>
        <Stack
          direction="row"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            Hi, Jayesh
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="../../public/image.png"
            sx={{ width: 35, height: 35 }}
          />
        </Stack>

        <Button sx={{ ml: 2 }} color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
