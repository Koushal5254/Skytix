"use client";

import { FiChevronDown } from "react-icons/fi";

import "./FilterSidebar.scss";

export default function FilterSidebar({
  sections,
  transit,
  maxPrice,
  departureTime,
  selectedAirlines,
  airlines = [],

  onToggleSection,
  onTransitChange,
  onMaxPriceChange,
  onDepartureTimeChange,
  onAirlineChange,
  onSelectAllAirlines,
  onClearAllAirlines,
  onResetFilters,
}) {
  const allAirlinesSelected =
    airlines.length > 0 &&
    selectedAirlines.length === airlines.length;

  const hasActiveFilters =
    !transit.direct ||
    transit.oneTransit ||
    transit.twoTransit ||
    maxPrice !== 1000 ||
    departureTime !== 100 ||
    !allAirlinesSelected;

  return (
    <aside className="schedule-filter-sidebar">

      {/* ========================================
          TRANSIT
      ======================================== */}

      <section className="schedule-filter-card">

        <button
          type="button"
          className="schedule-filter-title"
          onClick={() =>
            onToggleSection("transit")
          }
        >
          <h3>Transit</h3>

          <FiChevronDown
            className={
              sections.transit
                ? "open"
                : ""
            }
          />
        </button>

        {sections.transit && (
          <div className="schedule-filter-body schedule-transit-options">

            <label className="schedule-checkbox-row">

              <input
                type="checkbox"
                checked={transit.direct}
                onChange={() =>
                  onTransitChange(
                    "direct"
                  )
                }
              />

              <span className="schedule-custom-checkbox" />

              <span>
                Direct
              </span>

            </label>

            <label className="schedule-checkbox-row">

              <input
                type="checkbox"
                checked={
                  transit.oneTransit
                }
                onChange={() =>
                  onTransitChange(
                    "oneTransit"
                  )
                }
              />

              <span className="schedule-custom-checkbox" />

              <span>
                1 Transit
              </span>

            </label>

            <label className="schedule-checkbox-row">

              <input
                type="checkbox"
                checked={
                  transit.twoTransit
                }
                onChange={() =>
                  onTransitChange(
                    "twoTransit"
                  )
                }
              />

              <span className="schedule-custom-checkbox" />

              <span>
                2+ Transit
              </span>

            </label>

          </div>
        )}

      </section>

      {/* ========================================
          PRICE RANGE
      ======================================== */}

      <section className="schedule-filter-card">

        <button
          type="button"
          className="schedule-filter-title"
          onClick={() =>
            onToggleSection("price")
          }
        >
          <h3>
            Price Range
          </h3>

          <FiChevronDown
            className={
              sections.price
                ? "open"
                : ""
            }
          />
        </button>

        {sections.price && (
          <div className="schedule-filter-body">

            <div className="schedule-range-wrapper">

              <input
                type="range"
                min="350"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(event) =>
                  onMaxPriceChange(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="schedule-range-input"
                style={{
                  "--range-progress": `${
                    ((maxPrice - 350) /
                      (1000 - 350)) *
                    100
                  }%`,
                }}
              />

            </div>

            <div className="schedule-price-boxes">

              <div className="schedule-price-box">

                <span>
                  Start
                </span>

                <strong>
                  $350
                </strong>

              </div>

              <div className="schedule-price-box">

                <span>
                  Up To
                </span>

                <strong>
                  ${maxPrice}
                </strong>

              </div>

            </div>

          </div>
        )}

      </section>

      {/* ========================================
          DEPARTURE TIMES
      ======================================== */}

      <section className="schedule-filter-card">

        <button
          type="button"
          className="schedule-filter-title"
          onClick={() =>
            onToggleSection(
              "departure"
            )
          }
        >
          <h3>
            Departure Times
          </h3>

          <FiChevronDown
            className={
              sections.departure
                ? "open"
                : ""
            }
          />
        </button>

        {sections.departure && (
          <div className="schedule-filter-body">

            <p className="schedule-time-range">
              05:00 AM –{" "}
              {formatDepartureLimit(
                departureTime
              )}
            </p>

            <div className="schedule-range-wrapper">

              <input
                type="range"
                min="0"
                max="100"
                value={
                  departureTime
                }
                onChange={(event) =>
                  onDepartureTimeChange(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="schedule-range-input"
                style={{
                  "--range-progress": `${departureTime}%`,
                }}
              />

            </div>

          </div>
        )}

      </section>

      {/* ========================================
          AIRLINE
      ======================================== */}

      <section className="schedule-filter-card schedule-airline-card">

        <button
          type="button"
          className="schedule-filter-title"
          onClick={() =>
            onToggleSection("airline")
          }
        >
          <h3>
            Airline
          </h3>

          <FiChevronDown
            className={
              sections.airline
                ? "open"
                : ""
            }
          />
        </button>

        {sections.airline && (
          <div className="schedule-filter-body">

            <div className="schedule-airline-actions">

              <button
                type="button"
                onClick={
                  onSelectAllAirlines
                }
                className="schedule-select-all"
                disabled={
                  allAirlinesSelected
                }
              >
                Select All
              </button>

              <button
                type="button"
                onClick={
                  onClearAllAirlines
                }
                className="schedule-clear-all"
                disabled={
                  selectedAirlines.length ===
                  0
                }
              >
                Clear All
              </button>

            </div>

            <div className="schedule-airline-list">

              {airlines.map(
                (airline) => (
                  <label
                    key={airline}
                    className="schedule-checkbox-row"
                  >

                    <input
                      type="checkbox"
                      checked={selectedAirlines.includes(
                        airline
                      )}
                      onChange={() =>
                        onAirlineChange(
                          airline
                        )
                      }
                    />

                    <span className="schedule-custom-checkbox" />

                    <span>
                      {airline}
                    </span>

                  </label>
                )
              )}

            </div>

          </div>
        )}

      </section>

      {/* ========================================
          RESET
      ======================================== */}

      {hasActiveFilters && (
        <button
          type="button"
          className="schedule-reset-filters"
          onClick={onResetFilters}
        >
          Reset Filters
        </button>
      )}

    </aside>
  );
}

/* ========================================
   DEPARTURE RANGE FORMATTER

   0   = 05:00 AM
   100 = 11:59 PM
======================================== */

function formatDepartureLimit(
  percentage
) {
  const startMinutes =
    5 * 60;

  const endMinutes =
    23 * 60 + 59;

  const minutes =
    startMinutes +
    Math.round(
      (percentage / 100) *
        (endMinutes -
          startMinutes)
    );

  const hour24 =
    Math.floor(
      minutes / 60
    );

  const minute =
    minutes % 60;

  const period =
    hour24 >= 12
      ? "PM"
      : "AM";

  const hour12 =
    hour24 % 12 || 12;

  return `${hour12
    .toString()
    .padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} ${period}`;
}