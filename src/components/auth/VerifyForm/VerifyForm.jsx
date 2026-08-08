"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import Link from "next/link";

import {
  FiMail,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";

import { useAuth } from "@/context/AuthContext";

import "./VerifyForm.scss";

const OTP_LENGTH = 6;
const RESEND_TIME = 30;

export default function VerifyForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { login } = useAuth();

  const email =
    searchParams.get("email") || "";

  const flow =
    searchParams.get("flow") ||
    "register";

  const isResetFlow =
    flow === "reset";

  const isRegisterFlow =
    flow === "register";

  const [otp, setOtp] = useState(
    Array(OTP_LENGTH).fill("")
  );

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [resending, setResending] =
    useState(false);

  const [timer, setTimer] =
    useState(RESEND_TIME);

  const [message, setMessage] =
    useState("");

  const inputRefs = useRef([]);

  /* ========================================
     VALIDATE REGISTRATION SESSION
  ======================================== */

  useEffect(() => {
    if (!isRegisterFlow) {
      return;
    }

    try {
      const stored =
        sessionStorage.getItem(
          "skytix_pending_registration"
        );

      if (!stored) {
        setError(
          "Your registration session was not found. Please create your account again."
        );

        return;
      }

      const pendingUser =
        JSON.parse(stored);

      if (
        !pendingUser?.email ||
        (
          email &&
          pendingUser.email
            .toLowerCase() !==
            email.toLowerCase()
        )
      ) {
        setError(
          "This verification link does not match your registration session."
        );
      }
    } catch (error) {
      console.error(
        "Unable to read pending registration:",
        error
      );

      setError(
        "Unable to load your registration session. Please register again."
      );
    }
  }, [
    email,
    isRegisterFlow,
  ]);

  /* ========================================
     TIMER
  ======================================== */

  useEffect(() => {
    if (timer <= 0) {
      return;
    }

    const timeout =
      setTimeout(() => {
        setTimer((previous) =>
          Math.max(
            previous - 1,
            0
          )
        );
      }, 1000);

    return () =>
      clearTimeout(timeout);
  }, [timer]);

  /* ========================================
     INPUT
  ======================================== */

  const handleChange = (
    index,
    value
  ) => {
    if (loading) {
      return;
    }

    const digit =
      value.replace(/\D/g, "");

    const updatedOtp = [...otp];

    if (!digit) {
      updatedOtp[index] = "";

      setOtp(updatedOtp);

      setError("");
      setMessage("");

      return;
    }

    updatedOtp[index] =
      digit.slice(-1);

    setOtp(updatedOtp);

    setError("");
    setMessage("");

    if (
      index <
      OTP_LENGTH - 1
    ) {
      inputRefs.current[
        index + 1
      ]?.focus();
    }
  };

  /* ========================================
     KEYBOARD
  ======================================== */

  const handleKeyDown = (
    index,
    event
  ) => {
    if (
      event.key ===
        "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ]?.focus();
    }

    if (
      event.key ===
        "ArrowLeft" &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ]?.focus();
    }

    if (
      event.key ===
        "ArrowRight" &&
      index <
        OTP_LENGTH - 1
    ) {
      inputRefs.current[
        index + 1
      ]?.focus();
    }
  };

  /* ========================================
     PASTE
  ======================================== */

  const handlePaste = (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const pastedValue =
      event.clipboardData
        .getData("text")
        .replace(/\D/g, "")
        .slice(
          0,
          OTP_LENGTH
        );

    if (!pastedValue) {
      return;
    }

    const updatedOtp =
      Array(
        OTP_LENGTH
      ).fill("");

    pastedValue
      .split("")
      .forEach(
        (digit, index) => {
          updatedOtp[index] =
            digit;
        }
      );

    setOtp(updatedOtp);

    setError("");
    setMessage("");

    const nextIndex =
      pastedValue.length >=
      OTP_LENGTH
        ? OTP_LENGTH - 1
        : pastedValue.length;

    inputRefs.current[
      nextIndex
    ]?.focus();
  };

  /* ========================================
     VERIFY
  ======================================== */

  const handleSubmit = (
    event
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const verificationCode =
      otp.join("");

    if (
      verificationCode.length !==
      OTP_LENGTH
    ) {
      setError(
        "Please enter the complete 6-digit verification code."
      );

      return;
    }

    setError("");
    setMessage("");
    setLoading(true);

    /*
      FRONTEND DEMO ONLY

      For now any complete 6-digit
      verification code is accepted.

      Later this should call the
      backend OTP verification API.
    */

    setTimeout(() => {

      /* ====================================
         RESET PASSWORD FLOW
      ==================================== */

      if (isResetFlow) {
        setLoading(false);

        router.push(
          `/auth/reset-password?email=${encodeURIComponent(
            email
          )}`
        );

        return;
      }

      /* ====================================
         REGISTRATION FLOW
      ==================================== */

      if (isRegisterFlow) {
        try {
          const stored =
            sessionStorage.getItem(
              "skytix_pending_registration"
            );

          if (!stored) {
            setLoading(false);

            setError(
              "Your registration session has expired. Please create your account again."
            );

            return;
          }

          const pendingUser =
            JSON.parse(stored);

          if (
            !pendingUser?.email ||
            (
              email &&
              pendingUser.email
                .toLowerCase() !==
                email.toLowerCase()
            )
          ) {
            setLoading(false);

            setError(
              "Unable to verify this registration. Please create your account again."
            );

            return;
          }

          /*
            OTP verified successfully.

            Now we create the authenticated
            session for the new user.
          */

          login({
            ...pendingUser,
            verified: true,
          });

          /*
            Registration data is no longer
            required after verification.
          */

          sessionStorage.removeItem(
            "skytix_pending_registration"
          );

          setLoading(false);

          router.replace(
            "/dashboard"
          );

          return;
        } catch (error) {
          console.error(
            "Verification failed:",
            error
          );

          setLoading(false);

          setError(
            "Unable to complete verification. Please try again."
          );

          return;
        }
      }

      /* ====================================
         INVALID FLOW
      ==================================== */

      setLoading(false);

      setError(
        "Invalid verification request. Please start again."
      );

    }, 800);
  };

  /* ========================================
     RESEND
  ======================================== */

  const handleResend = () => {
    if (
      timer > 0 ||
      resending ||
      loading
    ) {
      return;
    }

    setResending(true);

    setError("");
    setMessage("");

    /*
      Backend resend OTP API will
      replace this timeout later.
    */

    setTimeout(() => {
      setOtp(
        Array(
          OTP_LENGTH
        ).fill("")
      );

      setTimer(
        RESEND_TIME
      );

      setResending(false);

      setMessage(
        "A new verification code has been sent."
      );

      inputRefs.current[
        0
      ]?.focus();
    }, 600);
  };

  /* ========================================
     BACK LINK
  ======================================== */

  const backHref =
    isResetFlow
      ? "/auth/forgot-password"
      : "/auth/register";

  return (
    <div className="verify-card">

      <span className="verify-mobile-brand">
        Skytix
      </span>

      {/* =====================================
          ICON
      ===================================== */}

      <div className="verify-icon">
        <FiMail />
      </div>

      {/* =====================================
          HEADING
      ===================================== */}

      <div className="verify-heading">

        <h1>
          {isResetFlow
            ? "Verify Your Identity"
            : "Verify Your Email"}
        </h1>

        <p>
          We've sent a 6-digit
          verification code to
        </p>

        <strong>
          {email ||
            "your email address"}
        </strong>

      </div>

      {/* =====================================
          FORM
      ===================================== */}

      <form
        className="verify-form"
        onSubmit={handleSubmit}
      >

        {/* OTP */}

        <div className="otp-wrapper">

          {otp.map(
            (
              digit,
              index
            ) => (
              <input
                key={index}

                ref={(element) => {
                  inputRefs.current[
                    index
                  ] = element;
                }}

                type="text"

                inputMode="numeric"

                autoComplete={
                  index === 0
                    ? "one-time-code"
                    : "off"
                }

                maxLength={1}

                value={digit}

                disabled={loading}

                onChange={(
                  event
                ) =>
                  handleChange(
                    index,
                    event
                      .target
                      .value
                  )
                }

                onKeyDown={(
                  event
                ) =>
                  handleKeyDown(
                    index,
                    event
                  )
                }

                onPaste={
                  handlePaste
                }

                aria-label={`Verification digit ${
                  index + 1
                }`}

                autoFocus={
                  index === 0
                }
              />
            )
          )}

        </div>

        {/* ===================================
            ERROR
        =================================== */}

        {error && (
          <div
            className="verify-error"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* ===================================
            SUCCESS MESSAGE
        =================================== */}

        {message && (
          <div className="verify-message">

            <FiCheck />

            <span>
              {message}
            </span>

          </div>
        )}

        {/* ===================================
            VERIFY BUTTON
        =================================== */}

        <button
          type="submit"
          className="verify-submit"
          disabled={loading}
        >
          {loading
            ? "Verifying..."
            : isResetFlow
              ? "Continue"
              : "Verify Account"}
        </button>

      </form>

      {/* =====================================
          RESEND
      ===================================== */}

      <div className="verify-resend">

        <span>
          Didn't receive the code?
        </span>

        {timer > 0 ? (
          <span className="resend-timer">
            Resend in 00:
            {String(timer).padStart(
              2,
              "0"
            )}
          </span>
        ) : (
          <button
            type="button"

            onClick={
              handleResend
            }

            disabled={
              resending ||
              loading
            }
          >
            {resending
              ? "Sending..."
              : "Resend Code"}
          </button>
        )}

      </div>

      {/* =====================================
          BACK
      ===================================== */}

      <Link
        href={backHref}
        className="change-email"
      >
        <FiArrowLeft />

        <span>
          {isResetFlow
            ? "Back to Forgot Password"
            : "Change Email Address"}
        </span>

      </Link>

    </div>
  );
}