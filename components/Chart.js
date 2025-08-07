'use client';  // This is the client-side directive for React

import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';  // Import Skeleton loader from MUI

// Dynamically import Recharts components to disable SSR
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const PieChart = dynamic(() => import('recharts').then(mod => mod.PieChart), { ssr: false });
const Pie = dynamic(() => import('recharts').then(mod => mod.Pie), { ssr: false });
const Cell = dynamic(() => import('recharts').then(mod => mod.Cell), { ssr: false });

const initialData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Chart = () => {
  const [data, setData] = useState(initialData);
  const [monthIndex, setMonthIndex] = useState(initialData.length); // Start from after May
  const [loading, setLoading] = useState(true); // Loading state

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  // Update the data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentMonth = months[monthIndex % months.length];
      setMonthIndex(monthIndex + 1);

      setData((prevData) => [
        ...prevData.slice(1),
        { name: currentMonth, value: Math.floor(Math.random() * 500) + 100 },
      ]);
    }, 5000); // Update data every 5 seconds

    // Set loading to false after 2 seconds to simulate data fetching
    setTimeout(() => setLoading(false), 2000);

    return () => clearInterval(interval);
  }, [monthIndex]);

  return (
    <div>
      {loading ? (
        // Show skeleton loader while loading data
        <Skeleton variant="rectangular" width="100%" height={300} />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} animationDuration={1000}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip wrapperStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '5px', color: '#fff' }} contentStyle={{ fontSize: '14px' }} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#FF5722" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      )}

      {loading ? (
        // Show skeleton loader for bar chart while loading
        <Skeleton variant="rectangular" width="100%" height={300} />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} animationDuration={1000}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip wrapperStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '5px', color: '#fff' }} contentStyle={{ fontSize: '14px' }} />
            <Legend />
            <Bar dataKey="value" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer>
      )}

      {loading ? (
        // Show skeleton loader for pie chart while loading
        <Skeleton variant="rectangular" width="100%" height={300} />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#FFBB28" dataKey="value" animationDuration={1000}>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;
