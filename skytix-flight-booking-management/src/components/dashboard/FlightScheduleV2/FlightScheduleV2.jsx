"use client";

import Chart from "react-apexcharts";
import Card from "@/components/common/Card/Card";
import { FiChevronDown } from "react-icons/fi";

import "./FlightScheduleV2.scss";

export default function FlightScheduleV2() {

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
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
    },

    colors: [
      "#1F1F1F",
      "#E4C66D",
    ],

    grid: {
      borderColor: "#F2F2F2",
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
      name: "Completed",
      data: [40, 55, 50, 65, 70, 82, 78],
    },
    {
      name: "Pending",
      data: [22, 28, 30, 35, 42, 48, 44],
    },
  ];

  return (
    <Card>

      <div className="schedule-v2-header">

        <div>

          <h5>Flight Schedule</h5>

          <p>Monthly Flight Performance</p>

        </div>

        <button className="schedule-v2-filter">

          This Week

          <FiChevronDown />

        </button>

      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={280}
      />

    </Card>
  );
}