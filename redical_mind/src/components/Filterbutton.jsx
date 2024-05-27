import React from "react";
import theme from "../utils/theme";

const FilterButton = ({ name, handleFilter, selectedFilter }) => {
  return (
    <div
      onClick={() => handleFilter(name)}
      style={{
        border: `1px solid ${theme.palette.primary.sidebarSecondary}`,
        borderRadius: "10px",
        padding: "4px 10px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        backgroundColor:
          name === selectedFilter &&
          `${theme.palette.primary.sidebarSecondary}`,
        color: name === selectedFilter && `${theme.palette.primary.white}`,
      }}
    >
      {name}
    </div>
  );
};

export default FilterButton;
