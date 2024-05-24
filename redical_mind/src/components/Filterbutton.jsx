import React from "react";
import theme from "../utils/theme";

const FilterButton = ({ name }) => {
  return (
    <div
      style={{
        border: `1px solid ${theme.palette.primary.sidebarSecondary}`,
        borderRadius: "20px",
        padding: "4px 10px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      {name}
    </div>
  );
};

export default FilterButton;
