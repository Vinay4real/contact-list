import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

const SearchBar = ({ onSearch, onClear }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleClear = () => {
    setFilters({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    onClear();
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            value={filters.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            value={filters.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Date of Birth"
            name="dob"
            variant="outlined"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={filters.dob}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={filters.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
            value={filters.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Street Address"
            name="address"
            variant="outlined"
            fullWidth
            value={filters.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="City"
            name="city"
            variant="outlined"
            fullWidth
            value={filters.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="State"
            name="state"
            variant="outlined"
            fullWidth
            value={filters.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            label="Zip"
            name="zip"
            variant="outlined"
            fullWidth
            value={filters.zip}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            style={{ marginRight: "10px" }}
          >
            Search
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
