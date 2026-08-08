import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./BookingFooter.scss";

export default function BookingFooter() {
  return (
    <footer className="booking-page-footer">

      {/* COPYRIGHT */}

      <p className="booking-footer-copyright">
        © 2026 indixpert. All Rights Reserved.
      </p>

      {/* LINKS */}

      <nav
        className="booking-footer-links"
        aria-label="Footer navigation"
      >
        <button type="button">
          Privacy Policy
        </button>

        <button type="button">
          Terms & Conditions
        </button>

        <button type="button">
          Contact
        </button>
      </nav>

      {/* SOCIAL */}

      <div className="booking-footer-social">

        <button
          type="button"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </button>

        <button
          type="button"
          aria-label="Twitter"
        >
          <FaTwitter />
        </button>

        <button
          type="button"
          aria-label="Instagram"
        >
          <FaInstagram />
        </button>

      </div>

    </footer>
  );
}