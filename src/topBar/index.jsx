import { Grid } from "@mui/material";
import React from "react";
import SelectColumns from "./selectColumns";

function TopBar({
  columns,
  checked,
  setChecked,
  setTrueForAllCheckeds,
  setFalseForAllCheckeds,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SelectColumns
          columns={columns}
          checked={checked}
          setChecked={setChecked}
          setTrueForAllCheckeds={setTrueForAllCheckeds}
          setFalseForAllCheckeds={setFalseForAllCheckeds}
        />
      </Grid>
    </Grid>
  );
}

export default TopBar;
