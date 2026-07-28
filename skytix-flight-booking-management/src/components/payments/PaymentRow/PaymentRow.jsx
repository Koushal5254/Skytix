"use client";

import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";

import PaymentActionMenu from "../PaymentActionMenu/PaymentActionMenu";

import "./PaymentRow.scss";

export default function PaymentRow({ payment }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleActionClick = () => {
    setOpenMenu((current) => !current);
  };

  return (
    <div className="payment-row">
      {/* NAME */}
      <div className="payment-customer">
        <div className="payment-customer-avatar" />

        <div className="payment-customer-info">
          <h4>{payment.name}</h4>
        </div>
      </div>

      {/* BOOKING CODE */}
      <div className="payment-cell payment-booking-code">
        {payment.bookingCode}
      </div>

      {/* AIRLINE */}
      <div className="payment-cell payment-airline">
        {payment.airline}
      </div>

      {/* ROUTE */}
      <div className="payment-cell payment-route">
        {payment.route}
      </div>

      {/* BILLING DATE */}
      <div className="payment-cell payment-date">
        {payment.billingDate}
      </div>

      {/* AMOUNT */}
      <div className="payment-cell payment-amount">
        {payment.amount}
      </div>

      {/* STATUS */}
      <div className="payment-status-cell">
        <span
          className={`payment-status payment-status--${payment.status.toLowerCase()}`}
        >
          {payment.status}
        </span>
      </div>

      {/* ACTION */}
      <div className="payment-row-action">
        <button
          type="button"
          className="payment-edit-btn"
          aria-label={`Edit transaction for ${payment.name}`}
          aria-expanded={openMenu}
          onClick={handleActionClick}
        >
          <FiEdit3 />
        </button>

        <PaymentActionMenu
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          paymentId={payment.id}
        />
      </div>
    </div>
  );
}