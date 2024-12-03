import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";

const ResultsTable = ({ contacts, onSelect }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onSelect(contact)}
                >
                  Select
                </Button>
              </TableCell>
              <TableCell>{`${contact.firstName} ${contact.lastName}`}</TableCell>
              <TableCell>{contact.dob}</TableCell>
              <TableCell>{contact.address}</TableCell>
              <TableCell>{contact.city}</TableCell>
              <TableCell>{contact.state}</TableCell>
              <TableCell>{contact.zip}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResultsTable;
