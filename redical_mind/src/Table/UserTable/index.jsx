import React, { useState, useEffect } from "react";
import styles from "./styles";
import { StyledTableCell } from "./styledTableCell";
import columns from "./head";
import { Components } from "../../utils/materialUI";
import { Typography } from "@mui/material";
import theme from "../../utils/theme";
import DummyData from "./dummyData";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";
import PauseCircleFilledSharpIcon from "@mui/icons-material/PauseCircleFilledSharp";
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
    label: "S.No",
    minWidth: 50,
    width: 50,
    maxWidth: 50,
    align: "center",
  },
  {
    id: "fileName",
    label: "File Name",
    minWidth: 100,
    width: 100,
    maxWidth: 100,
    align: "center",
  },
  {
    id: "playAudio",
    label: "Play Audio",
    minWidth: 100,
    width: 100,
    maxWidth: 100,
    align: "center",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    width: 100,
    maxWidth: 100,
    align: "center",
  },
  {
    id: "audioFile",
    label: "Call Duration (s)",
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
  const [audioStatus, setAudioStatus] = useState(false);
  const [totalRiskEvaluation, setTotalRiskEvaluation] = useState(
    DummyData.length
  );
  const [filterStatus, setFilterStatus] = useState("");
  const [data, setData] = useState(DummyData);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSentimateScoreFilter = (status) => {
    setFilterStatus(status);
  };

  useEffect(() => {
    const incresingResult = [...data]?.sort((a, b) => {
      return a?.Agent?.SentimentScore?.[0] - b?.Agent?.SentimentScore?.[0];
    });
    const incresingResultCustomer = [...data]?.sort((a, b) => {
      return (
        a?.Customer?.SentimentScore?.[0] - b?.Customer?.SentimentScore?.[0]
      );
    });

    const descresingResult = [...data]?.sort((a, b) => {
      return b?.Agent?.SentimentScore?.[0] - a?.Agent?.SentimentScore?.[0];
    });
    const descresingResultCustomer = [...data]?.sort((a, b) => {
      return (
        b?.Customer?.SentimentScore?.[0] - a?.Customer?.SentimentScore?.[0]
      );
    });

    if (filterStatus === "Incresing") {
      setData(incresingResult);
    } else if (filterStatus === "Decresing") {
      setData(descresingResult);
    } else if (filterStatus === "CustomerDecresing") {
      setData(descresingResultCustomer);
    } else {
      setData(incresingResultCustomer);
    }
  }, [filterStatus]);

  const colorGenrator = (value) => {
    if (value <= -0.5) {
      return "#FF0000";
    } else if (value > -0.5 && value <= 0) {
      return "pink";
    } else if (value > 0 && value <= 0.4) {
      return "#FFBF00";
    } else {
      return "#008000";
    }
  };

  let audio = new Audio("/demo.mp3");
  const handlePlayAudio = () => {
    audio.play();
    audio.currentTime = 0;
    setAudioStatus(true);
  };

  const handlePause = () => {
    if (audioStatus === true) {
      audio.pause();
      setAudioStatus(false);
    }
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
        Call Records
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

            <TableRow className={classes.head}>
              {columns &&
                columns.map((column, index) => {
                  if (column.id === "agentSentimentScore") {
                    return (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          padding: theme.spacing(0.5),
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2px",
                          }}
                        >
                          {column.label}
                          <SouthIcon
                            fontSize="25"
                            color="black"
                            sx={{ cursor: "pointer" }}
                            onClick={() =>
                              handleSentimateScoreFilter("Decresing")
                            }
                          />
                          <NorthIcon
                            fontSize="25"
                            color="black"
                            sx={{ cursor: "pointer" }}
                            onClick={() =>
                              handleSentimateScoreFilter("Incresing")
                            }
                          />
                        </div>
                      </StyledTableCell>
                    );
                  }
                  if (column.id === "customerSentimentScore") {
                    return (
                      <StyledTableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          padding: theme.spacing(0.5),
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2px",
                          }}
                        >
                          {column.label}
                          <SouthIcon
                            fontSize="25"
                            color="black"
                            sx={{ cursor: "pointer" }}
                            onClick={() =>
                              handleSentimateScoreFilter("CustomerDecresing")
                            }
                          />
                          <NorthIcon
                            fontSize="25"
                            color="black"
                            sx={{ cursor: "pointer" }}
                            onClick={() =>
                              handleSentimateScoreFilter("CustomerIncresing")
                            }
                          />
                        </div>
                      </StyledTableCell>
                    );
                  }
                  return (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        padding: theme.spacing(0.5),
                      }}
                    >
                      {column.id === "srNo" ||
                      column.id === "audioFile" ||
                      column.id === "fileName" ||
                      column.id === "playAudio" ||
                      column.id === "date"
                        ? ""
                        : column.label}
                    </StyledTableCell>
                  );
                })}
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
                        if (column.id === "fileName") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.FileInfo?.FileName?.[0]}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "playAudio") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              <div>
                                {audioStatus ? (
                                  <PauseCircleFilledSharpIcon
                                    onClick={handlePause}
                                    sx={{
                                      fontSize: "30px",
                                      color:
                                        theme.palette.primary.sidebarSecondary,
                                      cursor: "pointer",
                                    }}
                                  />
                                ) : (
                                  <PlayCircleFilledSharpIcon
                                    onClick={handlePlayAudio}
                                    sx={{
                                      fontSize: "30px",
                                      color:
                                        theme.palette.primary.sidebarSecondary,
                                      cursor: "pointer",
                                    }}
                                  />
                                )}
                              </div>
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
                        if (column.id === "date") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.FileInfo?.date}
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
                              {row?.Agent?.SentimentScore?.[0]?.toFixed(2)}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "agentSubjectivity") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Agent?.Subjectivity?.[0]?.toFixed(2)}
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
                              {row?.Customer?.SentimentScore?.[0]?.toFixed(2)}
                            </StyledTableCell>
                          );
                        }
                        if (column.id === "customerSubjectivity") {
                          return (
                            <StyledTableCell align="center" key={column.id}>
                              {row?.Customer?.Subjectivity?.[0]?.toFixed(2)}
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
