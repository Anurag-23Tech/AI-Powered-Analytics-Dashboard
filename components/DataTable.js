
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography,TextField, Select, MenuItem, Slider, InputLabel, FormControl } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'country', headerName: 'Country', width: 150 },
];

const rows = [
  { id: 1, name: 'John', age: 25, country: 'USA' },
  { id: 2, name: 'Jane', age: 30, country: 'UK' },
  { id: 3, name: 'Tom', age: 35, country: 'Canada' },
  { id: 4, name: 'Sophia', age: 40, country: 'Australia' },
  { id: 5, name: 'Lucas', age: 22, country: 'Germany' },
  { id: 6, name: 'Liam', age: 29, country: 'USA' },
  { id: 7, name: 'Emma', age: 32, country: 'Canada' },
  { id: 8, name: 'Olivia', age: 27, country: 'UK' },
];

const DataTable = () => {
  const [ageRange, setAgeRange] = useState([20, 40]); // Default age range
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleAgeChange = (event, newValue) => {
    setAgeRange(newValue);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Filter rows based on selected age and country
  const filteredRows = rows.filter(row => {
    const isAgeInRange = row.age >= ageRange[0] && row.age <= ageRange[1];
    const isCountryMatch = selectedCountry ? row.country === selectedCountry : true;
    return isAgeInRange && isCountryMatch;
  });

  return (
    <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
      {/* Filters */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <FormControl style={{ width: '48%' }}>
          <InputLabel>Country</InputLabel>
          <Select value={selectedCountry} onChange={handleCountryChange} label="Country">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
          </Select>
        </FormControl>

        <div style={{ width: '48%' }}>
          <Typography gutterBottom>Age Range: {ageRange[0]} - {ageRange[1]}</Typography>
          <Slider
            value={ageRange}
            onChange={handleAgeChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}`}
            min={20}
            max={50}
          />
        </div>
      </div>

      {/* Data Grid */}
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        sortingOrder={['asc', 'desc']}
        autoHeight
      />
    </div>
  );
};

export default DataTable;