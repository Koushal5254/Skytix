"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [agreeTerms, setAgreeTerms] =
    useState(false);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] =
    useState(false);

  /* ========================================
     INPUT CHANGE
  ======================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }

    if (errors.form) {
      setErrors((previous) => ({
        ...previous,
        form: "",
      }));
    }
  };

  /* ========================================
     VALIDATION
  ======================================== */

  const validateForm = () => {
    const newErrors = {};

    const firstName =
      formData.firstName.trim();

    const lastName =
      formData.lastName.trim();

    const email =
      formData.email
        .trim()
        .toLowerCase();

    if (!firstName) {
      newErrors.firstName =
        "First name is required.";
    }

    if (!lastName) {
      newErrors.lastName =
        "Last name is required.";
    }

    if (!email) {
      newErrors.email =
        "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password =
        "Password is required.";
    } else if (
      formData.password.length < 8
    ) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!agreeTerms) {
      newErrors.terms =
        "Please accept the Terms & Conditions.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* ========================================
     REGISTER
  ======================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const cleanEmail =
      formData.email
        .trim()
        .toLowerCase();

    const pendingUser = {
      firstName:
        formData.firstName.trim(),

      lastName:
        formData.lastName.trim(),

      name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,

      email: cleanEmail,

      role: "Administrator",
    };

    /*
      Temporary frontend registration.

      We only store the pending profile
      in sessionStorage.

      Password is intentionally NOT stored.

      Later this section can be replaced
      with the registration API.
    */

    setTimeout(() => {
      try {
        sessionStorage.setItem(
          "skytix_pending_registration",
          JSON.stringify(pendingUser)
        );

        router.push(
          `/auth/verify?flow=register&email=${encodeURIComponent(
            cleanEmail
          )}`
        );
      } catch (error) {
        console.error(
          "Unable to prepare registration:",
          error
        );

        setErrors({
          form:
            "Unable to continue registration. Please try again.",
        });

        setLoading(false);
      }
    }, 700);
  };

  return (
    <div className="register-card">

      {/* =====================================
          HEADING
      ===================================== */}

      <div className="register-heading">

        <span className="register-mobile-brand">
          Skytix
        </span>

        <h1>
          Create Account
        </h1>

        <p>
          Create your Skytix account and
          start managing your flights and
          bookings.
        </p>

      </div>

      {/* =====================================
          FORM
      ===================================== */}

      <form
        className="register-form"
        onSubmit={handleSubmit}
        noValidate
      >

        {/* ===================================
            NAME
        =================================== */}

        <div className="register-name-row">

          {/* FIRST NAME */}

          <div className="register-field">

            <label htmlFor="firstName">
              First Name
            </label>

            <div
              className={`register-input ${
                errors.firstName
                  ? "has-error"
                  : ""
              }`}
            >

              <FiUser />

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                value={
                  formData.firstName
                }
                onChange={handleChange}
                autoComplete="given-name"
                disabled={loading}
              />

            </div>

            {errors.firstName && (
              <span className="register-error">
                {errors.firstName}
              </span>
            )}

          </div>

          {/* LAST NAME */}

          <div className="register-field">

            <label htmlFor="lastName">
              Last Name
            </label>

            <div
              className={`register-input ${
                errors.lastName
                  ? "has-error"
                  : ""
              }`}
            >

              <FiUser />

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={
                  formData.lastName
                }
                onChange={handleChange}
                autoComplete="family-name"
                disabled={loading}
              />

            </div>

            {errors.lastName && (
              <span className="register-error">
                {errors.lastName}
              </span>
            )}

          </div>

        </div>

        {/* ===================================
            EMAIL
        =================================== */}

        <div className="register-field">

          <label htmlFor="email">
            Email Address
          </label>

          <div
            className={`register-input ${
              errors.email
                ? "has-error"
                : ""
            }`}
          >

            <FiMail />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              disabled={loading}
            />

          </div>

          {errors.email && (
            <span className="register-error">
              {errors.email}
            </span>
          )}

        </div>

        {/* ===================================
            PASSWORD
        =================================== */}

        <div className="register-field">

          <label htmlFor="password">
            Password
          </label>

          <div
            className={`register-input ${
              errors.password
                ? "has-error"
                : ""
            }`}
          >

            <FiLock />

            <input
              id="password"
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              disabled={loading}
            />

            <button
              type="button"
              className="register-password-toggle"
              onClick={() =>
                setShowPassword(
                  (previous) =>
                    !previous
                )
              }
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              disabled={loading}
            >
              {showPassword ? (
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>

          </div>

          {errors.password ? (
            <span className="register-error">
              {errors.password}
            </span>
          ) : (
            <span className="password-hint">
              Use at least 8 characters.
            </span>
          )}

        </div>

        {/* ===================================
            CONFIRM PASSWORD
        =================================== */}

        <div className="register-field">

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <div
            className={`register-input ${
              errors.confirmPassword
                ? "has-error"
                : ""
            }`}
          >

            <FiLock />

            <input
              id="confirmPassword"
              name="confirmPassword"
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm password"
              value={
                formData.confirmPassword
              }
              onChange={handleChange}
              autoComplete="new-password"
              disabled={loading}
            />

            <button
              type="button"
              className="register-password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  (previous) =>
                    !previous
                )
              }
              aria-label={
                showConfirmPassword
                  ? "Hide password"
                  : "Show password"
              }
              disabled={loading}
            >
              {showConfirmPassword ? (
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>

          </div>

          {errors.confirmPassword && (
            <span className="register-error">
              {errors.confirmPassword}
            </span>
          )}

        </div>

        {/* ===================================
            TERMS
        =================================== */}

        <div className="register-terms">

          <label>

            <input
              type="checkbox"
              checked={agreeTerms}
              disabled={loading}
              onChange={(e) => {
                setAgreeTerms(
                  e.target.checked
                );

                if (errors.terms) {
                  setErrors(
                    (previous) => ({
                      ...previous,
                      terms: "",
                    })
                  );
                }
              }}
            />

            <span>
              I agree to the{" "}

              <Link href="/terms">
                Terms & Conditions
              </Link>

              {" "}and{" "}

              <Link href="/privacy">
                Privacy Policy
              </Link>
            </span>

          </label>

          {errors.terms && (
            <span className="register-error">
              {errors.terms}
            </span>
          )}

        </div>

        {/* ===================================
            GENERAL ERROR
        =================================== */}

        {errors.form && (
          <div
            className="register-form-error"
            role="alert"
          >
            {errors.form}
          </div>
        )}

        {/* ===================================
            CREATE ACCOUNT
        =================================== */}

        <button
          type="submit"
          className="register-submit"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

      </form>

      {/* =====================================
          DIVIDER
      ===================================== */}

      <div className="register-divider">
        <span>or</span>
      </div>

      {/* =====================================
          LOGIN
      ===================================== */}

      <div className="register-login">

        <span>
          Already have an account?
        </span>

        <Link href="/auth/login">
          Sign In
        </Link>

      </div>

    </div>
  );
}