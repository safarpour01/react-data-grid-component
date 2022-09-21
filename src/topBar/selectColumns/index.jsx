import React, { useState } from "react";
import { Button, Card } from "@mui/material";
import Styles from "./styles";
import CustomeFormControlLabel from "./../../CustomeFormControlLabel";

function SelectColumns({
  columns,
  checked,
  setChecked,
  setTrueForAllCheckeds,
  setFalseForAllCheckeds,
}) {
  const [showSelectColumnsList, setShowSelectColumnsList] = useState(false);

  return (
    <div>
      <Styles>
        <div className="main-container">
          <Button
            variant="contained"
            onClick={() => {
              setShowSelectColumnsList(!showSelectColumnsList);
            }}
          >
            انتخاب ستون‌ها
          </Button>

          <Card
            style={{ display: showSelectColumnsList ? "flex" : "none" }}
            className="check-boxes-container"
          >
            {columns.map((column) => {
              return (
                <CustomeFormControlLabel
                  key={column.field}
                  onChange={() => {
                    setChecked({
                      ...checked,
                      [column.field]: !checked[column.field],
                    });
                  }}
                  checked={checked[column.field]}
                  label={column.headerName}
                />
              );
            })}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setChecked(setTrueForAllCheckeds);
              }}
              sx={{ marginTop: "20px" }}
            >
              نمایش همه
            </Button>
            <Button
              variant="contained"
              color="action"
              onClick={() => {
                setChecked(setFalseForAllCheckeds);
              }}
            >
              مخفی همه
            </Button>
          </Card>
        </div>
      </Styles>
    </div>
  );
}

export default SelectColumns;
