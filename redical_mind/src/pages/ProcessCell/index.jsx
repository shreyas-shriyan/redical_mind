import React, { useState } from "react";
import { Components } from "../../utils/materialUI";
import UserTable from "../../Table/UserTable";
import ProcessCell from "./ProcessCell";

const { Grid } = Components;

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const index = () => {
  const [status, setStatus] = useState(false);

  const handleSubmit = () => {
    setStatus(true);
  };
  return (
    <Container md={12} xs={12} lg={12}>
      <ProcessCell handleSubmit={handleSubmit} />
      <Item md={12} xs={12} lg={12} mt={2} sx={{ width: "360px" }}>
        {/* <CallAuditTable /> */}
        <UserTable status={status} />
      </Item>
    </Container>
  );
};

export default index;
