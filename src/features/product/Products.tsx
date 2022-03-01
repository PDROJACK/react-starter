import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography/Typography";
import { Grid } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function Products() {
  return (
      <Grid>

          
        <Grid container direction="row">

        <Grid item lg={1} />
        <Typography variant="h5" component="h5">
            All
        </Typography>
        <Typography variant="h5" component="h5">
            -
        </Typography>
        <Typography variant="h5" component="h5">
            Movie
        </Typography>
        <Typography variant="h5" component="h5">
            -
        </Typography>
        <Typography variant="h5" component="h5">
            TV
        </Typography>
        <Typography variant="h5" component="h5">
            -
        </Typography>
        <Typography variant="h5" component="h5">
        Person
      </Typography>

        </Grid>
      <Grid container direction="column">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <caption>Table of products</caption>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Title&nbsp;(g)</TableCell>
                <TableCell align="right">Product Type&nbsp;(g)</TableCell>
                <TableCell align="right">Rating&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    
    </Grid>
  );
}
