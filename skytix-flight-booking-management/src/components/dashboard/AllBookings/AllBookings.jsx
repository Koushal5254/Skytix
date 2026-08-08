"use client";

import {
  useMemo,
  useState,
} from "react";

import {
  FiCalendar,
  FiChevronRight,
  FiUsers,
} from "react-icons/fi";

import Card from "@/components/common/Card/Card";

import {
  bookings,
} from "@/data/dashboardData";

import "./AllBookings.scss";

const DEFAULT_VISIBLE = 4;

export default function AllBookings() {
  const [showAll, setShowAll] =
    useState(false);

  const [selectedId, setSelectedId] =
    useState(null);

  const visibleBookings = useMemo(
    () =>
      showAll
        ? bookings
        : bookings.slice(
            0,
            DEFAULT_VISIBLE
          ),
    [showAll]
  );

  return (
    <Card
      className={`bookings-card ${
        showAll
          ? "bookings-card-expanded"
          : ""
      }`}
    >
      <div className="booking-header">
        <div className="booking-header-title">
          <h5>All Bookings</h5>
          <span>{bookings.length}</span>
        </div>

        {bookings.length >
          DEFAULT_VISIBLE && (
          <button
            type="button"
            className="booking-see-all"
            onClick={() =>
              setShowAll(
                (value) => !value
              )
            }
          >
            {showAll
              ? "Show Less"
              : "See All"}
          </button>
        )}
      </div>

      <div className="booking-list">
        {visibleBookings.map(
          (item) => {
            const selected =
              selectedId === item.id;

            return (
              <div
                key={item.id}
                className={`booking-item ${
                  selected
                    ? "booking-item-selected"
                    : ""
                }`}
                role="button"
                tabIndex={0}
                onClick={() =>
                  setSelectedId(
                    selected
                      ? null
                      : item.id
                  )
                }
                onKeyDown={(event) => {
                  if (
                    event.key ===
                      "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();

                    setSelectedId(
                      selected
                        ? null
                        : item.id
                    );
                  }
                }}
              >
                <div className="booking-airline">
                  <div className="booking-airline-title">
                    <h6>{item.airline}</h6>

                    <FiChevronRight className="booking-row-chevron" />
                  </div>

                  <div className="booking-meta">
                    <span>
                      <FiCalendar />
                      {item.date}
                    </span>

                    <span>
                      <FiUsers />
                      {item.passengers}
                    </span>
                  </div>
                </div>

                <div className="booking-time">
                  <strong>
                    {item.departureTime}
                  </strong>

                  <span>
                    {item.departureCity}
                  </span>
                </div>

                <div className="booking-route">
                  <small>
                    Duration: {item.duration}
                  </small>

                  <div className="route-line">
                    <span />
                    <span />
                  </div>

                  <div className="route-codes">
                    <span>
                      {item.departureCode}
                    </span>

                    <span>
                      {item.arrivalCode}
                    </span>
                  </div>
                </div>

                <div className="booking-time booking-arrival">
                  <strong>
                    {item.arrivalTime}
                  </strong>

                  <span>
                    {item.arrivalCity}
                  </span>
                </div>

                {selected && (
                  <div className="booking-extra-details">
                    <div>
                      <span>Booking</span>
                      <strong>
                        {item.bookingCode}
                      </strong>
                    </div>

                    <div>
                      <span>Route</span>
                      <strong>
                        {item.departureCode}
                        {" → "}
                        {item.arrivalCode}
                      </strong>
                    </div>

                    <div>
                      <span>Passengers</span>
                      <strong>
                        {item.passengers}
                      </strong>
                    </div>

                    <div>
                      <span>Duration</span>
                      <strong>
                        {item.duration}
                      </strong>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </Card>
  );
}