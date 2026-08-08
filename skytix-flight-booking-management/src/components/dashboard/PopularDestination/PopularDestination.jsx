"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiCheck,
  FiChevronDown,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import WorldMap from "@/assets/images/World.png";

import {
  destinationPeriods,
} from "@/data/dashboardData";

import "./PopularDestination.scss";

export default function PopularDestination() {
  const [period, setPeriod] =
    useState("month");

  const [open, setOpen] =
    useState(false);

  const ref = useRef(null);

  const data =
    destinationPeriods[period];

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

  return (
    <Card className="destination-card">
      <div className="destination-header">
        <h5>Popular Destination</h5>

        <div
          className="destination-filter-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`destination-filter ${
              open ? "active" : ""
            }`}
            onClick={() =>
              setOpen((value) => !value)
            }
          >
            <span>{data.label}</span>
            <FiChevronDown />
          </button>

          {open && (
            <div className="destination-dropdown">
              {Object.entries(
                destinationPeriods
              ).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
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

      <div className="destination-map">
        <img
          src={WorldMap.src}
          alt="Popular destinations world map"
          draggable="false"
        />
      </div>

      <div className="destination-grid">
        {data.destinations.map(
          (item) => (
            <div
              className="country-row"
              key={item.country}
            >
              <span>{item.country}</span>
              <strong>{item.percentage}</strong>
            </div>
          )
        )}
      </div>
    </Card>
  );
}