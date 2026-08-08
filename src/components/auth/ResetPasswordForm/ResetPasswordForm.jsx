"use client";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiCheck,
} from "react-icons/fi";

import "./ResetPasswordForm.scss";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = (
    searchParams.get("email") || ""
  )
    .trim()
    .toLowerCase();

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [errors, setErrors] =
    useState({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  /* ========================================
     PASSWORD REQUIREMENTS
  ======================================== */

  const requirements = {
    length: password.length >= 8,

    uppercase:
      /[A-Z]/.test(password),

    lowercase:
      /[a-z]/.test(password),

    number:
      /\d/.test(password),

    special:
      /[^A-Za-z0-9]/.test(
        password
      ),
  };

  const passwordValid =
    requirements.length &&
    requirements.uppercase &&
    requirements.lowercase &&
    requirements.number &&
    requirements.special;

  /* ========================================
     VALIDATION
  ======================================== */

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.form =
        "Your password reset session is invalid. Please request a new verification code.";
    }

    if (!password) {
      newErrors.password =
        "New password is required.";
    } else if (!passwordValid) {
      newErrors.password =
        "Your password does not meet all requirements.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your new password.";
    } else if (
      password !== confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  /* ========================================
     RESET PASSWORD
  ======================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!validate()) {
      return;
    }

    setLoading(true);

    /*
      FRONTEND DEMO ONLY

      Later replace this timeout with
      your reset-password API.

      Example:

      await resetPassword({
        email,
        password,
      });
    */

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  /* ========================================
     PASSWORD CHANGE
  ======================================== */

  const handlePasswordChange = (
    event
  ) => {
    setPassword(
      event.target.value
    );

    if (
      errors.password ||
      errors.form
    ) {
      setErrors((previous) => ({
        ...previous,
        password: "",
        form: "",
      }));
    }
  };

  /* ========================================
     CONFIRM PASSWORD CHANGE
  ======================================== */

  const handleConfirmChange = (
    event
  ) => {
    setConfirmPassword(
      event.target.value
    );

    if (
      errors.confirmPassword
    ) {
      setErrors((previous) => ({
        ...previous,
        confirmPassword: "",
      }));
    }
  };

  /* ========================================
     SUCCESS
  ======================================== */

  if (success) {
    return (
      <div className="reset-card reset-success-card">

        <span className="reset-mobile-brand">
          Skytix
        </span>

        <div className="reset-success-icon">
          <FiCheck />
        </div>

        <div className="reset-success-content">

          <h1>
            Password Updated!
          </h1>

          <p>
            Your password has been
            successfully changed. You can
            now sign in to your Skytix
            account using your new
            password.
          </p>

        </div>

        <button
          type="button"
          className="reset-submit"
          onClick={() =>
            router.replace(
              "/auth/login"
            )
          }
        >
          Back to Sign In
        </button>

      </div>
    );
  }

  /* ========================================
     FORM
  ======================================== */

  return (
    <div className="reset-card">

      {/* MOBILE BRAND */}

      <span className="reset-mobile-brand">
        Skytix
      </span>

      {/* ICON */}

      <div className="reset-icon">
        <FiLock />
      </div>

      {/* HEADING */}

      <div className="reset-heading">

        <h1>
          Create New Password
        </h1>

        <p>
          Create a strong password for
          your Skytix account.
        </p>

        {email && (
          <strong className="reset-email">
            {email}
          </strong>
        )}

      </div>

      {/* GENERAL ERROR */}

      {errors.form && (
        <div
          className="reset-form-error"
          role="alert"
        >
          {errors.form}
        </div>
      )}

      {/* FORM */}

      <form
        className="reset-form"
        onSubmit={handleSubmit}
        noValidate
      >

        {/* NEW PASSWORD */}

        <div className="reset-field">

          <label htmlFor="new-password">
            New Password
          </label>

          <div
            className={`reset-input ${
              errors.password
                ? "has-error"
                : ""
            }`}
          >

            <FiLock />

            <input
              id="new-password"
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter new password"
              value={password}
              onChange={
                handlePasswordChange
              }
              autoComplete="new-password"
              disabled={loading}
            />

            <button
              type="button"
              className="password-toggle"
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

          {errors.password && (
            <span
              className="reset-error"
              role="alert"
            >
              {errors.password}
            </span>
          )}

        </div>

        {/* PASSWORD REQUIREMENTS */}

        <div className="password-requirements">

          <p>
            Password must contain:
          </p>

          <div className="requirements-grid">

            <Requirement
              valid={
                requirements.length
              }
              label="At least 8 characters"
            />

            <Requirement
              valid={
                requirements.uppercase
              }
              label="One uppercase letter"
            />

            <Requirement
              valid={
                requirements.lowercase
              }
              label="One lowercase letter"
            />

            <Requirement
              valid={
                requirements.number
              }
              label="One number"
            />

            <Requirement
              valid={
                requirements.special
              }
              label="One special character"
            />

          </div>

        </div>

        {/* CONFIRM PASSWORD */}

        <div className="reset-field">

          <label htmlFor="confirm-password">
            Confirm New Password
          </label>

          <div
            className={`reset-input ${
              errors.confirmPassword
                ? "has-error"
                : ""
            }`}
          >

            <FiLock />

            <input
              id="confirm-password"
              name="confirmPassword"
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={
                handleConfirmChange
              }
              autoComplete="new-password"
              disabled={loading}
            />

            <button
              type="button"
              className="password-toggle"
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
            <span
              className="reset-error"
              role="alert"
            >
              {
                errors.confirmPassword
              }
            </span>
          )}

        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          className="reset-submit"
          disabled={
            loading || !email
          }
        >
          {loading
            ? "Updating Password..."
            : "Reset Password"}
        </button>

      </form>

    </div>
  );
}

/* ========================================
   REQUIREMENT
======================================== */

function Requirement({
  valid,
  label,
}) {
  return (
    <div
      className={`password-requirement ${
        valid ? "valid" : ""
      }`}
    >

      <span className="requirement-check">
        <FiCheck />
      </span>

      <span>
        {label}
      </span>

    </div>
  );
}