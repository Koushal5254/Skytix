"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FiPlus,
  FiMinus,
  FiMaximize,
  FiCrosshair,
} from "react-icons/fi";

import "./FlightMap.scss";

const airportPositions = {
  JFK: { x: 79, y: 46 },
  LAX: { x: 20, y: 65 },
  LHR: { x: 87, y: 24 },
  HND: { x: 90, y: 55 },
  SFO: { x: 17, y: 49 },
  SYD: { x: 82, y: 80 },
  SIN: { x: 75, y: 70 },
  DXB: { x: 68, y: 53 },
  CDG: { x: 84, y: 28 },
  HKG: { x: 84, y: 62 },
  DEL: { x: 64, y: 57 },
};

const fallbackFrom = {
  x: 20,
  y: 65,
};

const fallbackTo = {
  x: 79,
  y: 46,
};

export default function FlightMap({
  flight,
}) {
  const [zoom, setZoom] =
    useState(1);

  const [fullscreen, setFullscreen] =
    useState(false);

  useEffect(() => {
    if (!fullscreen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape
      );
  }, [fullscreen]);

  const positions = useMemo(() => {
    if (!flight) {
      return null;
    }

    return {
      from:
        airportPositions[
          flight.from.code
        ] || fallbackFrom,

      to:
        airportPositions[
          flight.to.code
        ] || fallbackTo,
    };
  }, [flight]);

  const route = useMemo(() => {
    if (!positions) {
      return null;
    }

    const start = positions.from;
    const end = positions.to;

    const middleX =
      (start.x + end.x) / 2;

    const middleY =
      Math.min(start.y, end.y) - 15;

    return {
      start,
      end,
      middleX,
      middleY,

      path: `M ${start.x} ${start.y}
             Q ${middleX} ${middleY}
             ${end.x} ${end.y}`,
    };
  }, [positions]);

  if (!flight || !route) {
    return (
      <div className="flight-map flight-map-empty">
        Select a flight
      </div>
    );
  }

  const planeX =
    route.start.x +
    (route.end.x - route.start.x) *
      0.62;

  const planeY =
    route.start.y +
    (route.end.y - route.start.y) *
      0.62 -
    10;

  return (
    <div
      className={`flight-map ${
        fullscreen
          ? "flight-map-fullscreen"
          : ""
      }`}
    >

      <div
        className="flight-map-stage"
        style={{
          transform: `scale(${zoom})`,
        }}
      >

        <div className="flight-map-geography">

          <span className="geo-canada" />
          <span className="geo-usa" />
          <span className="geo-mexico" />
          <span className="geo-water" />

          <span className="geo-line geo-line-1" />
          <span className="geo-line geo-line-2" />
          <span className="geo-line geo-line-3" />
          <span className="geo-line geo-line-4" />
          <span className="geo-line geo-line-5" />

          <span className="map-city map-city-vancouver">
            Vancouver
          </span>

          <span className="map-city map-city-edmonton">
            Edmonton
          </span>

          <span className="map-city map-city-calgary">
            Calgary
          </span>

          <span className="map-city map-city-san-francisco">
            San Francisco
          </span>

          <span className="map-city map-city-los-angeles">
            Los Angeles
          </span>

          <span className="map-city map-city-houston">
            Houston
          </span>

          <span className="map-city map-city-toronto">
            Toronto
          </span>

          <span className="map-city map-city-new-york">
            New York
          </span>

          <span className="map-city map-city-boston">
            Boston
          </span>

          <span className="map-country map-country-canada">
            Canada
          </span>

          <span className="map-country map-country-us">
            United States
          </span>

          <span className="map-country map-country-mexico">
            Mexico
          </span>

        </div>

        <svg
          className="flight-map-route"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={route.path} />
        </svg>

        <div
          className="flight-map-airport flight-map-airport-from"
          style={{
            left: `${route.start.x}%`,
            top: `${route.start.y}%`,
          }}
        >
          <span className="flight-map-airport-code">
            {flight.from.code}
          </span>

          <i />
        </div>

        <div
          className="flight-map-airport flight-map-airport-to"
          style={{
            left: `${route.end.x}%`,
            top: `${route.end.y}%`,
          }}
        >
          <span className="flight-map-airport-code">
            {flight.to.code}
          </span>

          <i />
        </div>

        <div
          className="flight-map-plane"
          style={{
            left: `${planeX}%`,
            top: `${planeY}%`,
          }}
        >
          ✈
        </div>

      </div>

      <div className="flight-map-controls">

        <div className="flight-map-zoom">

          <button
            type="button"
            onClick={() =>
              setZoom((current) =>
                Math.min(
                  current + 0.1,
                  1.4
                )
              )
            }
            aria-label="Zoom in"
          >
            <FiPlus />
          </button>

          <span />

          <button
            type="button"
            onClick={() =>
              setZoom((current) =>
                Math.max(
                  current - 0.1,
                  0.8
                )
              )
            }
            aria-label="Zoom out"
          >
            <FiMinus />
          </button>

        </div>

        <button
          type="button"
          className="flight-map-control"
          onClick={() =>
            setFullscreen(
              (current) => !current
            )
          }
          aria-label="Toggle fullscreen"
        >
          <FiMaximize />
        </button>

        <button
          type="button"
          className="flight-map-control flight-map-location"
          onClick={() => setZoom(1)}
          aria-label="Reset map"
        >
          <FiCrosshair />
        </button>

      </div>

    </div>
  );
}