"use client";

import { useState } from "react";

import PaymentActionMenu from "../PaymentActionMenu/PaymentActionMenu";

import {
  FaPlane,
  FaCloud,
  FaPaperPlane,
} from "react-icons/fa";

import {
  FiMoreVertical,
} from "react-icons/fi";

import "./PaymentRow.scss";

const airlineIcons = {
  "CloudNine Airlines": {
    icon: <FaCloud />,
    color: "#4F8EF7",
    bg: "#EEF5FF",
  },

  "QuickWing Air": {
    icon: <FaPaperPlane />,
    color: "#E4C66D",
    bg: "#FFF8E4",
  },

  "SkyHigh Airlines": {
    icon: <FaPlane />,
    color: "#43C47C",
    bg: "#ECFFF3",
  },

  "FlyFast Airways": {
    icon: <FaPlane />,
    color: "#FF7D6B",
    bg: "#FFF1EE",
  },

  AeroJet: {
    icon: <FaPaperPlane />,
    color: "#8E5AF7",
    bg: "#F5F0FF",
  },

  "Nimbus Airlines": {
    icon: <FaCloud />,
    color: "#00A7C4",
    bg: "#EAFBFF",
  },

  "JetStream Aviation": {
    icon: <FaPlane />,
    color: "#5B8DEF",
    bg: "#EEF5FF",
  },
};

export default function PaymentRow({ payment }) {

  const [openMenu, setOpenMenu] = useState(false);

  return (

    <div className="payment-row">

      {/* Passenger */}

      <div className="passenger">

        <div
          className="avatar"
          style={{
            background: airlineIcons[payment.airline].bg,
            color: airlineIcons[payment.airline].color,
          }}
        >
          {airlineIcons[payment.airline].icon}
        </div>

        <div className="passenger-info">

          <h4>{payment.name}</h4>

          <span>ID #{payment.id}</span>

        </div>

      </div>

      {/* Booking */}

      <div className="booking">

        {payment.bookingCode}

      </div>

      {/* Airline */}

      <div className="airline">

        {payment.airline}

      </div>

      {/* Route */}

      <div className="route">

        {payment.route}

      </div>

      {/* Date */}

      <div className="date">

        {payment.billingDate}

      </div>

      {/* Amount */}

      <div className="amount">

        {payment.amount}

      </div>

      {/* Status */}

      <div>

        <span
          className={`status ${payment.status.toLowerCase()}`}
        >
          {payment.status}
        </span>

      </div>

      {/* Action */}

      <div
        className="action"
        style={{ position: "relative" }}
      >

        <button
          className="action-btn"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FiMoreVertical />
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