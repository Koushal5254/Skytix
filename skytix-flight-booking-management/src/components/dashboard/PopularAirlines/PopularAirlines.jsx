"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Chart from "react-apexcharts";

import { FaPlaneDeparture } from "react-icons/fa";

import {
  FiCheck,
  FiMoreHorizontal,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  airlines,
} from "@/data/dashboardData";

import "./PopularAirlines.scss";

export default function PopularAirlines() {
  const [selected, setSelected] =
    useState(null);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [displayMode, setDisplayMode] =
    useState("percentage");

  const ref = useRef(null);

  useEffect(() => {
    const outside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", outside);

    return () =>
      document.removeEventListener(
        "mousedown",
        outside
      );
  }, []);

  const options = {
    chart: {
      toolbar: {
        show: false,
      },

      sparkline: {
        enabled: true,
      },

      events: {
        dataPointSelection: (
          event,
          context,
          config
        ) => {
          const index =
            config.dataPointIndex;

          setSelected(
            selected === index
              ? null
              : index
          );
        },
      },
    },

    labels: airlines.map(
      (item) => item.name
    ),

    colors: [
      "#E4C66D",
      "#252525",
      "#8C8C8C",
      "#D9D9D9",
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
        expandOnClick: false,

        donut: {
          size: "72%",
        },
      },
    },
  };

  const selectedAirline =
    selected !== null
      ? airlines[selected]
      : null;

  return (
    <Card className="popular-airlines-card">
      <div className="airlines-header">
        <h5>Popular Airlines</h5>

        <div
          className="airlines-menu-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`airlines-more ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen(
                (value) => !value
              )
            }
          >
            <FiMoreHorizontal />
          </button>

          {menuOpen && (
            <div className="airlines-menu">
              <button
                type="button"
                className={
                  displayMode ===
                  "percentage"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setDisplayMode(
                    "percentage"
                  );
                  setMenuOpen(false);
                }}
              >
                Show Percentage

                {displayMode ===
                  "percentage" && (
                  <FiCheck />
                )}
              </button>

              <button
                type="button"
                className={
                  displayMode === "value"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setDisplayMode("value");
                  setMenuOpen(false);
                }}
              >
                Show Distribution

                {displayMode === "value" && (
                  <FiCheck />
                )}
              </button>

              <div className="airlines-menu-divider" />

              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setMenuOpen(false);
                }}
              >
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="airlines-chart">
        <Chart
          options={options}
          series={airlines.map(
            (item) => item.value
          )}
          type="donut"
          width="100%"
          height="100%"
        />

        <div className="airlines-center">
          <div
            className={`airlines-center-icon ${
              selectedAirline
                ? "selected"
                : ""
            }`}
          >
            <FaPlaneDeparture />
          </div>

          {selectedAirline && (
            <div className="airlines-center-value">
              <strong>
                {selectedAirline.value}%
              </strong>
            </div>
          )}
        </div>
      </div>

      <div className="airlines-list">
        {airlines.map(
          (airline, index) => (
            <button
              type="button"
              key={airline.id}
              className={`airline-row ${
                selected === index
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelected(
                  selected === index
                    ? null
                    : index
                )
              }
            >
              <div className="airline-name">
                <span
                  className={`airline-dot ${airline.className}`}
                />

                <span>{airline.name}</span>
              </div>

              <strong>
                {displayMode ===
                "percentage"
                  ? `${airline.value}%`
                  : airline.value}
              </strong>
            </button>
          )
        )}
      </div>
    </Card>
  );
}