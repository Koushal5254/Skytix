"use client";

import Chart from "react-apexcharts";

import {
  FaPlaneDeparture,
} from "react-icons/fa";

import {
  FiMoreHorizontal,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import "./PopularAirlines.scss";

const airlines = [
  {
    name: "SkyHigh Airlines",
    value: 35,
    className: "yellow",
  },
  {
    name: "FlyFast Airways",
    value: 30,
    className: "black",
  },
  {
    name: "AeroJet",
    value: 20,
    className: "gray",
  },
  {
    name: "Nimbus Airlines",
    value: 15,
    className: "light",
  },
];

export default function PopularAirlines() {
  const series = airlines.map(
    (airline) => airline.value
  );

  const options = {
    chart: {
      toolbar: {
        show: false,
      },

      sparkline: {
        enabled: true,
      },
    },

    labels: airlines.map(
      (airline) => airline.name
    ),

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    tooltip: {
      y: {
        formatter: (value) =>
          `${value}%`,
      },
    },

    plotOptions: {
      pie: {
        expandOnClick: false,

        donut: {
          size: "72%",
        },
      },
    },

    colors: [
      "#E4C66D",
      "#252525",
      "#8C8C8C",
      "#D9D9D9",
    ],
  };

  return (
    <Card className="popular-airlines-card">

      {/* HEADER */}

      <div className="airlines-header">

        <h5>
          Popular Airlines
        </h5>

        <button
          type="button"
          className="airlines-more"
          aria-label="More airline options"
        >
          <FiMoreHorizontal />
        </button>

      </div>

      {/* DONUT */}

      <div className="airlines-chart">

        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height="100%"
        />

        <div className="airlines-center-icon">
          <FaPlaneDeparture />
        </div>

      </div>

      {/* AIRLINES */}

      <div className="airlines-list">

        {airlines.map((airline) => (
          <div
            className="airline-row"
            key={airline.name}
          >

            <div className="airline-name">

              <span
                className={`airline-dot ${airline.className}`}
              />

              <span>
                {airline.name}
              </span>

            </div>

            <strong>
              {airline.value}%
            </strong>

          </div>
        ))}

      </div>

    </Card>
  );
}