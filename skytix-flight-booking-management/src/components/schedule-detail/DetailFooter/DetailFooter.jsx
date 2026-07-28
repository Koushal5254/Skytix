"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import "./DetailFooter.scss";

export default function DetailFooter() {
  return (
    <footer className="detail-footer">

      <div className="detail-footer-copy">
        Copyright © 2024 Peterdraw
      </div>

      <nav className="detail-footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Term and conditions</a>
        <a href="#">Contact</a>
      </nav>

      <div className="detail-footer-social">
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>

        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>

        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>

        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>

        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

    </footer>
  );
}   