"use client";

import Header from "@/components/layout/Header/Header";

import "./ScheduleHeader.scss";

export default function ScheduleHeader({
  showDescription = true,
  setOpen,
}) {
  return (
    <div className="schedule-page-header">
      <Header
        title="Schedule"
        description={
          showDescription
            ? "Manage your flights, bookings and schedules."
            : ""
        }
        setOpen={setOpen}
      />
    </div>
  );
}