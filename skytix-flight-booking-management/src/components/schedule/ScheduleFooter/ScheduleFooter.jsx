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

      <div className="footer-left">
        © 2024 Peterdraw. All Rights Reserved.
      </div>

      <div className="footer-center">

        <a href="#">
          Privacy Policy
        </a>

        <a href="#">
          Terms & Conditions
        </a>

        <a href="#">
          Contact Us
        </a>

      </div>

      <div className="footer-right">

        <a href="#">
          <FaFacebookF />
        </a>

        <a href="#">
          <FaTwitter />
        </a>

        <a href="#">
          <FaInstagram />
        </a>

      </div>

    </footer>
  );
}