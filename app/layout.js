// app/layout.js

'use client';  // This is the client-side directive for React

import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Switch } from '@mui/material';
import { useState } from 'react';  // For Dark/Light mode toggle

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', // Toggle between dark and light mode
    },
  });

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI-Powered Analytics Dashboard</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ padding: '20px' }}>
            <label style={{ marginRight: '10px' }}>Toggle Dark/Light Mode</label>
            <Switch checked={darkMode} onChange={toggleDarkMode} />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
