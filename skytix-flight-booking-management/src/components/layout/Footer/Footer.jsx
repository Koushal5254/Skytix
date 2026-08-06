"use client";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

import { FiPlay } from "react-icons/fi";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="layout-footer">

      {/* LEFT SIDE */}

      <div className="layout-footer-left">

        <p className="layout-footer-copyright">
          Copyright © 2026 indixpert
        </p>

        <nav
          className="layout-footer-links"
          aria-label="Footer navigation"
        >
          <button type="button">
            Privacy Policy
          </button>

          <button type="button">
            Term and conditions
          </button>

          <button type="button">
            Contact
          </button>
        </nav>

      </div>

      {/* RIGHT SIDE */}

      <div className="layout-footer-socials">

        <button
          type="button"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </button>

        <button
          type="button"
          aria-label="X"
        >
          <FaXTwitter />
        </button>

        <button
          type="button"
          aria-label="Instagram"
        >
          <FaInstagram />
        </button>

        <button
          type="button"
          aria-label="YouTube"
        >
          <FaYoutube />
        </button>

        <button
          type="button"
          aria-label="Media"
        >
          <FiPlay />
        </button>

        <button
          type="button"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </button>

      </div>

    </footer>
  );
}