import React, { useEffect, useState } from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  TablePagination,
} from '@mui/material';
import styled from 'styled-components';

const StyledTableContainer = styled(TableContainer)`
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #2196f3;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const StyledTableCell = styled(TableCell)`
  font-weight: 600;
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #cfd8dc;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const StyledTablePagination = styled(TablePagination)`
  border-radius: 8px;
  margin-top: 20px;
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const DataTable = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row.login.uuid === selectedRow ? null : row.login.uuid);
  };

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Profile Picture</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <StyledTableRow
                key={row.login.uuid}
                onClick={() => handleRowClick(row)}
                selected={row.login.uuid === selectedRow}
              >
                <StyledTableCell>{`${row.name.first} ${row.name.last}`}</StyledTableCell>
                <StyledTableCell>
                  <StyledImage src={row.picture.thumbnail} alt="Profile" />
                </StyledTableCell>
                <StyledTableCell>{row.login.username}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{`${row.location.city}, ${row.location.country}`}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </StyledTable>
      <StyledTablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledTableContainer>
  );
};

export default DataTable;

