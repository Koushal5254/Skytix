"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FiX,
  FiUser,
  FiCreditCard,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiTrash2,
} from "react-icons/fi";

import "./PaymentModal.scss";

const statusOptions = [
  "Confirmed",
  "Pending",
  "Cancelled",
];

export default function PaymentModal({
  mode,
  payment,
  onClose,
  onDelete,
  onUpdate,
}) {
  const [formData, setFormData] =
    useState({
      name: payment?.name || "",
      bookingCode:
        payment?.bookingCode || "",
      airline:
        payment?.airline || "",
      route:
        payment?.route || "",
      billingDate:
        payment?.billingDate || "",
      amount:
        payment?.amount || "",
      status:
        payment?.status ||
        "Confirmed",
    });

  /* ========================================
     ESCAPE + BODY LOCK
  ======================================== */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event
    ) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  /* ========================================
     CHANGE
  ======================================== */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /* ========================================
     SAVE
  ======================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdate?.({
      ...payment,
      ...formData,
    });
  };

  /* ========================================
     OVERLAY
  ======================================== */

  const handleOverlayMouseDown = (
    event
  ) => {
    if (
      event.target ===
      event.currentTarget
    ) {
      onClose?.();
    }
  };

  /* ========================================
     DELETE
  ======================================== */

  if (mode === "delete") {
    return (
      <div
        className="payment-modal-overlay"
        onMouseDown={
          handleOverlayMouseDown
        }
      >

        <div
          className="payment-delete-modal"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="delete-payment-title"
        >

          <div className="payment-delete-icon">
            <FiTrash2 />
          </div>

          <h2 id="delete-payment-title">
            Delete transaction?
          </h2>

          <p>
            Are you sure you want to
            delete the payment for{" "}
            <strong>
              {payment.name}
            </strong>
            ? This transaction will be
            removed from the table.
          </p>

          <div className="payment-delete-actions">

            <button
              type="button"
              className="payment-modal-secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="button"
              className="payment-delete-confirm"
              onClick={onDelete}
            >
              Delete
            </button>

          </div>

        </div>

      </div>
    );
  }

  /* ========================================
     VIEW / EDIT
  ======================================== */

  const editing =
    mode === "edit";

  return (
    <div
      className="payment-modal-overlay"
      onMouseDown={
        handleOverlayMouseDown
      }
    >

      <div
        className="payment-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-modal-title"
      >

        {/* =================================
            HEADER
        ================================= */}

        <div className="payment-modal-header">

          <div>

            <span>
              Transaction
            </span>

            <h2 id="payment-modal-title">
              {editing
                ? "Edit Payment"
                : "Payment Details"}
            </h2>

          </div>

          <button
            type="button"
            className="payment-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>

        </div>

        {/* =================================
            CUSTOMER
        ================================= */}

        <div className="payment-modal-customer">

          <div className="payment-modal-avatar">
            {getInitials(
              payment.name
            )}
          </div>

          <div>

            <strong>
              {payment.name}
            </strong>

            <span>
              {payment.bookingCode}
            </span>

          </div>

          <span
            className={`payment-modal-status payment-modal-status--${String(
              payment.status
            ).toLowerCase()}`}
          >
            {payment.status}
          </span>

        </div>

        {editing ? (

          /* =================================
             EDIT FORM
          ================================= */

          <form
            className="payment-edit-form"
            onSubmit={handleSubmit}
          >

            <div className="payment-form-grid">

              <PaymentField
                label="Passenger Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={<FiUser />}
              />

              <PaymentField
                label="Booking Code"
                name="bookingCode"
                value={
                  formData.bookingCode
                }
                onChange={handleChange}
                icon={
                  <FiCreditCard />
                }
              />

              <PaymentField
                label="Airline"
                name="airline"
                value={
                  formData.airline
                }
                onChange={handleChange}
                icon={
                  <FiCreditCard />
                }
              />

              <PaymentField
                label="Route"
                name="route"
                value={formData.route}
                onChange={handleChange}
                icon={<FiMapPin />}
              />

              <PaymentField
                label="Billing Date"
                name="billingDate"
                type="date"
                value={
                  formData.billingDate
                }
                onChange={handleChange}
                icon={<FiCalendar />}
              />

              <PaymentField
                label="Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                icon={
                  <FiDollarSign />
                }
              />

              <label className="payment-form-field">

                <span>
                  Status
                </span>

                <select
                  name="status"
                  value={
                    formData.status
                  }
                  onChange={
                    handleChange
                  }
                >
                  {statusOptions.map(
                    (option) => (
                      <option
                        key={option}
                        value={option}
                      >
                        {option}
                      </option>
                    )
                  )}
                </select>

              </label>

            </div>

            <div className="payment-modal-footer">

              <button
                type="button"
                className="payment-modal-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="payment-modal-primary"
              >
                Save Changes
              </button>

            </div>

          </form>

        ) : (

          /* =================================
             VIEW
          ================================= */

          <>

            <div className="payment-detail-grid">

              <PaymentDetail
                label="Passenger"
                value={payment.name}
              />

              <PaymentDetail
                label="Booking Code"
                value={
                  payment.bookingCode
                }
              />

              <PaymentDetail
                label="Airline"
                value={
                  payment.airline
                }
              />

              <PaymentDetail
                label="Route"
                value={payment.route}
              />

              <PaymentDetail
                label="Billing Date"
                value={
                  payment.billingDate
                }
              />

              <PaymentDetail
                label="Amount"
                value={payment.amount}
              />

              <PaymentDetail
                label="Status"
                value={payment.status}
              />

            </div>

            <div className="payment-modal-footer">

              <button
                type="button"
                className="payment-modal-primary"
                onClick={onClose}
              >
                Done
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

/* ========================================
   FIELD
======================================== */

function PaymentField({
  label,
  icon,
  ...inputProps
}) {
  return (
    <label className="payment-form-field">

      <span>
        {label}
      </span>

      <div className="payment-form-input">

        {icon}

        <input
          {...inputProps}
          required
        />

      </div>

    </label>
  );
}

/* ========================================
   DETAIL
======================================== */

function PaymentDetail({
  label,
  value,
}) {
  return (
    <div className="payment-detail-item">

      <span>
        {label}
      </span>

      <strong>
        {value || "—"}
      </strong>

    </div>
  );
}

/* ========================================
   INITIALS
======================================== */

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}