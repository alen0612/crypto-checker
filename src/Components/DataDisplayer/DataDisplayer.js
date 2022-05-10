import React, { useEffect, useState } from "react";
import "./DataDisplayer.css";
import Axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function DataDisplayer(props) {
  //console.log(data);

  return (
    <div className="Data-displayer">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                Icon
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                ID
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                Current
                <br />
                Price
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                Change
                <br />
                Percentage
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 24, fontWeight: "bold", color: "white" }}
              >
                Total
                <br />
                Volume
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, i) => (
              <TableRow
                key={i}
                sx={{
                  backgroundColor: "black",
                }}
                className="Data-displayer-row"
              >
                <TableCell align="left">
                  <Avatar
                    alt={row.symbol}
                    src={row.image}
                    sx={{ width: 54, height: 54 }}
                  ></Avatar>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  sx={{ fontSize: 24, color: "white" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 24, color: "white" }}>
                  {row.symbol}
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 24, color: "white" }}>
                  $ {row.currentPrice}
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 24, color: "white" }}>
                  {row.changePercentage}%
                </TableCell>
                <TableCell align="left" sx={{ fontSize: 24, color: "white" }}>
                  $ {row.totalVolume}
                </TableCell>
                <TableCell>
                  <Button variant="contained">More Info</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataDisplayer;
