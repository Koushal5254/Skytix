"use client";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import { FaReact } from "react-icons/fa";

import "./ScheduleHeader.scss";

export default function ScheduleHeader({
  showDescription = true,
}) {
  return (
    <header className="schedule-header">

      <div className="schedule-header-left">

        <h1>Schedule</h1>

        {showDescription && (
          <p>
            Manage your flights, bookings and schedules.
          </p>
        )}

      </div>

      <div className="schedule-header-right">

        <button
          type="button"
          className="schedule-icon-btn"
          aria-label="Help"
        >
          <FiHelpCircle />
        </button>

        <button
          type="button"
          className="schedule-icon-btn notification-btn"
          aria-label="Notifications"
        >
          <FiBell />

          <span className="notification-dot" />
        </button>

        <button
          type="button"
          className="schedule-icon-btn"
          aria-label="Settings"
        >
          <FiSettings />
        </button>

        <button
          type="button"
          className="schedule-profile-card"
        >

          <div className="schedule-avatar">
            <FaReact />
          </div>

          <div className="schedule-profile-info">

            <h4>
              Martin Septimus
            </h4>

            <span>
              Admin
            </span>

          </div>

          <FiChevronDown className="profile-chevron" />

        </button>

      </div>

    </header>
  );
}