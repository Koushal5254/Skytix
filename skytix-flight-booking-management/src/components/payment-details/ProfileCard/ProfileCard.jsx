"use client";

import {
  FaReact,
  FaCrown,
  FaPlaneDeparture,
  FaSuitcaseRolling,
  FaUtensils,
  FaChair,
} from "react-icons/fa";

import {
  FiMail,
  FiMessageCircle,
  FiCheck,
} from "react-icons/fi";

import "./ProfileCard.scss";

const benefits = [
  {
    id: 1,
    icon: <FaPlaneDeparture />,
    label: "Priority Boarding",
  },
  {
    id: 2,
    icon: <FaSuitcaseRolling />,
    label: "Extra Baggage Allowance",
  },
  {
    id: 3,
    icon: <FiCheck />,
    label: "Lounge Access",
  },
  {
    id: 4,
    icon: <FaUtensils />,
    label: "Complimentary Meals",
  },
  {
    id: 5,
    icon: <FaChair />,
    label: "Free Seat Selection",
  },
];

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

export default function ProfileCard({ payment }) {
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

  const handleMail = () => {
    window.location.href = `mailto:${profile.email}`;
  };

  const handleMessage = () => {
    window.location.href = `sms:${profile.phone.replace(/\s/g, "")}`;
  };

  return (
    <aside className="member-profile-card">

      {/* PROFILE */}

      <div className="member-profile-top">

        <div className="member-avatar">
          <FaReact />
        </div>

        <h2>{payment.name}</h2>

        <div className="gold-member-badge">
          <FaCrown />

          <span>{profile.membership}</span>
        </div>

      </div>

      {/* POINTS */}

      <div className="member-points">

        <div className="points-heading">

          <span>Total Points</span>

          <FaCrown />

        </div>

        <strong>{profile.points}</strong>

        <p>Reward Points</p>

      </div>

      {/* BENEFITS */}

      <div className="member-section">

        <div className="member-section-title">
          <h3>Member Benefits</h3>
        </div>

        <div className="member-benefits">

          {benefits.map((benefit) => (
            <div
              className="member-benefit"
              key={benefit.id}
            >

              <div className="member-benefit-icon">
                {benefit.icon}
              </div>

              <span>{benefit.label}</span>

              <div className="member-benefit-check">
                <FiCheck />
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* CONTACT */}

      <div className="member-contact">

        <h3>Contact Details</h3>

        <div className="contact-detail">

          <span>Email</span>

          <strong>
            {profile.email}
          </strong>

        </div>

        <div className="contact-detail">

          <span>Phone Number</span>

          <strong>
            {profile.phone}
          </strong>

        </div>

      </div>

      {/* ACTIONS */}

      <div className="member-actions">

        <button
          type="button"
          className="member-mail-button"
          onClick={handleMail}
        >
          <FiMail />

          Mail
        </button>

        <button
          type="button"
          className="member-message-button"
          onClick={handleMessage}
        >
          <FiMessageCircle />

          Message
        </button>

      </div>

    </aside>
  );
}