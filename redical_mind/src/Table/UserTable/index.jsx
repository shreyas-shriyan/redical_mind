import React, { useState, useEffect } from "react";
import styles from "./styles";
import { StyledTableCell } from "./styledTableCell";
import columns from "./head";
import { Components } from "../../utils/materialUI";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";
import DummyData from "./dummyData";
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

const headData = [
  {
    id: "srNo",
    label: "Sr.No",
    minWidth: 50,
    width: 50,
    maxWidth: 50,
    align: "center",
  },
  {
    id: "audioFile",
    label: "Audio File (s)",
    minWidth: 100,
    width: 100,
    maxWidth: 100,
    align: "center",
  },
  {
    id: "agent",
    label: "Agent",
    minWidth: 200,
    width: 200,
    maxWidth: 200,
    align: "center",
  },
  {
    id: "customer",
    label: "Customer",
    minWidth: 200,
    width: 200,
    maxWidth: 200,
    align: "center",
  },
];

const RiskEvaluationTable = ({ classes }) => {
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

  //   const getBudgetEvaluation = () => {
  //     const resultCategory = category === "All" ? "" : `category=${category}`;
  //     const resultLocation = location === "All" ? "" : `city=${location}`;
  //     API_GET(
  //       `reports/getRiskEvaluation?limit=${rowsPerPage}&skip=${
  //         page * rowsPerPage
  //       }&fromDate=${selectedFromDate}&toDate=${selectedToDate}&${resultCategory}&${resultLocation}`
  //     )
  //       .then((res) => {
  //         setTotalRiskEvaluation(res?.count);
  //         getRiskData(res);
  //         setData(res?.data);
  //       })
  //       .catch((err) => {
  //         API_HANDLE_ERROR(err, dispatch);
  //       });
  //   };

  //   useEffect(() => {
  //     getBudgetEvaluation();
  //   }, [
  //     selectedFromDate,
  //     selectedToDate,
  //     category,
  //     dispatch,
  //     page,
  //     rowsPerPage,
  //     location,
  //   ]);

  const colorGenrator = (value) => {
    console.log("value", value);
    if (value <= -0.5) {
      return "#FF0000";
    } else if (value > -0.5 && value <= 0) {
      return "#FFA500";
    } else if (value > 0 && value <= 0.4) {
      return "#FFBF00";
    } else {
      return "#008000";
    }
  };

  return (
    <Card className={classes.root} sx={theme.tableBorder}>
      <Typography
        sx={{
          textAlign: "left",
          backgroundColor: "#DADDE5",
          color: theme.palette.primary.sidebar,
          p: 1,
          fontWeight: "bold",
          borderRadius: "10px",
          //   borderTopLeftRadius: "10px",
          //   borderTopRightRadius: "10px",
        }}
      >
        Call Records
      </Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.head}>
            <TableRow>
              {headData &&
                headData.map((column, index) => (
                  <StyledTableCell
                    colSpan={
                      column.id === "agent" || column.id === "customer" ? 4 : 1
                    }
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
            </TableRow>

            <TableRow>
              {columns &&
                columns.map((column, index) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      padding: theme.spacing(0.5),
                    }}
                  >
                    {column.id === "srNo" || column.id === "audioFile"
                      ? ""
                      : column.label}
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
                        if (column.id === "srNo") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {rowIndex + 1}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "audioFile") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.FileInfo?.total_Call_Duration?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "agentName") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Agent?.Speakers?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "agentSentimentType") {
                          return (
                            <StyledTableCell
                              align="center"
                              key={column.id}
                              style={{
                                fontWeight: "500",
                                backgroundColor: colorGenrator(
                                  row?.Agent?.SentimentScore?.[0]
                                ),
                              }}
                            >
                              {row?.Agent?.SentimentType?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "agentSentimentScore") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Agent?.SentimentScore?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "agentSubjectivity") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Agent?.Subjectivity?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "customerName") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Customer?.Speakers?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "customerSentimentType") {
                          return (
                            <StyledTableCell
                              style={{
                                backgroundColor: colorGenrator(
                                  row?.Customer?.SentimentScore?.[0]
                                ),
                              }}
                              align="center"
                              key={column.id}
                            >
                              {row?.Customer?.SentimentType?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "customerSentimentScore") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Customer?.SentimentScore?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "customerSubjectivity") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Customer?.Subjectivity?.[0]}
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
export default withStyles(styles)(RiskEvaluationTable);
