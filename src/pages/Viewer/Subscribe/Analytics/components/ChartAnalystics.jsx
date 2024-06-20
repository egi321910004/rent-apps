import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

const PerformanceCard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Pengunjung",
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon">
            <i className="mdi mdi-finance"></i>
          </span>
          Real Time Pengunjung
        </p>
        <a href="#" className="card-header-icon">
          <span className="icon">
            <i className="mdi mdi-reload"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="chart-area">
          <div style={{ height: "100%" }}>
            <canvas
              ref={chartRef}
              className="chartjs-render-monitor"
              style={{ display: "block", height: "400px", width: "100%" }}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
