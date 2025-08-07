import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <header style={{ background: '#3f51b5', padding: '10px 20px', color: '#fff' }}>
        <h1> AI-Powered Analytics Dashboard</h1>
      </header>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

