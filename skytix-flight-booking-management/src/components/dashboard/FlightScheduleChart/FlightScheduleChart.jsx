"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Chart from "react-apexcharts";

import {
  FiCheck,
  FiChevronDown,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  flightSchedulePeriods,
} from "@/data/dashboardData";

import "./FlightScheduleChart.scss";

export default function FlightScheduleChart() {
  const [period, setPeriod] = useState("week");
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const data =
    flightSchedulePeriods[period];

  useEffect(() => {
    const outside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", escape);

    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, []);

  const options = useMemo(
    () => ({
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        parentHeightOffset: 0,
      },

      stroke: {
        curve: "smooth",
        width: [2.5, 2.5],
      },

      fill: {
        type: "gradient",

        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0.18,
          opacityTo: 0.01,
          stops: [0, 90, 100],
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
        borderColor: "#eeeeee",
        strokeDashArray: 4,
      },

      markers: {
        size: 0,

        hover: {
          size: 5,
        },
      },

      xaxis: {
        categories: data.categories,

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },

        labels: {
          style: {
            colors: data.categories.map(
              () => "#999999"
            ),
            fontSize: "9px",
          },
        },
      },

      yaxis: {
        min: 0,
        tickAmount: 4,

        labels: {
          style: {
            colors: ["#999999"],
            fontSize: "9px",
          },

          formatter: (value) =>
            Math.round(value),
        },
      },

      tooltip: {
        shared: true,
        intersect: false,

        y: {
          formatter: (value) =>
            `${value} flights`,
        },
      },
    }),
    [data]
  );

  const series = [
    {
      name: "Completed",
      data: data.completed,
    },
    {
      name: "Pending",
      data: data.pending,
    },
  ];

  return (
    <Card className="flight-schedule-card">
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

        <div
          className="flight-schedule-filter-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`flight-schedule-filter ${
              open ? "active" : ""
            }`}
            onClick={() =>
              setOpen((value) => !value)
            }
          >
            {data.label}
            <FiChevronDown />
          </button>

          {open && (
            <div className="flight-schedule-dropdown">
              {Object.entries(
                flightSchedulePeriods
              ).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={
                    key === period
                      ? "selected"
                      : ""
                  }
                  onClick={() => {
                    setPeriod(key);
                    setOpen(false);
                  }}
                >
                  <span>{item.label}</span>

                  {key === period && (
                    <FiCheck />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

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