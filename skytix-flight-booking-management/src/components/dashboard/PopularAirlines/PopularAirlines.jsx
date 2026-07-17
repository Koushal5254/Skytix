"use client";

import Chart from "react-apexcharts";
import { FaPlaneDeparture } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import "./PopularAirlines.scss";

export default function PopularAirlines() {

  const series = [35, 30, 20, 15];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    labels: [
      "SkyHigh Airlines",
      "FlyFast Airways",
      "AeroJet",
      "Nimbus Airlines",
    ],

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: "68%",
        },
      },
    },

    colors: [
      "#E4C66D",
      "#1F1F1F",
      "#8C8C8C",
      "#D9D9D9",
    ],
  };

  return (
    <Card>

      <div className="airlines-header">
        <h5>Popular Airlines</h5>

        <button>
          <FiMoreHorizontal />
        </button>
      </div>

      <div className="airlines-chart">

        <Chart
          options={options}
          series={series}
          type="donut"
          height={240}
        />

        <div className="airlines-center-icon">
          <FaPlaneDeparture />
        </div>

      </div>

      <div className="airlines-list">

        <div className="airline-row">
          <div>
            <span className="dot yellow"></span>
            SkyHigh Airlines
          </div>
          <strong>35%</strong>
        </div>

        <div className="airline-row">
          <div>
            <span className="dot black"></span>
            FlyFast Airways
          </div>
          <strong>30%</strong>
        </div>

        <div className="airline-row">
          <div>
            <span className="dot gray"></span>
            AeroJet
          </div>
          <strong>20%</strong>
        </div>

        <div className="airline-row">
          <div>
            <span className="dot light"></span>
            Nimbus Airlines
          </div>
          <strong>15%</strong>
        </div>

      </div>

    </Card>
  );
}