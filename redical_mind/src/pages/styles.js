const styles = (theme) => {
  return {
    card: {
      padding: theme.spacing(1, 2),
      borderRadius: "10px",
      height: "100%",
    },
    cardText: {
      fontSize: "14px",
      fontWeight: "800",
      color: theme.palette.primary.sidebar,
    },
    overviewCard: {
      height: "100%",
      backgroundColor: "white",
    },
    headingContainer: {
      height: "7vh",
      backgroundColor: theme.palette.primary.sidebarSecondary,
      width: "100%",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      color: "white",
      padding: theme.spacing(2),
    },
    table: {
      border: "1px solid grey",
    },

    tabContainer: {
      display: "flex",
      gap: "5px",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },

    tab: {
      minWidth: "120px",
      height: "50px",
      padding: theme.spacing(1),
      border: "1px solid grey",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: "15px",
    },
  };
};

export default styles;
