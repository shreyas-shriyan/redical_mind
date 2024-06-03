const styles = (theme) => {
  return {
    executiveCardContainer: {
      height: "70vh",
      // width: "100%",
      // minWidth: "300px",
      backgroundColor: "white",
      boxShadow:
        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
    },
    headingContainer: {
      height: "5vh",
      backgroundColor: "#0F524B",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    progressContainer: {
      display: "flex",
      gap: "8px",
    },
    progress: {
      width: "65px",
      height: "3.5px",
      borderRadius: "10px",
      backgroundColor: "green",
    },
    volumeContainer: {
      width: "100%",
      border: "1px solid #D9D9D9",
      height: "90px",
    },
  };
};

export default styles;
