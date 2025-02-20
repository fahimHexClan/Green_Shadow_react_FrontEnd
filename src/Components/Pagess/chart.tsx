import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

interface ChartProps {
  title: string;
}

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart: React.FC<ChartProps> = ({ title }) => {
  // Sample data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Growth",
        data: [30, 45, 60, 40, 80, 90],
        backgroundColor: "rgba(33, 136, 56, 0.7)", // Green color with opacity
        borderColor: "#218838",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return (
    <div className="chart">
      <h5>{title}</h5>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
