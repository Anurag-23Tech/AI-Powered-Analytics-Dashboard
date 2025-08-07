import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MetricCard = ({ title, value }) => {
  return (
    <Card 
      style={{
        margin: '10px',
        width: '250px',  // Increased width for better visibility
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        borderRadius: '12px', // Rounded corners for a modern feel
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Larger shadow for depth
        backgroundColor: '#fff', 
        padding: '20px',  // Extra padding inside the card
      }} 
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0, 0, 0, 0.2)';
        e.currentTarget.style.backgroundColor = '#f3f4f6'; 
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.1)';
        e.currentTarget.style.backgroundColor = '#fff'; 
      }}
    >
      <CardContent>
        <Typography 
          variant="h6" 
          style={{ 
            fontWeight: '600', 
            color: '#3f51b5', 
            marginBottom: '8px', 
            letterSpacing: '0.5px', // Adds slight spacing for a polished look
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h4" 
          style={{ 
            fontWeight: '700', 
            color: '#333', 
            fontSize: '1.8rem',  // Larger text for value
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
