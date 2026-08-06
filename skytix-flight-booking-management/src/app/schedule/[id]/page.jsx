import { notFound } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import ScheduleHeader from "@/components/schedule/ScheduleHeader/ScheduleHeader";

import DetailHeader from "@/components/schedule-detail/DetailHeader/DetailHeader";
import FlightSummary from "@/components/schedule-detail/FlightSummary/FlightSummary";
import FlightTimeline from "@/components/schedule-detail/FlightTimeline/FlightTimeline";
import DetailFooter from "@/components/schedule-detail/DetailFooter/DetailFooter";

import { flights } from "@/data/flights";

import "@/styles/schedule-detail.scss";

/* ========================================
   FLIGHT DETAIL PAGE
======================================== */

export default async function FlightDetailPage({
  params,
}) {
  const { id } = await params;

  /* ========================================
     FIND FLIGHT
  ======================================== */

  const flight = flights.find(
    (item) =>
      String(item.id) === String(id)
  );

  /* ========================================
     NOT FOUND
  ======================================== */

  if (!flight) {
    notFound();
  }

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <section className="flight-detail-page">

        {/* =================================
            SCHEDULE HEADER
        ================================= */}

        <ScheduleHeader
          showDescription={false}
        />

        {/* =================================
            DETAIL CONTENT
        ================================= */}

        <div className="flight-detail-content">

          <DetailHeader
            flight={flight}
          />

          <FlightSummary
            flight={flight}
          />

          <FlightTimeline
            flight={flight}
          />

        </div>

        {/* =================================
            FOOTER
        ================================= */}

        <DetailFooter />

      </section>
    </MainLayout>
  );
}