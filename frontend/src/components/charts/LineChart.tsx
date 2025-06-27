import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import type { WeatherData } from "../../types/insightData";

interface LineChartProps {
  data: WeatherData;
  solKeys: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, solKeys }) => {
  const lineData = {
    labels: solKeys,
    datasets: [
      {
        label: data.avData.label,
        data: data.avData.data,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: data.mnData.label,
        data: data.mnData.data,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: data.mxData.label,
        data: data.mxData.data,
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
    ],
  };

  const config = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Sol",
          color: "#737373",
        },
      },
    },
  };

  return (
    <div>
      <Line data={lineData} options={config} height={200} />
    </div>
  );
};

export default LineChart;
