import React, { useState, useEffect } from "react";
import styles from "./styles";
import { StyledTableCell } from "./styledTableCell";
import columns from "./head";
import { Components } from "../../utils/materialUI";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";
import DummyData from "./dummyData";
import { useNavigate } from "react-router-dom";

// import { API_GET, API_HANDLE_ERROR } from "../../../../utils/api";
// import { useStateValue } from "../../../../utils/store";
// import { getDate } from "../../../../utils/moment";

const {
  withStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableCell,
  Card,
} = Components;

const CallAuditTable = ({ classes }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [totalRiskEvaluation, setTotalRiskEvaluation] = useState(
    DummyData.length
  );
  const [data, setData] = useState(DummyData);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (fileName) => {
    navigate(`/qms/process-calls/view?filename=${fileName}`);
  };

  return (
    <Card
      className={classes.root}
      sx={{ ...theme.card }}
      md={12}
      xs={12}
      lg={12}
    >
      <Typography
        sx={{
          textAlign: "left",
          backgroundColor: "#DADDE5",
          color: theme.palette.primary.sidebar,
          p: 1,
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      >
        Call Quality Audit Table
      </Typography>
      <TableContainer
        md={12}
        xs={12}
        lg={12}
        className={classes.container}
        aria-label="simple table"
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
            <TableRow>
              {columns &&
                columns.map((column, index) => (
                  <StyledTableCell
                    colSpan={1}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  {"No Records found"}
                </TableCell>
              </TableRow>
            )}
            {data &&
              data?.map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns &&
                      columns.map((column, index) => {
                        const value = row[column.id] ?? "--";

                        if (column.id === "fileName") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              <Typography
                                onClick={() => handleClick(row?.fileName)}
                                sx={{
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  color: theme.palette.primary.sidebarSecondary,
                                }}
                              >
                                {row?.fileName}
                              </Typography>
                            </StyledTableCell>
                          );
                        }

                        return (
                          <StyledTableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </StyledTableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={
          totalRiskEvaluation && totalRiskEvaluation ? totalRiskEvaluation : 0
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};
export default withStyles(styles)(CallAuditTable);
