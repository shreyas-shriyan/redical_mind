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
  };
};

export default styles;
