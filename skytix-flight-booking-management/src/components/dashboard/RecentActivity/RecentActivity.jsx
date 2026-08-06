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
  activities,
} from "@/data/dashboardData";

import "./RecentActivity.scss";

export default function RecentActivity() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [viewMode, setViewMode] =
    useState("all");

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

  const displayed = useMemo(
    () =>
      viewMode === "recent"
        ? activities.slice(0, 3)
        : activities,
    [viewMode]
  );

  return (
    <Card className="activity-card">
      <div className="activity-header">
        <h5>Recent Activity</h5>

        <div
          className="activity-menu-wrapper"
          ref={ref}
        >
          <button
            type="button"
            className={`activity-more ${
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
            <div className="activity-menu">
              <button
                type="button"
                className={
                  viewMode === "all"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setViewMode("all");
                  setMenuOpen(false);
                }}
              >
                <span>All Activity</span>

                {viewMode === "all" && (
                  <FiCheck />
                )}
              </button>

              <button
                type="button"
                className={
                  viewMode === "recent"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setViewMode("recent");
                  setMenuOpen(false);
                }}
              >
                <span>Recent Only</span>

                {viewMode ===
                  "recent" && (
                  <FiCheck />
                )}
              </button>

              <div className="activity-menu-divider" />

              <button
                type="button"
                onClick={() => {
                  setViewMode("all");
                  setMenuOpen(false);
                }}
              >
                <span>Refresh</span>
                <FiRefreshCw />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="activity-list">
        {displayed.map(
          (item, index) => (
            <div
              className="activity-item"
              key={item.id}
            >
              <div className="activity-timeline">
                <span className="activity-dot" />

                {index !==
                  displayed.length - 1 && (
                  <span className="activity-line" />
                )}
              </div>

              <div className="activity-content">
                <p>{item.text}</p>
                <small>{item.time}</small>
              </div>
            </div>
          )
        )}
      </div>
    </Card>
  );
}