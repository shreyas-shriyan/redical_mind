import React, { useState } from "react";
import styles from "./styles";
import { Components } from "../../utils/materialUI";
import theme from "../../utils/theme";

const { withStyles, Grid, TextField, Button, Box, Typography } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const Admin = ({ classes }) => {
  const [recordingUrl, setRecordingUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleRecordingUrlChange = (event) => {
    setRecordingUrl(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    console.log("Recording URL:", recordingUrl);
    console.log("Selected File:", selectedFile);
  };

  return (
    <Container spacing={2} className={classes.container}>
      <Item xs={12} lg={12} md={12}>
        <Box mt={5}>
          <Typography variant="h4" component="h1" gutterBottom>
            Upload Recording
          </Typography>
        </Box>
      </Item>
      <Item xs={12} >
        <TextField
          fullWidth
          label="Recording URL"
          variant="outlined"
          value={recordingUrl}
          onChange={handleRecordingUrlChange}
        />
      </Item>
      <Item xs={12}>
        <input
          accept="*"
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" fullWidth>
            Choose File
          </Button>
        </label>
        {selectedFile && <Typography>{selectedFile.name}</Typography>}
      </Item>
      <Item xs={12}>
        <Button
          variant="contained"
          color={theme.palette.primary.side}
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Item>
    </Container>
  );
};

export default withStyles(styles)(Admin);
