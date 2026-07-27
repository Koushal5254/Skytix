import { flights } from "@/data/flights";

import DetailHeader from "@/components/schedule-detail/DetailHeader/DetailHeader";
import FlightSummary from "@/components/schedule-detail/FlightSummary/FlightSummary";
// import FlightTimeline from "@/components/schedule-detail/FlightTimeline/FlightTimeline";
import JourneyTimeline from "@/components/schedule-detail/JourneyTimeline/JourneyTimeline";

export default async function ScheduleDetailPage({ params }) {
  const { id } = await params;

  const flight = flights.find(
    (item) => item.id === Number(id)
  );

  if (!flight) {
    return <h2>Flight Not Found</h2>;
  }

  return (
    <div className="schedule-detail-page">

      <DetailHeader />

      <FlightSummary flight={flight} />

      <JourneyTimeline flight={flight} />

    </div>
  );
}