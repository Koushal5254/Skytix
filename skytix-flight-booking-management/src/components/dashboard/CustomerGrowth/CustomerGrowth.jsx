"use client";

import Chart from "react-apexcharts";
import Card from "@/components/common/Card/Card";

import "./CustomerGrowth.scss";

export default function CustomerGrowth() {

  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },

    colors: ["#E4C66D"],

    plotOptions: {
      radialBar: {

        startAngle: -135,
        endAngle: 135,

        hollow: {
          size: "62%",
        },

        track: {
          background: "#333333",
        },

        dataLabels: {

          name: {
            show: false,
          },

          value: {
            color: "#ffffff",
            fontSize: "34px",
            fontWeight: 700,

            formatter: () => "25%",
          },
        },
      },
    },
  };

  const series = [25];

  return (
    <Card className="customer-growth-card">

      <h5>Customer Growth</h5>

      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={220}
      />

      <p>From Last Month</p>

    </Card>
  );
}