import React, { useState } from "react";
import TopBar from "./topBar";
import ResultTable from "./resultTable";
import Pagination from "./pagination";
import { columns } from "./data/columns";

function App() {
  const setTrueForAllCheckeds = {};
  columns.map((column) => {
    return (setTrueForAllCheckeds[column.field] = true);
  });

  const setFalseForAllCheckeds = {};
  columns.map((column) => {
    return (setFalseForAllCheckeds[column.field] = false);
  });

  const [checked, setChecked] = useState(setTrueForAllCheckeds);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowStart, setRowStart] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [rowEnd, setRowEnd] = useState(rowStart + pageSize - 1);

  return (
    <>
      <TopBar
        columns={columns}
        checked={checked}
        setChecked={setChecked}
        setTrueForAllCheckeds={setTrueForAllCheckeds}
        setFalseForAllCheckeds={setFalseForAllCheckeds}
      />
      <ResultTable
        columns={columns}
        checked={checked}
        currentPage={currentPage}
        rowStart={rowStart}
        pageSize={pageSize}
        rowEnd={rowEnd}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowStart={rowStart}
        setRowStart={setRowStart}
        pageSize={pageSize}
        setPageSize={setPageSize}
        rowEnd={rowEnd}
        setRowEnd={setRowEnd}
      />
    </>
  );
}

export default App;
