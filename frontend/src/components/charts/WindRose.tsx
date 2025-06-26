import React from "react";
import "chart.js/auto";
import { Chart as ChartJS } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import type { WindData } from "../../types/insightData";
import type { ChartOptions } from "chart.js";

interface WindRoseProps {
  data: WindData[];
  currSol: string;
  solKeys: string[];
}

const WindRose: React.FC<WindRoseProps> = ({ data, currSol, solKeys }) => {
  ChartJS.defaults.borderColor = "#737373";
  ChartJS.defaults.color = "#e5e5e5";

  console.log(currSol);
  const key = Number(currSol) - Number(solKeys[0]);

  const windDirectionData = {
    labels: [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ],
    datasets: [
      {
        label: "Wind Direction",
        data: data[key].data,
        backgroundColor: [
          "rgba(239, 68, 68, 0.2)",
          "rgba(234, 88, 12, 0.2)",
          "rgba(249, 115, 22, 0.2)",
          "rgba(234, 179, 8, 0.2)",
          "rgba(132, 204, 22, 0.2)",
          "rgba(16, 185, 129, 0.2)",
          "rgba(5, 150, 105, 0.2)",
          "rgba(6, 182, 212, 0.2)",
          "rgba(14, 165, 233, 0.2)",
          "rgba(59, 130, 246, 0.2)",
          "rgba(99, 102, 241, 0.2)",
          "rgba(139, 92, 246, 0.2)",
          "rgba(168, 85, 247, 0.2)",
          "rgba(217, 70, 239, 0.2)",
          "rgba(236, 72, 153, 0.2)",
          "rgba(244, 63, 94, 0.2)",
        ],
        borderColor: "rgba(255, 255, 255, 0)",
        borderWidth: 1,
      },
    ],
  };

  const config: ChartOptions<"polarArea"> = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(255, 255, 255, 0.1)",
        },
        suggestedMin: 0,
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 12,
            weight: "bold",
          },
        },
        ticks: {
          color: "#737373",
          backdropColor: "rgba(255, 255, 255, 0)",
        },
        grid: {
          circular: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <PolarArea data={windDirectionData} options={config} />;
};

export default WindRose;
