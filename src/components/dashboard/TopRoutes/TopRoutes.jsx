"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  FiCheck,
  FiMoreHorizontal,
  FiRefreshCw,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  topRoutes,
} from "@/data/dashboardData";

import "./TopRoutes.scss";

export default function TopRoutes() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [sortMode, setSortMode] =
    useState("passengers");

  const [selected, setSelected] =
    useState(null);

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

  const routes = useMemo(() => {
    const result = [...topRoutes];

    if (sortMode === "passengers") {
      result.sort(
        (a, b) =>
          number(b.passengers) -
          number(a.passengers)
      );
    }

    if (sortMode === "distance") {
      result.sort(
        (a, b) =>
          number(b.distance) -
          number(a.distance)
      );
    }

    if (sortMode === "progress") {
      result.sort(
        (a, b) =>
          b.progress - a.progress
      );
    }

    return result;
  }, [sortMode]);

  const changeSort = (mode) => {
    setSortMode(mode);
    setMenuOpen(false);
  };

  return (
    <Card className="routes-card">
      <div className="routes-header">
        <h5>Top Flight Routes</h5>

        <div
          className="routes-menu-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`routes-more ${
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
            <div className="routes-menu">
              <p className="routes-menu-title">
                Sort Routes
              </p>

              {[
                ["passengers", "Most Passengers"],
                ["distance", "Longest Distance"],
                ["progress", "Highest Traffic"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={
                    sortMode === value
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    changeSort(value)
                  }
                >
                  <span>{label}</span>

                  {sortMode === value && (
                    <FiCheck />
                  )}
                </button>
              ))}

              <div className="routes-menu-divider" />

              <button
                type="button"
                onClick={() => {
                  setSortMode(
                    "passengers"
                  );
                  setSelected(null);
                  setMenuOpen(false);
                }}
              >
                <span>Reset View</span>
                <FiRefreshCw />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="routes-list">
        {routes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`route-item ${
              selected === item.id
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setSelected(
                selected === item.id
                  ? null
                  : item.id
              )
            }
          >
            <small className="route-passengers">
              {item.passengers} Passengers
            </small>

            <h6>{item.route}</h6>

            <div className="route-meta">
              <div
                className="route-progress"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  item.progress
                }
              >
                <span
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>

              <strong>
                {item.distance}
              </strong>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}

function number(value) {
  return (
    Number(
      String(value).replace(
        /[^0-9.]/g,
        ""
      )
    ) || 0
  );
}