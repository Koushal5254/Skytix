"use client";

import { useMemo, useState } from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import FlightList from "@/components/FlightTracking/FlightList/FlightList";
import FlightMap from "@/components/FlightTracking/FlightMap/FlightMap";
import FlightDetails from "@/components/FlightTracking/FlightDetails/FlightDetails";
import FlightStats from "@/components/FlightTracking/FlightStats/FlightStats";
import AircraftDetails from "@/components/FlightTracking/AircraftDetails/AircraftDetails";

import {
  flights as initialFlights,
} from "@/components/FlightTracking/data/flights";

import "./page.scss";

export default function FlightTrackingPage() {
  const [flights, setFlights] = useState(() =>
    initialFlights.map((flight) => ({
      ...flight,
      from: { ...flight.from },
      to: { ...flight.to },
      aircraft: { ...flight.aircraft },
    }))
  );

  const [selectedFlightId, setSelectedFlightId] =
    useState(initialFlights[0]?.id ?? null);

  const selectedFlight = useMemo(() => {
    return (
      flights.find(
        (flight) =>
          flight.id === selectedFlightId
      ) ||
      flights[0] ||
      null
    );
  }, [flights, selectedFlightId]);

  const handleSelectFlight = (flightId) => {
    setSelectedFlightId(flightId);
  };

  const handleAddFlight = () => {
    const nextId =
      flights.reduce(
        (highest, flight) =>
          Math.max(highest, flight.id),
        0
      ) + 1;

    const newFlight = {
      id: nextId,

      flightNumber: `SK${String(
        1000 + nextId
      )}`,

      airline: "Skytix Airlines",

      from: {
        code: "DEL",
        city: "New Delhi",
        time: "9:00 AM",
      },

      to: {
        code: "DXB",
        city: "Dubai",
        time: "11:30 AM",
      },

      date: "July 1, 2028",

      status: "Scheduled",

      duration: "4 h 00 m",

      speed: "0",
      speedUnit: "km/h",

      altitude: "0",
      altitudeUnit: "feet",

      passengers: 208,

      aircraft: {
        type: "Airbus A350",
        registration: `VT-SK${nextId}`,
      },
    };

    setFlights((current) => [
      newFlight,
      ...current,
    ]);

    setSelectedFlightId(newFlight.id);
  };

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <main className="flight-tracking-page">

        <Header
          title="Flight Tracking"
          showSearch={false}
        />

        <section className="flight-tracking-workspace">

          <aside className="flight-tracking-list-column">
            <FlightList
              flights={flights}
              selectedFlightId={
                selectedFlightId
              }
              onSelectFlight={
                handleSelectFlight
              }
              onAddFlight={handleAddFlight}
            />
          </aside>

          <section className="flight-tracking-content">

            <div className="flight-tracking-map-area">
              <FlightMap
                flight={selectedFlight}
              />
            </div>

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

        <Footer />

      </main>
    </MainLayout>
  );
}