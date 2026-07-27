"use client";

import { useMemo, useState } from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import FlightList from "@/components/FlightTracking/FlightList/FlightList";
import FlightMap from "@/components/FlightTracking/FlightMap/FlightMap";
import FlightDetails from "@/components/FlightTracking/FlightDetails/FlightDetails";
import FlightStats from "@/components/FlightTracking/FlightStats/FlightStats";
import AircraftDetails from "@/components/FlightTracking/AircraftDetails/AircraftDetails";

import {
  flights as initialFlights,
} from "@/components/FlightTracking/data/flights";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./page.scss";

export default function FlightTrackingPage() {
  /* ========================================
     ADMIN MENU
  ======================================== */

  const [adminMenuOpen, setAdminMenuOpen] =
    useState(false);

  /* ========================================
     FLIGHTS
  ======================================== */

  const [flights] = useState(() =>
    initialFlights.map((flight) => ({
      ...flight,
    }))
  );

  /* ========================================
     SELECTED FLIGHT
  ======================================== */

  const [selectedFlightId, setSelectedFlightId] =
    useState(
      initialFlights[0]?.id ?? null
    );

  /* ========================================
     SELECTED FLIGHT DATA
  ======================================== */

  const selectedFlight = useMemo(() => {
    return (
      flights.find(
        (flight) =>
          flight.id === selectedFlightId
      ) ||
      flights[0] ||
      null
    );
  }, [
    flights,
    selectedFlightId,
  ]);

  /* ========================================
     SELECT FLIGHT
  ======================================== */

  const handleSelectFlight = (flightId) => {
    setSelectedFlightId(flightId);
  };

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <main className="flight-tracking-page">

        {/* =====================================
            PAGE HEADER
        ====================================== */}

        <header className="flight-tracking-header">

          <h1>
            Flight Tracking
          </h1>

          <div className="flight-tracking-header-actions">

            {/* NOTIFICATIONS */}

            <button
              type="button"
              className="flight-tracking-header-icon"
              aria-label="Notifications"
            >
              <FiBell />

              <span className="flight-tracking-notification-dot" />
            </button>

            {/* HELP */}

            <button
              type="button"
              className="flight-tracking-header-icon"
              aria-label="Help"
            >
              <FiHelpCircle />
            </button>

            {/* SETTINGS */}

            <button
              type="button"
              className="flight-tracking-header-icon"
              aria-label="Settings"
            >
              <FiSettings />
            </button>

            {/* =================================
                ADMIN
            ================================= */}

            <div className="flight-tracking-admin-wrapper">

              <button
                type="button"
                className="flight-tracking-admin"
                onClick={() =>
                  setAdminMenuOpen(
                    (current) => !current
                  )
                }
                aria-expanded={adminMenuOpen}
              >

                <div className="flight-tracking-admin-avatar">
                  MS
                </div>

                <div className="flight-tracking-admin-info">

                  <strong>
                    Martin Septimus
                  </strong>

                  <span>
                    Admin
                  </span>

                </div>

                <FiChevronDown
                  className={`flight-tracking-admin-chevron ${
                    adminMenuOpen
                      ? "open"
                      : ""
                  }`}
                />

              </button>

              {adminMenuOpen && (
                <div className="flight-tracking-admin-dropdown">

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    Settings
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    Sign Out
                  </button>

                </div>
              )}

            </div>

          </div>

        </header>

        {/* =====================================
            WORKSPACE
        ====================================== */}

        <section className="flight-tracking-workspace">

          {/* ===================================
              LEFT — FLIGHT LIST
          ==================================== */}

          <aside className="flight-tracking-list-column">

            <FlightList
              flights={flights}
              selectedFlightId={
                selectedFlightId
              }
              onSelectFlight={
                handleSelectFlight
              }
            />

          </aside>

          {/* ===================================
              RIGHT
          ==================================== */}

          <section className="flight-tracking-main-column">

            {/* MAP */}

            <div className="flight-tracking-map-area">

              <FlightMap
                flight={selectedFlight}
              />

            </div>

            {/* =================================
                BOTTOM DETAILS
            ================================== */}

            {selectedFlight && (
              <div className="flight-tracking-bottom">

                <div className="flight-tracking-details-column">

                  <FlightDetails
                    flight={selectedFlight}
                  />

                </div>

                <div className="flight-tracking-stats-column">

                  <FlightStats
                    flight={selectedFlight}
                  />

                </div>

                <div className="flight-tracking-aircraft-column">

                  <AircraftDetails
                    flight={selectedFlight}
                  />

                </div>

              </div>
            )}

          </section>

        </section>

      </main>
    </MainLayout>
  );
}