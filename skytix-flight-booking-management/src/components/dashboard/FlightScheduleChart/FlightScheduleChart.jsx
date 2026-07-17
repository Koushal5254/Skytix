"use client";

import Chart from "react-apexcharts";
import Card from "@/components/common/Card/Card";
import { FiChevronDown } from "react-icons/fi";

export default function FlightScheduleChart() {

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.25,
        opacityTo: 0.02,
      },
    },

    colors: [
      "#E4C66D",
      "#1F1F1F",
    ],

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "#F2F2F2",
      strokeDashArray: 4,
    },

    markers: {
      size: 4,
      strokeWidth: 0,
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
          colors: "#999",
          fontSize: "12px",
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: "#999",
          fontSize: "12px",
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
      data: [20, 30, 28, 45, 38, 55, 48],
    },
    {
      name: "Pending",
      data: [15, 22, 20, 35, 30, 42, 37],
    },
  ];

  return (
    <Card>

      <div className="chart-header">

        <h5>Flight Schedule</h5>

        <button className="chart-filter">
          This Week
          <FiChevronDown />
        </button>

      </div>

      <Chart
        options={options}
        series={series}
        type="area"
        height={200}
      />

    </Card>
  );
}