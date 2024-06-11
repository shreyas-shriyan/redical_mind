import React, { useState } from "react";
import { Components } from "../utils/materialUI";
import styles from "./styles";
import theme from "../utils/theme";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";

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

const ViewFileName = ({ classes }) => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    user: "Ghanshyam",
    rmID: "RM7025719",
    leadID: "5740950",
    startDateTime: "2024-06-09 08:59:19",
    audioClipName:
      "https://jk.radicalminds.in/RECORDINGS/MP3/5740950_20240609-085918_CTSWELC_RM7025719_7220030018-all.mp3",
    sectionScores: "80%",
    customerExperienceScore: "90%",
    processAdherenceScore: "60%",
    agentTranscription:
      "Hello Yeah No, no, no, but they are telling that food is not there Yes sir They told that food is not there That's what now, they told food is not there and we came out for food What will help you sir, other than this? They will do that only because they are telling food is not there They told that, no, no, food is not there they said Sir, I am not able to hear you sir Food is not there they said Yes Okay Okay sir, like I have told you like they have denied sir No, they are saying food is not there, you are telling, I am saying You ask them no, if they provided food or not They will provide food or not? You ask them whether they have provided food or not They said food is not there They have ordered lunch also, right? They have ordered lunch also, right? Can I please place a call and hold for two minutes? Yes, yes    has provided the company I'm not able to connect so that I just wanted to we did not order it we asked them then they said it's not there yes sir yes sir sir ype you",
    customerTranscription:
      "Hello Yeah No, no, no, but they are telling that food is not there Yes sir They told that food is not there That's what now, they told food is not there and we came out for food What will help you sir, other than this? They will do that only because they are telling food is not there They told that, no, no, food is not there they said Sir, I am not able to hear you sir Food is not there they said Yes Okay Okay sir, like I have told you like they have denied sir No, they are saying food is not there, you are telling, I am saying You ask them no, if they provided food or not They will provide food or not? You ask them whether they have provided food or not They said food is not there They have ordered lunch also, right? They have ordered lunch also, right? Can I please place a call and hold for two minutes? Yes, yes    has provided the company I'm not able to connect so that I just wanted to we did not order it we asked them then they said it's not there yes sir yes sir sir ype you",
    issueType: "2",
    subIssueType: "1",
    contactNumber: "7220030018",
    week: "Week-1",
    feedbackDate: "24-12-2024",
    description: "Hello Yeah No",
  });

  const [Questions, setQuestions] = useState([
    {
      name: "Did the associate used standard opening and closing statement?",
      value: "",
      description: "",
    },
    {
      name: "Did the associate used correct sentence framing, grammar, spelling, caps function, there is no uneven font or unnecessary spacing? Did the associate removed the xxx, brackets,multiple information metrics data etc. while putting the variable value? Also there were no usage of internal process related terms which are not known to the DP's? Did the associate used only one language to write the overall reply?",
      value: "",
      description: "",
    },
    {
      name: "Did the associate used the correct language to reply?",
      value: "",
      description: "",
    },
    {
      name: "Fresh ticket - Did the associate used the correct canned response to reply? Was the reply scenario based? Reopen ticket - Did the associate self drafted the response as per the scenario and query of DP? [copy pasted previous response will be treated as fatal]",
      value: "",
      description: "",
    },
  ]);

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
    console.log("postData", postData);
  };

  const AudioPlayer = ({
    src,
    controls = true,
    autoPlay = false,
    loop = false,
  }) => {
    return (
      <audio
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
              border: "1px solid grey",
              fontWeight: "600",
            }}
          >
            Section Scores
          </Typography>
          <table
            style={{
              width: "100%",
              border: "1px solid grey",
              textAlign: "center",
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
              <AudioPlayer src={"horse.mp3"} />
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
                value={postData?.customerTranscription}
                onChange={(e) =>
                  handleStateChnage("customerTranscription", e.target.value)
                }
              />
            </Item>
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
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
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Customer Experience Score"
                variant="outlined"
                size="small"
                value={postData?.customerExperienceScore}
                onChange={(e) =>
                  handleStateChnage("customerExperienceScore", e.target.value)
                }
              />
            </Item>
            <Item mt={1.5} lg={3.8} xs={12} md={5.8}>
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
          </Item>

          <Item>
            <SectionScore classes={classes} />
          </Item>

          <Item className={classes.headingContainer}>
            <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
              Enter Your Feedback About Above Audio
            </Typography>
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
                onChange={(e) => handleStateChnage("issueType", e.target.value)}
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
                onChange={(e) => handleStateChnage("leadID", e.target.value)}
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
                  onChange={(e) => handleStateChange("week", e.target.value)}
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
                      <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                        {`${queIndex + 1} : ${item?.name}`}
                      </Typography>
                    </Item>
                    <Item lg={2.5} xs={12} md={3} mt={2}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" size="small">
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
                        label="Description"
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
        </form>
      </Card>
    </Container>
  );
};

export default withStyles(styles)(ViewFileName);
