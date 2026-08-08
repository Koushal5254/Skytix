"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  FiMail,
  FiArrowLeft,
  FiKey,
} from "react-icons/fi";

import "./ForgotPasswordForm.scss";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ========================================
     VALIDATION
  ======================================== */

  const validateEmail = () => {
    const cleanEmail =
      email.trim().toLowerCase();

    if (!cleanEmail) {
      setError(
        "Email address is required."
      );

      return false;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(cleanEmail)
    ) {
      setError(
        "Enter a valid email address."
      );

      return false;
    }

    setError("");

    return true;
  };

  /* ========================================
     SUBMIT
  ======================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (!validateEmail()) {
      return;
    }

    const cleanEmail =
      email.trim().toLowerCase();

    setLoading(true);
    setError("");

    /*
      FRONTEND DEMO ONLY

      Later replace this timeout with
      the backend forgot-password API.

      The backend should send an OTP
      to the supplied email address.
    */

    setTimeout(() => {
      setLoading(false);

      router.push(
        `/auth/verify?flow=reset&email=${encodeURIComponent(
          cleanEmail
        )}`
      );
    }, 700);
  };

  /* ========================================
     EMAIL CHANGE
  ======================================== */

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (error) {
      setError("");
    }
  };

  return (
    <div className="forgot-card">

      {/* MOBILE BRAND */}

      <span className="forgot-mobile-brand">
        Skytix
      </span>

      {/* ICON */}

      <div className="forgot-icon">
        <FiKey />
      </div>

      {/* HEADING */}

      <div className="forgot-heading">

        <h1>
          Forgot Password?
        </h1>

        <p>
          No worries. Enter the email
          address associated with your
          Skytix account and we'll send
          you a verification code.
        </p>

      </div>

      {/* FORM */}

      <form
        className="forgot-form"
        onSubmit={handleSubmit}
        noValidate
      >

        {/* EMAIL */}

        <div className="forgot-field">

          <label htmlFor="forgot-email">
            Email Address
          </label>

          <div
            className={`forgot-input ${
              error
                ? "has-error"
                : ""
            }`}
          >

            <FiMail />

            <input
              id="forgot-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
              disabled={loading}
            />

          </div>

          {/* ERROR */}

          {error && (
            <span
              className="forgot-error"
              role="alert"
            >
              {error}
            </span>
          )}

        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          className="forgot-submit"
          disabled={loading}
        >
          {loading
            ? "Sending Code..."
            : "Send Verification Code"}
        </button>

      </form>

      {/* BACK */}

      <Link
        href="/auth/login"
        className="forgot-back"
      >
        <FiArrowLeft />

        <span>
          Back to Sign In
        </span>
      </Link>

    </div>
  );
}