"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FiX,
  FiPlus,
} from "react-icons/fi";

import "./AddBookingModal.scss";

const initialForm = {
  airline: "",
  code: "",

  from: "",
  fromCode: "",
  fromTime: "",

  to: "",
  toCode: "",
  toTime: "",

  duration: "",
  date: "",

  seats: "",
  status: "Confirmed",
};

export default function AddBookingModal({
  open,
  onClose,
  onAdd,
}) {
  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  /* RESET WHEN CLOSED */

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
    }
  }, [open]);

  /* ESC CLOSE */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,

      [name]:
        name === "fromCode" ||
        name === "toCode"
          ? value.toUpperCase()
          : value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.airline.trim()) {
      nextErrors.airline =
        "Airline is required.";
    }

    if (!form.code.trim()) {
      nextErrors.code =
        "Flight code is required.";
    }

    if (!form.from.trim()) {
      nextErrors.from =
        "Departure city is required.";
    }

    if (!form.fromCode.trim()) {
      nextErrors.fromCode =
        "Airport code is required.";
    }

    if (!form.fromTime) {
      nextErrors.fromTime =
        "Departure time is required.";
    }

    if (!form.to.trim()) {
      nextErrors.to =
        "Destination is required.";
    }

    if (!form.toCode.trim()) {
      nextErrors.toCode =
        "Airport code is required.";
    }

    if (!form.toTime) {
      nextErrors.toTime =
        "Arrival time is required.";
    }

    if (!form.duration.trim()) {
      nextErrors.duration =
        "Duration is required.";
    }

    if (!form.date) {
      nextErrors.date =
        "Date is required.";
    }

    if (
      !form.seats ||
      Number(form.seats) <= 0
    ) {
      nextErrors.seats =
        "Enter a valid seat count.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onAdd({
      ...form,

      airline: form.airline.trim(),

      code: form.code
        .trim()
        .toUpperCase(),

      from: form.from.trim(),

      fromCode: form.fromCode
        .trim()
        .toUpperCase(),

      to: form.to.trim(),

      toCode: form.toCode
        .trim()
        .toUpperCase(),

      duration:
        form.duration.trim(),

      seats: Number(form.seats),
    });
  };

  return (
    <div
      className="add-booking-overlay"
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <div
        className="add-booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-booking-title"
      >

        {/* HEADER */}

        <div className="add-booking-header">

          <div>
            <h2 id="add-booking-title">
              Add Booking
            </h2>

            <p>
              Create a new flight booking.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>

        </div>

        {/* FORM */}

        <form
          className="add-booking-form"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="add-booking-grid">

            <Field
              label="Airline"
              name="airline"
              placeholder="CloudNine Airlines"
              value={form.airline}
              error={errors.airline}
              onChange={handleChange}
            />

            <Field
              label="Flight Code"
              name="code"
              placeholder="CN-AB1234"
              value={form.code}
              error={errors.code}
              onChange={handleChange}
            />

            <Field
              label="Departure"
              name="from"
              placeholder="Paris"
              value={form.from}
              error={errors.from}
              onChange={handleChange}
            />

            <Field
              label="Departure Code"
              name="fromCode"
              placeholder="CDG"
              maxLength={3}
              value={form.fromCode}
              error={errors.fromCode}
              onChange={handleChange}
            />

            <Field
              label="Departure Time"
              name="fromTime"
              type="time"
              value={form.fromTime}
              error={errors.fromTime}
              onChange={handleChange}
            />

            <Field
              label="Destination"
              name="to"
              placeholder="New York"
              value={form.to}
              error={errors.to}
              onChange={handleChange}
            />

            <Field
              label="Destination Code"
              name="toCode"
              placeholder="JFK"
              maxLength={3}
              value={form.toCode}
              error={errors.toCode}
              onChange={handleChange}
            />

            <Field
              label="Arrival Time"
              name="toTime"
              type="time"
              value={form.toTime}
              error={errors.toTime}
              onChange={handleChange}
            />

            <Field
              label="Duration"
              name="duration"
              placeholder="8 hours"
              value={form.duration}
              error={errors.duration}
              onChange={handleChange}
            />

            <Field
              label="Date"
              name="date"
              type="date"
              value={form.date}
              error={errors.date}
              onChange={handleChange}
            />

            <Field
              label="Seats"
              name="seats"
              type="number"
              min="1"
              placeholder="192"
              value={form.seats}
              error={errors.seats}
              onChange={handleChange}
            />

            <div className="add-booking-field">

              <label htmlFor="booking-status">
                Status
              </label>

              <select
                id="booking-status"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="Confirmed">
                  Confirmed
                </option>

                <option value="Pending">
                  Pending
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>
              </select>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="add-booking-actions">

            <button
              type="button"
              className="add-booking-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-booking-submit"
            >
              <FiPlus />

              Add Booking
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

function Field({
  label,
  error,
  ...props
}) {
  return (
    <div className="add-booking-field">

      <label htmlFor={props.name}>
        {label}
      </label>

      <input
        id={props.name}
        {...props}
        className={
          error ? "has-error" : ""
        }
      />

      {error && (
        <span>
          {error}
        </span>
      )}

    </div>
  );
}