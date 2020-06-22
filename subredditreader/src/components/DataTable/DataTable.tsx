import React, { FunctionComponent } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import './style.scss';
import { SubRedditTableData } from '../../ts/interfaces';

const DataTable: FunctionComponent<Props> = ({ data }) => {
  return (
    <TableContainer className="tableContainer" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="right">Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: SubRedditTableData) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <a href={row.url}>{row.title}</a>
              </TableCell>
              <TableCell align="center">{row.score}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface Props {
  data: Array<SubRedditTableData>;
}

export default DataTable;
