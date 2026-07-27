"use client";

import Chart from "react-apexcharts";

import {
  FiChevronDown,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import "./FlightScheduleChart.scss";

export default function FlightScheduleChart() {
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

    stroke: {
      curve: "smooth",

      width: [
        2.5,
        2.5,
      ],
    },

    fill: {
      type: "gradient",

      gradient: {
        shadeIntensity: 0,

        opacityFrom: 0.18,
        opacityTo: 0.01,

        stops: [
          0,
          90,
          100,
        ],
      },
    },

    colors: [
      "#E4C66D",
      "#292929",
    ],

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "#EEEEEE",

      strokeDashArray: 4,

      padding: {
        top: 5,
        right: 4,
        bottom: -3,
        left: 2,
      },
    },

    markers: {
      size: 0,

      hover: {
        size: 5,
      },
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

      tickAmount: 4,

      labels: {
        style: {
          colors: "#999999",
          fontSize: "9px",
          fontWeight: 400,
        },
      },
    },

    tooltip: {
      theme: "light",
    },
  };

  const series = [
    {
      name: "Completed",
      data: [
        20,
        30,
        28,
        45,
        38,
        55,
        48,
      ],
    },

    {
      name: "Pending",
      data: [
        15,
        22,
        20,
        35,
        30,
        42,
        37,
      ],
    },
  ];

  return (
    <Card className="flight-schedule-card">

      {/* HEADER */}

      <div className="flight-schedule-header">

        <div className="flight-schedule-title">
          <h5>Flight Schedule</h5>

          <div className="flight-schedule-legend">

            <span>
              <i className="completed" />

              Completed
            </span>

            <span>
              <i className="pending" />

              Pending
            </span>

          </div>
        </div>

        <button
          type="button"
          className="flight-schedule-filter"
        >
          <span>This Week</span>

          <FiChevronDown />
        </button>

      </div>

      {/* CHART */}

      <div className="flight-schedule-chart">
        <Chart
          options={options}
          series={series}
          type="area"
          height="100%"
        />
      </div>

    </Card>
  );
}