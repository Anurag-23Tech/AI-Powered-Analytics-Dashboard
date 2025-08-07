// components/ExportButtons.js
import React from 'react';
import { jsPDF } from 'jspdf';
import { CSVLink } from 'react-csv';

const ExportButtons = () => {
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('AI Dashboard Report', 10, 10);
    doc.save('dashboard-report.pdf');
  };

  const data = [
    { id: 1, name: 'John', age: 25, country: 'USA' },
    { id: 2, name: 'Jane', age: 30, country: 'UK' },
  ];

  return (
    <div>
      <button onClick={exportToPDF}>Export to PDF</button>
      <CSVLink data={data} filename="dashboard-data.csv">
        <button>Export to CSV</button>
      </CSVLink>
    </div>
  );
};

export default ExportButtons;
