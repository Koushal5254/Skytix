"use client";

import { useMemo, useState } from "react";

import {
  FiPlus,
  FiMinus,
  FiNavigation,
  FiMaximize2,
} from "react-icons/fi";

import "./FlightMap.scss";

/* ========================================
   MAP ROUTE POSITIONS

   Coordinates are percentages of the map
   container, not geographic coordinates.

   This keeps map presentation separate
   from flights.js.
======================================== */

const routePositions = {
  1: {
    from: { x: 27, y: 39 },
    to: { x: 16, y: 46 },
    plane: { x: 21, y: 42 },
  },

  2: {
    from: { x: 47, y: 32 },
    to: { x: 27, y: 39 },
    plane: { x: 37, y: 34 },
  },

  3: {
    from: { x: 84, y: 41 },
    to: { x: 14, y: 44 },
    plane: { x: 92, y: 31 },
  },

  4: {
    from: { x: 87, y: 76 },
    to: { x: 76, y: 60 },
    plane: { x: 82, y: 68 },
  },

  5: {
    from: { x: 63, y: 49 },
    to: { x: 47, y: 32 },
    plane: { x: 55, y: 40 },
  },

  6: {
    from: { x: 49, y: 35 },
    to: { x: 27, y: 39 },
    plane: { x: 38, y: 35 },
  },

  7: {
    from: { x: 79, y: 47 },
    to: { x: 16, y: 46 },
    plane: { x: 96, y: 33 },
  },
};

/* ========================================
   COMPONENT
======================================== */

export default function FlightMap({
  flight,
}) {
  const [zoom, setZoom] = useState(1);
  const [fullscreen, setFullscreen] =
    useState(false);

  /* ========================================
     SELECTED ROUTE
  ======================================== */

  const route = useMemo(() => {
    if (!flight) {
      return null;
    }

    return (
      routePositions[flight.id] ||
      routePositions[1]
    );
  }, [flight]);

  /* ========================================
     ZOOM
  ======================================== */

  const handleZoomIn = () => {
    setZoom((current) =>
      Math.min(current + 0.1, 1.4)
    );
  };

  const handleZoomOut = () => {
    setZoom((current) =>
      Math.max(current - 0.1, 0.8)
    );
  };

  const handleReset = () => {
    setZoom(1);
  };

  if (!flight || !route) {
    return (
      <div className="flight-map flight-map-empty">
        Select a flight
      </div>
    );
  }

  /* ========================================
     ROUTE LINE
  ======================================== */

  const deltaX =
    route.to.x - route.from.x;

  const deltaY =
    route.to.y - route.from.y;

  const routeLength = Math.sqrt(
    deltaX * deltaX +
    deltaY * deltaY
  );

  const routeAngle =
    Math.atan2(deltaY, deltaX) *
    (180 / Math.PI);

  return (
    <div
      className={`flight-map ${
        fullscreen
          ? "flight-map-fullscreen"
          : ""
      }`}
    >

      {/* =====================================
          MAP
      ====================================== */}

      <div
        className="flight-map-canvas"
        style={{
          transform: `scale(${zoom})`,
        }}
      >

        {/* ===================================
            WORLD MAP DECORATION
        ==================================== */}

        <div className="flight-map-world">

          <span className="map-land map-land-north-america" />

          <span className="map-land map-land-south-america" />

          <span className="map-land map-land-europe" />

          <span className="map-land map-land-africa" />

          <span className="map-land map-land-asia" />

          <span className="map-land map-land-australia" />

        </div>

        {/* ===================================
            MAP GRID
        ==================================== */}

        <div className="flight-map-grid" />

        {/* ===================================
            ROUTE LINE
        ==================================== */}

        <div
          className="flight-route-line"
          style={{
            left: `${route.from.x}%`,
            top: `${route.from.y}%`,
            width: `${routeLength}%`,
            transform: `rotate(${routeAngle}deg)`,
          }}
        />

        {/* ===================================
            DEPARTURE
        ==================================== */}

        <div
          className="flight-map-point flight-map-point-from"
          style={{
            left: `${route.from.x}%`,
            top: `${route.from.y}%`,
          }}
        >

          <span className="flight-map-marker" />

          <div className="flight-map-airport-label">

            <strong>
              {flight.from.code}
            </strong>

            <span>
              {flight.from.city}
            </span>

          </div>

        </div>

        {/* ===================================
            ARRIVAL
        ==================================== */}

        <div
          className="flight-map-point flight-map-point-to"
          style={{
            left: `${route.to.x}%`,
            top: `${route.to.y}%`,
          }}
        >

          <span className="flight-map-marker" />

          <div className="flight-map-airport-label">

            <strong>
              {flight.to.code}
            </strong>

            <span>
              {flight.to.city}
            </span>

          </div>

        </div>

        {/* ===================================
            AIRCRAFT
        ==================================== */}

        <div
          className="flight-map-plane"
          style={{
            left: `${route.plane.x}%`,
            top: `${route.plane.y}%`,
            transform: `translate(-50%, -50%) rotate(${routeAngle}deg)`,
          }}
        >
          ✈
        </div>

      </div>

      {/* =====================================
          FLIGHT INFO
      ====================================== */}

      <div className="flight-map-info">

        <div className="flight-map-info-icon">
          ✈
        </div>

        <div className="flight-map-info-content">

          <span>
            {flight.airline}
          </span>

          <strong>
            {flight.flightNumber}
          </strong>

        </div>

        <span
          className={`flight-map-status flight-map-status-${flight.status
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {flight.status}
        </span>

      </div>

      {/* =====================================
          MAP CONTROLS
      ====================================== */}

      <div className="flight-map-controls">

        <button
          type="button"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          <FiPlus />
        </button>

        <button
          type="button"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          <FiMinus />
        </button>

        <span />

        <button
          type="button"
          onClick={handleReset}
          aria-label="Reset map"
        >
          <FiNavigation />
        </button>

        <button
          type="button"
          onClick={() =>
            setFullscreen(
              (current) => !current
            )
          }
          aria-label="Toggle fullscreen map"
        >
          <FiMaximize2 />
        </button>

      </div>

    </div>
  );
}