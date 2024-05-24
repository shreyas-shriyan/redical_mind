const styles = (theme) => {
  return {
    root: {
      width: "100%",
      overflow: "auto",
    },
    container: {
      maxHeight: 500,
      overflow: "auto",
    },
    tableHeader: {},
    actionBtn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "& a": {
        textDecoration: "none",
        color: theme.palette.common.white,
      },
    },

    boldFont: {
      fontWeight: "bold",
    },
    heading: {
      fontSize: "16px",
      //   color: theme.palette.primary.textTableColor,
      fontWeight: "500",
      padding: theme.spacing(2, 1),
    },
  };
};

export default styles;
