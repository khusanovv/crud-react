import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, id, adres, age, protein) {
  return { name, id, adres, age, protein };
}

const rows = [
  createData("Alijon Valiyev", 1, "Tashkent", 24, 4.0),
  createData("Alisher Sobirov", 2, "Namangan", 37, 4.3),
  createData("Umidjon Karimov", 3, "Andijon", 14, 6.0),
  createData("Boburshoh Khusanov", 4, "Chust", 18, 4.3),
  createData("Bahodir Rahimov", 5, "Fargona", 18, 3.9),
];

export default function Home() {
  let history = useNavigate();
  //   rows.map((item) => {
  //     console.log(item.id);
  //   });
  const handlerDelete = (id) => {
    let index = rows
      .map((e) => {
        return e.id;
      })
      .indexOf(id);

    rows.splice(index, 1);

    history("/");
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Addres</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.adres}</StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">
                <Link to={"/edit"}>
                  <Button variant="contained">Edit</Button>
                </Link>
                &nbsp;
                <Button
                  variant="contained"
                  onClick={() => {
                    handlerDelete(row.id);
                  }}
                >
                  Delete
                </Button>{" "}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <Link to={"/create"}>
          <Button variant="outlined">Create</Button>
        </Link>
      </Table>
    </TableContainer>
  );
}
