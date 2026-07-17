"use client";

import Chart from "react-apexcharts";
import Card from "@/components/common/Card/Card";

import "./RevenueGrowth.scss";

export default function RevenueGrowth() {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: [
      "#E4C66D",
      "#111111",
    ],

    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
    },

    grid: {
      borderColor: "#f2f2f2",
    },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [12, 15, 18, 16, 22, 24, 28],
    },
    {
      name: "Expense",
      data: [8, 9, 11, 10, 12, 11, 10],
    },
  ];

  return (
    <Card>

      <div className="revenue-header">

        <div>

          <h5>Revenue Growth</h5>

          <p>Last 6 Months Performance</p>

        </div>

        <button className="revenue-filter">
          Last 6 Months
        </button>

      </div>

      <Chart
        options={options}
        series={series}
        type="line"
        height={220}
      />

    </Card>
  );
}