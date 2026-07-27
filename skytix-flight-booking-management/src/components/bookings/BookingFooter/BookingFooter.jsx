import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./BookingFooter.scss";

export default function BookingFooter() {
  return (
    <footer className="booking-footer">

      <p>
        © 2028 Skytix. All Rights Reserved.
      </p>

      <div className="footer-links">

        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Contact</span>

      </div>

      <div className="footer-social">

        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />

      </div>

    </footer>
  );
}