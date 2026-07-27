"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./ScheduleFooter.scss";

export default function ScheduleFooter() {
  return (
    <footer className="schedule-footer">

      {/* COPYRIGHT */}

      <div className="schedule-footer-copyright">
        © 2028 Skytix. All Rights Reserved.
      </div>

      {/* LINKS */}

      <nav
        className="schedule-footer-links"
        aria-label="Footer links"
      >
        <a href="#">
          Privacy Policy
        </a>

        <a href="#">
          Terms & Conditions
        </a>

        <a href="#">
          Contact
        </a>
      </nav>

      {/* SOCIAL */}

      <div className="schedule-footer-social">

        <a
          href="#"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>

        <a
          href="#"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

      </div>

    </footer>
  );
}