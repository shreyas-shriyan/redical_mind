import { Components } from "../../utils/materialUI";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const { TableCell, TableRow } = Components;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: "0.1px ridge lightgrey",
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
  [`&.${tableCellClasses.body}`]: {
    border: "0.1px ridge lightgrey",
    backgroundColor: "white",
    color: "black",
    fontSize: 13,
    padding: theme.spacing(0.5),
    // fontWeight: theme.palette.font.fontWeight,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "red",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 5,
  },
}));

export { StyledTableCell, StyledTableRow };
