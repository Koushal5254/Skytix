import { notFound } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import ScheduleHeader from "@/components/schedule/ScheduleHeader/ScheduleHeader";

import DetailHeader from "@/components/schedule-detail/DetailHeader/DetailHeader";
import FlightSummary from "@/components/schedule-detail/FlightSummary/FlightSummary";
import FlightTimeline from "@/components/schedule-detail/FlightTimeline/FlightTimeline";
import DetailFooter from "@/components/schedule-detail/DetailFooter/DetailFooter";

import { flights } from "@/data/flights";

import "@/styles/schedule-detail.scss";

export default async function FlightDetailPage({ params }) {
  const { id } = await params;

  const flight = flights.find(
    (item) => String(item.id) === String(id)
  );

  if (!flight) {
    notFound();
  }

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="flight-detail-page">

        <ScheduleHeader showDescription={false} />

        <DetailHeader flight={flight} />

        <FlightSummary flight={flight} />

        <FlightTimeline flight={flight} />

        <DetailFooter />

      </div>
    </MainLayout>
  );
}