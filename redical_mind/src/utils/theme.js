import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1C1C",
      white: "#FFFFFF",
      sidebar: "#191919",
      sidebarSecondary: "#299D91",
    },
  },
  card: {
    borderRadius: "10px",
    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
});

export default theme;
