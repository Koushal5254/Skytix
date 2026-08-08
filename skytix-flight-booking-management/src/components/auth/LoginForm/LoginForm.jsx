"use client";

import { useState } from "react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import Link from "next/link";

import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { useAuth } from "@/context/AuthContext";

import "./LoginForm.scss";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    login,
    authLoading,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [remember, setRemember] =
    useState(false);

  const [error, setError] = useState("");

  const [loading, setLoading] =
    useState(false);

  /* ========================================
     LOGIN
  ======================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanEmail =
      email.trim().toLowerCase();

    if (
      !cleanEmail ||
      !password.trim()
    ) {
      setError(
        "Please enter your email and password."
      );

      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      setError(
        "Please enter a valid email address."
      );

      return;
    }

    setError("");
    setLoading(true);

    /*
      Temporary frontend authentication.

      Any valid email + non-empty password
      will work until the backend/API is added.
    */

    setTimeout(() => {
      const userData = {
        name: getNameFromEmail(cleanEmail),
        email: cleanEmail,
        role: "Administrator",
        remember,
      };

      /*
        Store authenticated user
        through AuthContext.
      */

      login(userData, remember);

      /*
        ProtectedRoute may send:

        /auth/login?redirect=/payments

        After login, return to that page.

        Otherwise go to dashboard.
      */

      const redirect =
        searchParams.get("redirect");

      const destination =
        getSafeRedirect(redirect);

      setLoading(false);

      router.replace(destination);
    }, 700);
  };

  /* ========================================
     EMAIL
  ======================================== */

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (error) {
      setError("");
    }
  };

  /* ========================================
     PASSWORD
  ======================================== */

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (error) {
      setError("");
    }
  };

  /* ========================================
     AUTH INITIALIZATION
  ======================================== */

  if (authLoading) {
    return (
      <div className="login-card login-loading-card">

        <div className="login-loader" />

        <span>
          Loading Skytix...
        </span>

      </div>
    );
  }

  return (
    <div className="login-card">

      {/* =====================================
          HEADING
      ===================================== */}

      <div className="login-heading">

        <span className="login-mobile-brand">
          Skytix
        </span>

        <h1>
          Welcome Back!
        </h1>

        <p>
          Enter your details to access your
          Skytix account.
        </p>

      </div>

      {/* =====================================
          FORM
      ===================================== */}

      <form
        className="login-form"
        onSubmit={handleSubmit}
        noValidate
      >

        {/* EMAIL */}

        <div className="auth-field">

          <label htmlFor="email">
            Email Address
          </label>

          <div
            className={`auth-input ${
              error ? "has-error" : ""
            }`}
          >

            <FiMail />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="email"
              disabled={loading}
            />

          </div>

        </div>

        {/* PASSWORD */}

        <div className="auth-field">

          <label htmlFor="password">
            Password
          </label>

          <div
            className={`auth-input ${
              error ? "has-error" : ""
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
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              disabled={loading}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(
                  (previous) => !previous
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

        </div>

        {/* ===================================
            OPTIONS
        =================================== */}

        <div className="login-options">

          <label className="remember-me">

            <input
              type="checkbox"
              checked={remember}
              onChange={(e) =>
                setRemember(
                  e.target.checked
                )
              }
              disabled={loading}
            />

            <span>
              Remember me
            </span>

          </label>

          <Link href="/auth/forgot-password">
            Forgot Password?
          </Link>

        </div>

        {/* ===================================
            ERROR
        =================================== */}

        {error && (
          <div
            className="login-error"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* ===================================
            SIGN IN
        =================================== */}

        <button
          type="submit"
          className="login-submit"
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>

      </form>

      {/* =====================================
          DIVIDER
      ===================================== */}

      <div className="login-divider">
        <span>
          or
        </span>
      </div>

      {/* =====================================
          REGISTER
      ===================================== */}

      <div className="login-register">

        <span>
          Don't have an account?
        </span>

        <Link href="/auth/register">
          Create Account
        </Link>

      </div>

    </div>
  );
}

/* ==========================================
   HELPERS
========================================== */

function getNameFromEmail(email) {
  const username =
    email.split("@")[0] || "User";

  return username
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

/* ==========================================
   SAFE REDIRECT
========================================== */

function getSafeRedirect(redirect) {
  if (
    !redirect ||
    !redirect.startsWith("/") ||
    redirect.startsWith("//") ||
    redirect.startsWith("/auth")
  ) {
    return "/dashboard";
  }

  return redirect;
}