"use client";

import Chart from "react-apexcharts";
import Card from "@/components/common/Card/Card";

export default function TicketSalesChart() {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "45%",
        distributed: true,
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    xaxis: {
      categories: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    },

    colors: [
      "#1F1F1F",
      "#1F1F1F",
      "#1F1F1F",
      "#E4C66D",
      "#1F1F1F",
      "#1F1F1F",
      "#1F1F1F",
    ],

    grid: {
      borderColor: "#f2f2f2",
    },
  };

  const series = [
    {
      data: [8,10,9,11,10,12,9],
    },
  ];

  return (
    <Card>

      <div className="chart-header">
        <div>
          <h5>Ticket Sales</h5>

          <div className="chart-value">
            12,500
            <span>Tickets Sold</span>
          </div>
        </div>

        <button className="chart-filter">
          This Week
        </button>
      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={200}
      />

    </Card>
  );
}