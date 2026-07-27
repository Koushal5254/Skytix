import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./BookingHeader.scss";

export default function BookingHeader() {
  return (
    <div className="booking-header">

      <div className="booking-title">
        <h1>Bookings</h1>
      </div>

      <div className="header-right">

        <button className="icon-btn">
          <FiBell />
          <span className="notification-dot"></span>
        </button>

        <button className="icon-btn">
          <FiHelpCircle />
        </button>

        <button className="icon-btn">
          <FiSettings />
        </button>

        <div className="profile-box">

          <div className="profile-avatar">
            ⚛️
          </div>

          <div className="profile-info">
            <h4>Martin Septimus</h4>
            <p>Admin</p>
          </div>

          <FiChevronDown />

        </div>

      </div>

    </div>
  );
}