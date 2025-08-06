// app/page.js
'use client';

import React, { useState } from 'react';
import MetricCard from '../components/MetricCard';
import Chart from '../components/Chart';
import DashboardLayout from '../components/DashboardLayout';
import DataTable from '../components/DataTable';
import ExportButtons from '../components/ExportButtons';
import { ThemeProvider, createTheme, CssBaseline, Switch, Grid } from '@mui/material';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25, country: 'USA', value: 400 },
    { id: 2, name: 'Jane', age: 30, country: 'UK', value: 300 },
    { id: 3, name: 'Tom', age: 35, country: 'Canada', value: 200 },
    { id: 4, name: 'Sophia', age: 40, country: 'Australia', value: 278 },
    { id: 5, name: 'Lucas', age: 22, country: 'Germany', value: 189 },
    { id: 6, name: 'Liam', age: 29, country: 'USA', value: 220 },
    { id: 7, name: 'Emma', age: 32, country: 'Canada', value: 290 },
    { id: 8, name: 'Olivia', age: 27, country: 'UK', value: 310 },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Toggle between dark and light mode
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>
        
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <label style={{ marginRight: '10px' }}>Toggle Dark/Light Mode</label>
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </div>
          </div>
          
          {/* Metric Cards using Grid layout */}
          <Grid container spacing={3} style={{ marginBottom: '30px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard title="Revenue" value="$500,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard title="Users" value="12,345" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard title="Conversions" value="1,234" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <MetricCard title="Growth %" value="15%" />
            </Grid>
          </Grid>

          {/* Chart with real-time updates */}
          <div style={{ marginBottom: '30px' }}>
            <Chart data={data} />
          </div>

          {/* Data Table with dynamic data */}
          <div style={{ marginTop: '20px' }}>
            <DataTable data={data} />
          </div>
        </div>
      </DashboardLayout>
    </ThemeProvider>
  );
}
