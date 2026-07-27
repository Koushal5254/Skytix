"use client";

import { useState } from "react";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./BookingHeader.scss";

export default function BookingHeader() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="booking-page-header">

      <div className="booking-page-title">
        <h1>Bookings</h1>
      </div>

      <div className="booking-header-right">

        <button
          type="button"
          className="booking-header-icon-btn"
          aria-label="Notifications"
        >
          <FiBell />
          <span className="booking-notification-dot" />
        </button>

        <button
          type="button"
          className="booking-header-icon-btn"
          aria-label="Help"
        >
          <FiHelpCircle />
        </button>

        <button
          type="button"
          className="booking-header-icon-btn"
          aria-label="Settings"
        >
          <FiSettings />
        </button>

        <div className="booking-profile-wrapper">

          <button
            type="button"
            className="booking-profile-box"
            onClick={() =>
              setProfileOpen((current) => !current)
            }
            aria-expanded={profileOpen}
          >
            <div className="booking-profile-avatar" />

            <div className="booking-profile-info">
              <h4>Martin Septimus</h4>
              <p>Admin</p>
            </div>

            <FiChevronDown
              className={`booking-profile-chevron ${
                profileOpen ? "open" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className="booking-profile-dropdown">
              <button
                type="button"
                onClick={() => setProfileOpen(false)}
              >
                My Profile
              </button>

              <button
                type="button"
                onClick={() => setProfileOpen(false)}
              >
                Settings
              </button>

              <button
                type="button"
                onClick={() => setProfileOpen(false)}
              >
                Sign Out
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}