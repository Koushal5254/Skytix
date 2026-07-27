"use client";

import Chart from "react-apexcharts";
import { FiChevronDown } from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import "./TicketSalesChart.scss";

export default function TicketSalesChart() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },

      zoom: {
        enabled: false,
      },

      parentHeightOffset: 0,
    },

    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "42%",
        distributed: true,
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    colors: [
      "#252525",
      "#252525",
      "#252525",
      "#E4C66D",
      "#252525",
      "#252525",
      "#252525",
    ],

    grid: {
      show: true,

      borderColor: "#F0F0F0",

      strokeDashArray: 0,

      padding: {
        top: 0,
        right: 0,
        bottom: -4,
        left: 0,
      },
    },

    xaxis: {
      categories: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ],

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },

      labels: {
        style: {
          colors: "#999999",
          fontSize: "9px",
          fontWeight: 400,
        },
      },
    },

    yaxis: {
      min: 0,
      max: 14,
      tickAmount: 4,

      labels: {
        style: {
          colors: "#A0A0A0",
          fontSize: "9px",
          fontWeight: 400,
        },

        formatter: (value) =>
          `${Math.round(value)}k`,
      },
    },

    tooltip: {
      theme: "light",

      y: {
        formatter: (value) =>
          `${value}k tickets`,
      },
    },
  };

  const series = [
    {
      name: "Tickets",
      data: [
        8,
        10,
        9,
        11,
        10,
        12,
        9,
      ],
    },
  ];

  return (
    <Card className="ticket-sales-card">

      <div className="ticket-sales-header">

        <div className="ticket-sales-heading">
          <h5>Ticket Sales</h5>

          <div className="ticket-sales-value">
            <strong>12,500</strong>

            <span>Tickets Sold</span>
          </div>
        </div>

        <button
          type="button"
          className="ticket-sales-filter"
        >
          <span>This Week</span>

          <FiChevronDown />
        </button>

      </div>

      <div className="ticket-sales-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="100%"
        />
      </div>

    </Card>
  );
}