import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#191919",
      white: "#FFFFFF",
      sidebar: "#191919",
      sidebarSecondary: "#299D91",
    },
  },
  card: {
    borderRadius: "10px",
    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  cardHeading: {
    fontSize: "15px",
    fontWeight: "600",
  },
});

export default theme;
