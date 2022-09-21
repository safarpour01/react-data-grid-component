import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { rows } from "./../data/rows";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ResultTable({
  columns,
  checked,
  currentPage,
  rowStart,
  pageSize,
  rowEnd,
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "8px", maxHeight: "100%", borderRadius: "8px" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ position: "sticky", top: "0" }}>
            {columns.map((column) => {
              if (!checked[column.field]) return null;
              else
                return (
                  <StyledTableCell align="center" key={column.field}>
                    {column.headerName}
                  </StyledTableCell>
                );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, i) => {
            return (
              <StyledTableRow key={row.id}>
                {columns.map((column) => {
                  if (!checked[column.field]) return null;
                  else
                    return (
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                        key={column.field}
                      >
                        {row[column.field]}
                      </StyledTableCell>
                    );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
