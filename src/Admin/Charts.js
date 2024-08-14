// src/components/Charts.js or wherever you are using Chart.js

import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,       // Add PointElement for Line charts
  LineElement,        // Add LineElement for Line charts
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,      // Register PointElement
  LineElement,       // Register LineElement
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const BarChart = ({ data }) => (
  <Bar data={data} />
);

export const LineChart = ({ data }) => (
  <Line data={data} />
);

export const PieChart = ({ data }) => (
  <Pie data={data} />
);
