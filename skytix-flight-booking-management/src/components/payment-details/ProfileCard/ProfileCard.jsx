"use client";

import {
  FiMoreHorizontal,
  FiAward,
  FiCheck,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import "./ProfileCard.scss";

/* ========================================
   MEMBER BENEFITS
======================================== */

const benefits = [
  "Priority Boarding",
  "Extra Baggage Allowance",
  "Lounge Access",
  "Complimentary In-Flight Meals",
  "Free Seat Selection",
];

/* ========================================
   PROFILE DETAILS
======================================== */

const profileDetails = {
  1: {
    membership: "Gold Member",
    points: "25,000",
    email: "paris.milton@example.com",
    phone: "+1 234 567 8901",
  },

  2: {
    membership: "Gold Member",
    points: "21,800",
    email: "elena.winston@example.com",
    phone: "+1 234 567 8902",
  },

  3: {
    membership: "Gold Member",
    points: "19,450",
    email: "roger.piston@example.com",
    phone: "+1 234 567 8903",
  },

  4: {
    membership: "Gold Member",
    points: "18,200",
    email: "paula.ortega@example.com",
    phone: "+1 234 567 8904",
  },

  5: {
    membership: "Gold Member",
    points: "27,100",
    email: "jackie.long@example.com",
    phone: "+1 234 567 8905",
  },

  6: {
    membership: "Gold Member",
    points: "16,750",
    email: "oscar.bolster@example.com",
    phone: "+1 234 567 8906",
  },

  7: {
    membership: "Gold Member",
    points: "20,400",
    email: "yuri.wakamura@example.com",
    phone: "+1 234 567 8907",
  },

  8: {
    membership: "Gold Member",
    points: "22,900",
    email: "santo.reagan@example.com",
    phone: "+1 234 567 8908",
  },

  9: {
    membership: "Gold Member",
    points: "17,600",
    email: "vicky.wisteria@example.com",
    phone: "+1 234 567 8909",
  },

  10: {
    membership: "Gold Member",
    points: "24,300",
    email: "adam.stewart@example.com",
    phone: "+1 234 567 8910",
  },

  11: {
    membership: "Gold Member",
    points: "15,900",
    email: "marcus.levin@example.com",
    phone: "+1 234 567 8911",
  },

  12: {
    membership: "Gold Member",
    points: "23,650",
    email: "lindsey.carder@example.com",
    phone: "+1 234 567 8912",
  },
};

/* ========================================
   PROFILE CARD
======================================== */

export default function ProfileCard({
  payment,
}) {
  if (!payment) {
    return null;
  }

  const profile =
    profileDetails[payment.id] || {
      membership: "Gold Member",
      points: "0",
      email: "member@example.com",
      phone: "Not available",
    };

  /* ========================================
     MAIL
  ======================================== */

  const handleMail = () => {
    window.location.href =
      `mailto:${profile.email}`;
  };

  /* ========================================
     MESSAGE
  ======================================== */

  const handleMessage = () => {
    if (
      !profile.phone ||
      profile.phone === "Not available"
    ) {
      return;
    }

    const phoneNumber =
      profile.phone.replace(
        /[^\d+]/g,
        ""
      );

    window.location.href =
      `sms:${phoneNumber}`;
  };

  return (
    <aside className="profile-card">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="profile-card-header">

        <h3>Profile</h3>

        <button
          type="button"
          className="profile-card-more"
          aria-label="More profile options"
        >
          <FiMoreHorizontal />
        </button>

      </div>

      {/* =====================================
          AVATAR
      ====================================== */}

      <div className="profile-card-avatar" />

      {/* =====================================
          NAME
      ====================================== */}

      <div className="profile-card-name">

        <h2>{payment.name}</h2>

        <span
          className="profile-verified"
          aria-label="Verified member"
        >
          <FiCheck />
        </span>

      </div>

      {/* =====================================
          GOLD MEMBERSHIP CARD
      ====================================== */}

      <div className="profile-membership-card">

        {/* GOLD TOP */}

        <div className="profile-membership-top">

          <div className="profile-membership-badge">
            <FiAward />

            <span>
              {profile.membership}
            </span>
          </div>

          <div className="profile-membership-watermark">
            <FiAward />
          </div>

          <div className="profile-points">

            <span className="profile-points-icon">
              <span />
              <span />
              <span />
            </span>

            <strong>
              {profile.points}
            </strong>

            <span className="profile-points-label">
              Points
            </span>

          </div>

        </div>

        {/* BENEFITS */}

        <div className="profile-benefits">

          {benefits.map((benefit) => (
            <div
              className="profile-benefit"
              key={benefit}
            >

              <span className="profile-benefit-check">
                <FiCheck />
              </span>

              <span className="profile-benefit-text">
                {benefit}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* =====================================
          CONTACT INFORMATION
      ====================================== */}

      <div className="profile-contact-card">

        <div className="profile-contact-row">

          <div className="profile-contact-icon">
            <FiMail />
          </div>

          <div className="profile-contact-info">

            <span>Email</span>

            <strong>
              {profile.email}
            </strong>

          </div>

        </div>

        <div className="profile-contact-row">

          <div className="profile-contact-icon">
            <FiPhone />
          </div>

          <div className="profile-contact-info">

            <span>
              Phone Number
            </span>

            <strong>
              {profile.phone}
            </strong>

          </div>

        </div>

      </div>

      {/* =====================================
          ACTIONS
      ====================================== */}

      <div className="profile-card-actions">

        <button
          type="button"
          className="profile-mail-button"
          onClick={handleMail}
        >
          Mail
        </button>

        <button
          type="button"
          className="profile-message-button"
          onClick={handleMessage}
          disabled={
            profile.phone ===
            "Not available"
          }
        >
          Message
        </button>

      </div>

    </aside>
  );
}