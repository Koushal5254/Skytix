"use client";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./ScheduleHeader.scss";

export default function ScheduleHeader() {
  return (
    <header className="schedule-header">

      {/* PAGE TITLE */}

      <div className="schedule-header-title">
        <h1>Schedule</h1>
      </div>

      {/* HEADER ACTIONS */}

      <div className="schedule-header-actions">

        <button
          type="button"
          className="schedule-header-icon-btn schedule-notification-btn"
          aria-label="Notifications"
        >
          <FiBell />

          <span className="schedule-notification-dot" />
        </button>

        <button
          type="button"
          className="schedule-header-icon-btn"
          aria-label="Help"
        >
          <FiHelpCircle />
        </button>

        <button
          type="button"
          className="schedule-header-icon-btn"
          aria-label="Settings"
        >
          <FiSettings />
        </button>

        {/* PROFILE */}

        <button
          type="button"
          className="schedule-profile"
        >
          <span
            className="schedule-profile-avatar"
            aria-hidden="true"
          />

          <span className="schedule-profile-info">
            <strong>Martin Septimus</strong>
            <small>Admin</small>
          </span>

          <FiChevronDown
            className="schedule-profile-arrow"
          />
        </button>

      </div>

    </header>
  );
}