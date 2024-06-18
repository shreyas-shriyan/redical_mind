import React, { useState, useRef, useEffect } from "react";
import { Components } from "../utils/materialUI";
import styles from "./styles";
import theme from "../utils/theme";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ChatConversion from "./ProcessCell/ChatConversion";
import Summary from "./ProcessCell/summary";
import Issue from "./ProcessCell/Issue";
import SentimentScore from "./ProcessCell/SentimentScore";
import data from "./ProcessCell/ravi_english_bad.json";

const {
  withStyles,
  Grid,
  Card,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const weekArray = ["Week-1", "Week-2", "Week-3", "Week-4", "Week-5"];

const tabArray = [
  {
    name: "Call Transcript",
    value: "callTranscript",
    Components: <ChatConversion />,
  },
  { name: "Call Summary", value: "callSummary", Components: <Summary /> },
  { name: "Issue Remarks Resolution", value: "issue", Components: <Issue /> },
  {
    name: "Sentiment Score",
    value: "sentimentScore",
    Components: <SentimentScore />,
  },
  { name: "QA Score Card", value: "QAScoreCard", Components: "" },
];

const ViewFileName = ({ classes }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(tabArray[0]);

  const [postData, setPostData] = useState({
    user: "Ravi",
    rmID: "RM7025719",
    leadID: "5740950",
    startDateTime: "2024-06-18 13:34:2",
    audioClipName:
      "https://jk.radicalminds.in/RECORDINGS/MP3/5740950_20240609-085918_CTSWELC_RM7025719_7220030018-all.mp3",
    sectionScores: "80%",
    customerExperienceScore: "90%",
    processAdherenceScore: "60%",
    agentTranscription: "",
    customerTranscription: "",
    issueType: "",
    subIssueType: "",
    contactNumber: "7220030018",
    week: "Week-1",
    feedbackDate: "2024-06-18",
    description: "",
    nonFatalScore: "100",
    fatalCount: "0",
    qaScore: "28/35",
  });

  useEffect(() => {
    const resultData = data?.qa;

    setPostData({
      ...postData,
      sectionScores: `${resultData?.scores?.[0]}%`,
      customerExperienceScore: `${resultData?.scores?.[1]}%`,
      processAdherenceScore: `${resultData?.scores?.[2]}%`,
      issueType: resultData?.issue_type,
      subIssueType: resultData?.sub_issue_type,
      agentTranscription: data?.Agent?.transcription,
      customerTranscription: data?.Customer?.transcription,
    });
    // const resultQues = Object?.keys(data?.qa_plain)?.map((item, index) => {
    //   console.log(index);
    //   if (index > 12) {
    //     return {
    //       name: data?.qa_plain[`ques${index + 1}`],
    //       value: "",
    //       description: "",
    //     };
    //   }
    // });
    // setQuestions(resultQues);
  }, []);

  const [Questions, setQuestions] = useState([
    {
      name: "Did the associate utilize the typical salutations and closing remarks ?",
      value: "Yes",
      description: "3",
    },
    {
      name: "Did the associate employ proper sentence structure, grammar, spelling, capitalization, and absence of erroneous spacing or uneven font? When entering the variable value, did the associate delete the brackets, numerous information metrics data, etc.? Furthermore, no phrases linked to internal processes that the DPs are unfamiliar with were used? Did the associate compose the entire response in a single language?",
      value: "Yes",
      description: "5",
    },
    {
      name: "Did the associate respond using the appropriate language ?",
      value: "Yes",
      description: "3",
    },
    {
      name: "New ticket: Did the associate write the response on their own in accordance with the delivery person's question and scenario ?",
      value: "No",
      description: "0",
    },
    {
      name: "Did the associate pose the pertinent queries to determine the underlying cause? It is not required to probe ?",
      value: "Yes",
      description: "5",
    },
    {
      name: "Did the associate respond to the delivery person's inquiry with all the information needed? Did the associate give accurate information regarding the amount, due date, week, RRN, and order ID? Is the real question answered? False claims like 'technical issue' or 'unable to fetch the details' weren't made",
      value: "No",
      description: "0",
    },
    {
      name: "The ticket was not closed, reassigned, unassigned, or closed without a response.",
      value: "Yes",
      description: "3",
    },
    {
      name: "Did the associate process a refund, escalate the matter, overturn a denial or dispute, etc.? Was the escalation or action truly necessary? Did the associate choose the appropriate component and make the correct inputs when escalating? several levels of escalation.Only respond by text;",
      value: "Yes",
      description: "0",
    },
    {
      name: "Did the associate choose the appropriate course of action ?",
      value: "Yes",
      description: "3",
    },
    {
      name: "Did the associate choose the appropriate tags ?",
      value: "Yes",
      description: "3",
    },
    {
      name: "Was the ticket status accurately marked by the associate ? [Acquired/WOC]",
      value: "Yes",
      description: "3",
    },
    {
      name: "Did the agent use profanity in the conversation ?",
      value: "Yes",
      description: "NON-FATAL",
    },
    {
      name: "Was the agent unprofessional on the call ?",
      value: "Yes",
      description: "NON-FATAL",
    },
    {
      name: "Did the agent use Rude/Commanding tone ? ",
      value: "Yes",
      description: "NON-FATAL",
    },
    {
      name: "Did the agent updated CRM with relevant notes ?",
      value: "Yes",
      description: "NON-FATAL",
    },
    {
      name: "Disposition not done ?",
      value: "Yes",
      description: "NON-FATAL",
    },
  ]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleStateChange = (key, value) => {
    setPostData((pre) => {
      pre[`${key}`] = value;
      return { ...pre };
    });
  };

  const handleQuestionChange = (key, value, index) => {
    setQuestions((pre) => {
      pre[index][`${key}`] = value;
      return [...pre];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("postData", postData);
  };

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const AudioPlayer = ({
    src,
    controls = true,
    autoPlay = false,
    loop = true,
  }) => {
    return (
      <audio
        ref={audioRef}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        style={{ height: "50px", width: "100%" }}
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  };

  const SectionScore = ({ classes }) => {
    return (
      <Item md={12} xs={12} lg={12} pl={3} pr={3} pb={2} pt={2}>
        <Card sx={{ ...theme.card, borderRadius: 0 }}>
          <Typography
            sx={{
              textAlign: "center",
              p: 1,
              border: "2px solid lightGrey",
              fontWeight: "600",
              backgroundColor: "#E8E8E8",
            }}
          >
            Section Scores
          </Typography>
          <table
            style={{
              width: "100%",
              border: "2px solid lightGrey",
              textAlign: "center",

              backgroundColor: "#E8E8E8",
            }}
          >
            <tr>
              <td rowSpan={2}>Customer Experience Score : </td>
              <td>Call Control </td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Soft Skills </td>
              <td>10%</td>
            </tr>
            <tr>
              <td rowSpan={2}>Process Adherence : </td>
              <td>Procedure </td>
              <td>50%</td>
            </tr>
            <tr>
              <td>System </td>
              <td> 30%</td>
            </tr>
            <tr>
              <td colSpan={2}>Total :</td>
              <td> 100%</td>
            </tr>
          </table>
        </Card>
      </Item>
    );
  };

  return (
    <Container md={12} xs={12} lg={12}>
      <Card sx={{ ...theme.card, minHeight: "30vh" }}>
        <Item className={classes.headingContainer}>
          <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
            JK - Call Quality Audit
          </Typography>
        </Item>
        <form onSubmit={handleSubmit}>
          <Item
            sx={{
              width: "100vw",
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            lg={12}
            xs={12}
            md={12}
            p={3}
          >
            <Item lg={2.8} xs={12} md={5.8}></Item>

            <Item mt={0.5} lg={4.8} xs={12} md={5.8}>
              <AudioPlayer
                src={"/audio/Ravi call 2_1_7362834935053356829_1_80.wav"}
              />
            </Item>

            <Item lg={2.8} xs={12} md={5.8}></Item>

            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="User"
                variant="outlined"
                size="small"
                value={postData?.user}
                onChange={(e) => handleStateChnage("user", e.target.value)}
              />
            </Item>
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="RM Id"
                variant="outlined"
                size="small"
                value={postData?.rmID}
                onChange={(e) => handleStateChnage("rmID", e.target.value)}
              />
            </Item>
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Lead Id"
                variant="outlined"
                size="small"
                value={postData?.leadID}
                onChange={(e) => handleStateChnage("leadID", e.target.value)}
              />
            </Item>
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Start Date Time"
                variant="outlined"
                size="small"
                value={postData?.startDateTime}
                onChange={(e) =>
                  handleStateChnage("startDateTime", e.target.value)
                }
              />
            </Item>
            <Item mt={1.5} lg={7.9} xs={12} md={5.9}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Audio Clip"
                variant="outlined"
                size="small"
                value={postData?.audioClipName}
                onChange={(e) =>
                  handleStateChnage("audioClipName", e.target.value)
                }
              />
            </Item>

            {/* <Item mt={1.5} lg={3.8} xs={12} md={5.8}></Item> */}
            <Item mt={1.5} lg={5.9} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Agent Transcription"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                value={postData?.agentTranscription}
                onChange={(e) =>
                  handleStateChnage("agentTranscription", e.target.value)
                }
              />
            </Item>
            <Item mt={1.5} lg={5.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Customer Transcription"
                variant="outlined"
                size="small"
                multiline
                rows={4}
                value={postData?.customerTranscription}
                onChange={(e) =>
                  handleStateChnage("customerTranscription", e.target.value)
                }
              />
            </Item>
          </Item>

          <Item
            className={classes.tabContainer}
            xs={12}
            lg={12}
            md={12}
            p={3}
            pt={1}
          >
            {tabArray?.map((item, index) => {
              return (
                <Item
                  xs={12}
                  lg={2.2}
                  md={3}
                  className={classes.tab}
                  onClick={() => handleTabChange(item)}
                  style={{
                    backgroundColor:
                      selectedTab?.value === item?.value
                        ? theme.palette.primary.sidebarSecondary
                        : "white",
                    color: selectedTab?.value === item?.value && "white",
                  }}
                >
                  {item?.name}
                </Item>
              );
            })}
          </Item>

          <Item className={classes.headingContainer} mt={4} mb={2}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              {selectedTab?.name}
            </Typography>
          </Item>

          {selectedTab?.value === "QAScoreCard" ? (
            <Item>
              {/* <Item
                sx={{
                  width: "100vw",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
                lg={12}
                xs={12}
                md={12}
                p={3}
              >
               
              </Item> */}

              <Item>
                <SectionScore classes={classes} />
              </Item>

              <Item
                sx={{
                  width: "100vw",
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
                lg={12}
                xs={12}
                md={12}
                p={3}
              >
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Issue Type"
                    variant="outlined"
                    required={true}
                    size="small"
                    value={postData?.issueType}
                    onChange={(e) =>
                      handleStateChnage("issueType", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Sub Issue Type"
                    variant="outlined"
                    size="small"
                    required={true}
                    value={postData?.subIssueType}
                    onChange={(e) =>
                      handleStateChnage("subIssueType", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                    type="number"
                    required={true}
                    value={postData?.contactNumber}
                    onChange={(e) =>
                      handleStateChnage("contactNumber", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Lead ID"
                    variant="outlined"
                    size="small"
                    value={postData?.leadID}
                    onChange={(e) =>
                      handleStateChnage("leadID", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size="small">
                      Week
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      MenuProps={{
                        sx: {
                          "&& .Mui-selected": {
                            color: "white",
                            background: theme.palette.primary.sidebarSecondary,
                          },
                        },
                      }}
                      sx={{
                        "& [aria-expanded=true]": {
                          background: "#EBF4FF",
                        },
                      }}
                      value={postData?.week}
                      label="Week"
                      onChange={(e) =>
                        handleStateChange("week", e.target.value)
                      }
                    >
                      {weekArray?.map((item, index) => {
                        return (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Feedback Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    value={postData?.feedbackDate}
                    onChange={(e) =>
                      handleStateChnage("feedbackDate", e.target.value)
                    }
                  />
                </Item>
                <Item mt={6} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Section Scores"
                    variant="outlined"
                    size="small"
                    value={postData?.sectionScores}
                    onChange={(e) =>
                      handleStateChnage("sectionScores", e.target.value)
                    }
                  />
                </Item>
                <Item mt={6} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Customer Experience Score"
                    variant="outlined"
                    size="small"
                    value={postData?.customerExperienceScore}
                    onChange={(e) =>
                      handleStateChnage(
                        "customerExperienceScore",
                        e.target.value
                      )
                    }
                  />
                </Item>
                <Item mt={6} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Process Adherence Score"
                    variant="outlined"
                    size="small"
                    value={postData?.processAdherenceScore}
                    onChange={(e) =>
                      handleStateChnage("processAdherenceScore", e.target.value)
                    }
                  />
                </Item>

                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Fatal Count"
                    variant="outlined"
                    size="small"
                    value={postData?.fatalCount}
                    onChange={(e) =>
                      handleStateChnage("fatalCount", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Non Fatal Score"
                    variant="outlined"
                    size="small"
                    value={postData?.nonFatalScore}
                    onChange={(e) =>
                      handleStateChnage("nonFatalScore", e.target.value)
                    }
                  />
                </Item>
                <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="QA Score"
                    variant="outlined"
                    size="small"
                    value={postData?.qaScore}
                    onChange={(e) =>
                      handleStateChnage("qaScore", e.target.value)
                    }
                  />
                </Item>
                <Item mt={4} lg={12} xs={12} md={12}>
                  {Questions?.map((item, queIndex) => {
                    return (
                      <Item
                        mt={1.5}
                        lg={12}
                        xs={12}
                        md={12}
                        pb={2}
                        pt={2}
                        sx={{
                          borderBottom: "1px solid lightgrey",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <Item lg={6} xs={12} md={6} mt={2}>
                          <Typography
                            sx={{ fontSize: "15px", fontWeight: "500" }}
                          >
                            {`${queIndex + 1} : ${item?.name}`}
                          </Typography>
                        </Item>
                        <Item lg={2.5} xs={12} md={3} mt={2}>
                          <FormControl fullWidth>
                            <InputLabel
                              id="demo-simple-select-label"
                              size="small"
                            >
                              Choose
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              size="small"
                              MenuProps={{
                                sx: {
                                  "&& .Mui-selected": {
                                    color: "white",
                                    background:
                                      theme.palette.primary.sidebarSecondary,
                                  },
                                },
                              }}
                              sx={{
                                "& [aria-expanded=true]": {
                                  background: "#EBF4FF",
                                },
                              }}
                              value={item?.value}
                              label="Choose"
                              onChange={(e) =>
                                handleQuestionChange(
                                  "value",
                                  e.target.value,
                                  queIndex
                                )
                              }
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </Select>
                          </FormControl>
                        </Item>
                        <Item lg={2.5} xs={12} md={3} mt={2}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Weightage"
                            variant="outlined"
                            size="small"
                            value={item?.description}
                            onChange={(e) =>
                              handleQuestionChange(
                                "description",
                                e.target.value,
                                queIndex
                              )
                            }
                          />
                        </Item>
                      </Item>
                    );
                  })}
                </Item>

                <Item
                  mt={1.5}
                  lg={12}
                  xs={12}
                  md={12}
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Item lg={3} xs={12} md={4}>
                    Description
                  </Item>
                  <textarea
                    onChange={(e) =>
                      handleStateChange("description", e.target.value)
                    }
                    name=""
                    id=""
                    value={postData?.description}
                    style={{ width: "100%", height: "50px" }}
                  />
                </Item>
              </Item>
              <Item
                m={2}
                lg={12}
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => navigate(`/qms/process-calls`)}
                  variant="outlined"
                  sx={{
                    width: "100px",
                    // ml: "auto",
                    color: theme.palette.primary.sidebarSecondary,
                    backgroundColor: "white",
                    border: `1px solid ${theme.palette.primary.sidebarSecondary}`,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  style={{
                    width: "100px",
                    backgroundColor: theme.palette.primary.sidebarSecondary,
                    color: "white",
                  }}
                >
                  Submit
                </Button>
              </Item>
            </Item>
          ) : (
            <Item p={3} pt={1}>
              {selectedTab.Components}
            </Item>
          )}
        </form>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(ViewFileName);
