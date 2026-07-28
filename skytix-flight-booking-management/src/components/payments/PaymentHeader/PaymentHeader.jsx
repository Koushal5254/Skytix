"use client";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./PaymentHeader.scss";

export default function PaymentHeader() {
  return (
    <section className="payment-page-header">

      <div className="payment-page-title">
        <h1>Payments</h1>

        <p>
          Manage and track all payment transactions.
        </p>
      </div>

      <div className="payment-page-header-actions">

        <button
          type="button"
          className="payment-header-icon-btn"
          aria-label="Help"
        >
          <FiHelpCircle />
        </button>

        <button
          type="button"
          className="payment-header-icon-btn payment-notification-btn"
          aria-label="Notifications"
        >
          <FiBell />

          <span className="payment-notification-dot" />
        </button>

        <button
          type="button"
          className="payment-header-icon-btn"
          aria-label="Settings"
        >
          <FiSettings />
        </button>

        <div className="payment-profile">

          <div className="payment-profile-avatar">
            M
          </div>

          <div className="payment-profile-info">
            <h4>Martin Septimus</h4>
            <span>Admin</span>
          </div>

          <FiChevronDown className="payment-profile-arrow" />

        </div>

      </div>

    </section>
  );
}