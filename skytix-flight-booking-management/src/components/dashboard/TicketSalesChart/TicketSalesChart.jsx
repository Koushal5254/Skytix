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
  ticketSalesPeriods,
} from "@/data/dashboardData";

import "./TicketSalesChart.scss";

export default function TicketSalesChart() {
  const [period, setPeriod] = useState("week");
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  const data = ticketSalesPeriods[period];

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

  const colors = useMemo(
    () =>
      data.data.map((_, index) =>
        index === data.highlightIndex
          ? "#E4C66D"
          : "#252525"
      ),
    [data]
  );

  const options = useMemo(
    () => ({
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        parentHeightOffset: 0,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth:
            period === "month"
              ? "34%"
              : "42%",
          distributed: true,
        },
      },

      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },

      colors,

      grid: {
        borderColor: "#f0f0f0",
        padding: {
          top: 0,
          right: 0,
          bottom: -4,
          left: 0,
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
        max: 14,
        tickAmount: 4,

        labels: {
          style: {
            colors: ["#a0a0a0"],
            fontSize: "9px",
          },

          formatter: (value) =>
            `${Math.round(value)}k`,
        },
      },

      tooltip: {
        marker: {
          show: false,
        },

        y: {
          formatter: (value) =>
            `${value}k tickets`,
        },
      },
    }),
    [data, colors, period]
  );

  const series = [
    {
      name: "Tickets",
      data: data.data,
    },
  ];

  return (
    <Card className="ticket-sales-card">
      <div className="ticket-sales-header">
        <div className="ticket-sales-heading">
          <h5>Ticket Sales</h5>

          <div className="ticket-sales-value">
            <strong>{data.total}</strong>
            <span>Tickets Sold</span>
          </div>
        </div>

        <div
          className="ticket-sales-filter-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`ticket-sales-filter ${
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
            <div className="ticket-sales-dropdown">
              {Object.entries(
                ticketSalesPeriods
              ).map(([key, item]) => (
                <button
                  type="button"
                  key={key}
                  className={
                    period === key
                      ? "selected"
                      : ""
                  }
                  onClick={() => {
                    setPeriod(key);
                    setOpen(false);
                  }}
                >
                  <span>{item.label}</span>

                  {period === key && (
                    <FiCheck />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
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