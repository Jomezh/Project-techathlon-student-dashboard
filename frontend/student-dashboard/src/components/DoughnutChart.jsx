import React from 'react';
import { Doughnut } from 'react-chartjs-2';
// Necessary imports from chart.js for tree-shaking
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend); // [cite: 95, 347]

// DoughnutChart component wrapper for react-chartjs-2
function DoughnutChart({ percentage }) {
  // Data configuration for the chart
  const data = {
    // Labels for the segments (optional, not displayed due to legend: false)
    // labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Attendance', // Label for the dataset
        // Data points: percentage present, 100 - percentage absent
        data: [percentage, 100 - percentage], // [cite: 95, 347]
        // Colors for the segments
        backgroundColor: ['#3498db', '#ecf0f1'], // [cite: 96, 348]
        // No border for the segments
        borderWidth: 0, // [cite: 96, 348]
        // Spacing between segments
        spacing: 0, // Adjust if needed
        // Rounded corners for segments
        borderRadius: 5, // Optional nice touch
      },
    ],
  };

  // Options configuration for the chart
  const options = {
    responsive: true, // Make chart responsive [cite: 97, 349]
    maintainAspectRatio: false, // Allow chart to fill container height [cite: 97, 349]
    // Percentage of the chart cut out in the middle
    cutout: '75%', // [cite: 97, 349]
    plugins: {
      legend: {
        // Hide the default legend
        display: false, // [cite: 97, 349]
      },
      tooltip: {
        // Enable tooltips on hover
        enabled: true, // [cite: 98, 350]
        // Custom tooltip formatting (optional)
        callbacks: {
          label: function(context) {
             let label = context.dataset.label || '';
             if (label) {
                 label += ': ';
             }
             if (context.parsed !== null) {
                 // Determine label based on index
                 label += (context.dataIndex === 0 ? 'Present: ' : 'Absent: ') + context.parsed + '%';
             }
             return label;
          }
        }
      },
    },
    // Animation configuration
    animation: {
        animateRotate: true, // [cite: 99, 351]
        animateScale: false // Scale animation can look odd with cutout [cite: 99, 351]
    },
    // Disable hover effects on the segments if desired
    // hover: { mode: null },
  };

  // Render the Doughnut component with data and options
  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;