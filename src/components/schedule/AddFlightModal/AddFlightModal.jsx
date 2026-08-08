"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FiPlus,
  FiX,
} from "react-icons/fi";

import "./AddFlightModal.scss";

const initialForm = {
  airline: "",
  code: "",
  status: "On Time",

  departure: "",
  arrival: "",

  fromCode: "",
  toCode: "",

  price: "",

  passengers: "",
  totalPassengers: "",

  aircraft: "",

  bookingDate: "",

  duration: "",

  flightClass: "Economy",
  seatLayout: "",

  departureCity: "",
  departureAirport: "",
  departureTerminal: "",

  arrivalCity: "",
  arrivalAirport: "",
  arrivalTerminal: "",

  baggage: "1 Baggage",
  meal: "No Meal",
  wifi: "Free WiFi",
};

export default function AddFlightModal({
  open,
  onClose,
  onAdd,
}) {
  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  /* ========================================
     RESET
  ======================================== */

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      setErrors({});
    }
  }, [open]);

  /* ========================================
     ESCAPE CLOSE
  ======================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  /* ========================================
     CHANGE
  ======================================== */

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    let nextValue = value;

    if (
      name === "fromCode" ||
      name === "toCode"
    ) {
      nextValue =
        value.toUpperCase();
    }

    if (name === "code") {
      nextValue =
        value.toUpperCase();
    }

    setForm((previous) => ({
      ...previous,
      [name]: nextValue,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  /* ========================================
     VALIDATION
  ======================================== */

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

    if (!form.departure) {
      nextErrors.departure =
        "Departure time is required.";
    }

    if (!form.arrival) {
      nextErrors.arrival =
        "Arrival time is required.";
    }

    if (
      form.fromCode.trim().length !== 3
    ) {
      nextErrors.fromCode =
        "Enter a 3-letter airport code.";
    }

    if (
      form.toCode.trim().length !== 3
    ) {
      nextErrors.toCode =
        "Enter a 3-letter airport code.";
    }

    if (
      !form.price ||
      Number(form.price) <= 0
    ) {
      nextErrors.price =
        "Enter a valid price.";
    }

    if (
      !form.passengers ||
      Number(form.passengers) < 0
    ) {
      nextErrors.passengers =
        "Enter passenger count.";
    }

    if (
      !form.totalPassengers ||
      Number(form.totalPassengers) <= 0
    ) {
      nextErrors.totalPassengers =
        "Enter total capacity.";
    }

    if (
      Number(form.passengers) >
      Number(form.totalPassengers)
    ) {
      nextErrors.passengers =
        "Passengers cannot exceed capacity.";
    }

    if (!form.aircraft.trim()) {
      nextErrors.aircraft =
        "Aircraft is required.";
    }

    if (!form.bookingDate) {
      nextErrors.bookingDate =
        "Flight date is required.";
    }

    if (!form.duration.trim()) {
      nextErrors.duration =
        "Duration is required.";
    }

    if (!form.departureCity.trim()) {
      nextErrors.departureCity =
        "Departure city is required.";
    }

    if (!form.arrivalCity.trim()) {
      nextErrors.arrivalCity =
        "Arrival city is required.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  /* ========================================
     SUBMIT
  ======================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const flight = {
      airline: form.airline.trim(),

      code: form.code
        .trim()
        .toUpperCase(),

      status: form.status,

      departure: form.departure,

      arrival: form.arrival,

      fromCode: form.fromCode
        .trim()
        .toUpperCase(),

      toCode: form.toCode
        .trim()
        .toUpperCase(),

      price: Number(form.price),

      passengers:
        Number(form.passengers),

      totalPassengers:
        Number(form.totalPassengers),

      aircraft:
        form.aircraft.trim(),

      bookingDate:
        formatDate(form.bookingDate),

      duration:
        form.duration.trim(),

      flightClass:
        form.flightClass,

      seatLayout:
        form.seatLayout.trim() ||
        "3-3-3 configuration",

      departureDetails: {
        time: form.departure,

        date:
          formatShortDate(
            form.bookingDate
          ),

        city:
          form.departureCity.trim(),

        airport:
          form.departureAirport.trim() ||
          `${form.departureCity.trim()} Airport (${form.fromCode
            .trim()
            .toUpperCase()})`,

        terminal:
          form.departureTerminal.trim() ||
          "Terminal 1",
      },

      arrivalDetails: {
        time: form.arrival,

        date:
          formatShortDate(
            form.bookingDate
          ),

        city:
          form.arrivalCity.trim(),

        airport:
          form.arrivalAirport.trim() ||
          `${form.arrivalCity.trim()} Airport (${form.toCode
            .trim()
            .toUpperCase()})`,

        terminal:
          form.arrivalTerminal.trim() ||
          "Terminal 1",
      },

      facilities: {
        baggage:
          form.baggage.trim() ||
          "1 Baggage",

        meal:
          form.meal.trim() ||
          "No Meal",

        wifi:
          form.wifi.trim() ||
          "Free WiFi",
      },
    };

    onAdd(flight);
  };

  return (
    <div
      className="add-flight-overlay"
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
        className="add-flight-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-flight-title"
      >
        {/* HEADER */}

        <div className="add-flight-header">
          <div>
            <h2 id="add-flight-title">
              Add Flight
            </h2>

            <p>
              Create a new flight
              schedule.
            </p>
          </div>

          <button
            type="button"
            className="add-flight-close"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>

        {/* FORM */}

        <form
          className="add-flight-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <FormSection title="Flight Information">
            <Field
              label="Airline"
              name="airline"
              placeholder="SkyHigh Airlines"
              value={form.airline}
              error={errors.airline}
              onChange={handleChange}
            />

            <Field
              label="Flight Code"
              name="code"
              placeholder="SH-ZY6789"
              value={form.code}
              error={errors.code}
              onChange={handleChange}
            />

            <div className="add-flight-field">
              <label htmlFor="flight-status">
                Status
              </label>

              <select
                id="flight-status"
                name="status"
                value={form.status}
                onChange={handleChange}
              >
                <option value="On Time">
                  On Time
                </option>

                <option value="Delayed">
                  Delayed
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>
              </select>
            </div>

            <Field
              label="Aircraft"
              name="aircraft"
              placeholder="Boeing 787 Dreamliner"
              value={form.aircraft}
              error={errors.aircraft}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Route">
            <Field
              label="Departure City"
              name="departureCity"
              placeholder="Los Angeles"
              value={form.departureCity}
              error={errors.departureCity}
              onChange={handleChange}
            />

            <Field
              label="Departure Code"
              name="fromCode"
              placeholder="LAX"
              maxLength={3}
              value={form.fromCode}
              error={errors.fromCode}
              onChange={handleChange}
            />

            <Field
              label="Destination City"
              name="arrivalCity"
              placeholder="New York"
              value={form.arrivalCity}
              error={errors.arrivalCity}
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
              label="Departure Time"
              name="departure"
              type="time"
              value={form.departure}
              error={errors.departure}
              onChange={handleChange}
            />

            <Field
              label="Arrival Time"
              name="arrival"
              type="time"
              value={form.arrival}
              error={errors.arrival}
              onChange={handleChange}
            />

            <Field
              label="Duration"
              name="duration"
              placeholder="5 hours 30 minutes"
              value={form.duration}
              error={errors.duration}
              onChange={handleChange}
            />

            <Field
              label="Flight Date"
              name="bookingDate"
              type="date"
              value={form.bookingDate}
              error={errors.bookingDate}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Flight Details">
            <Field
              label="Price"
              name="price"
              type="number"
              min="1"
              placeholder="350"
              value={form.price}
              error={errors.price}
              onChange={handleChange}
            />

            <Field
              label="Passengers"
              name="passengers"
              type="number"
              min="0"
              placeholder="207"
              value={form.passengers}
              error={errors.passengers}
              onChange={handleChange}
            />

            <Field
              label="Capacity"
              name="totalPassengers"
              type="number"
              min="1"
              placeholder="220"
              value={
                form.totalPassengers
              }
              error={
                errors.totalPassengers
              }
              onChange={handleChange}
            />

            <div className="add-flight-field">
              <label htmlFor="flight-class">
                Seat Class
              </label>

              <select
                id="flight-class"
                name="flightClass"
                value={form.flightClass}
                onChange={handleChange}
              >
                <option value="Economy">
                  Economy
                </option>

                <option value="Premium Economy">
                  Premium Economy
                </option>

                <option value="Business">
                  Business
                </option>

                <option value="First Class">
                  First Class
                </option>
              </select>
            </div>

            <Field
              label="Seat Layout"
              name="seatLayout"
              placeholder="3-3-3 configuration"
              value={form.seatLayout}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Airport Details">
            <Field
              label="Departure Airport"
              name="departureAirport"
              placeholder="Los Angeles International Airport (LAX)"
              value={
                form.departureAirport
              }
              onChange={handleChange}
            />

            <Field
              label="Departure Terminal"
              name="departureTerminal"
              placeholder="Terminal B"
              value={
                form.departureTerminal
              }
              onChange={handleChange}
            />

            <Field
              label="Arrival Airport"
              name="arrivalAirport"
              placeholder="John F. Kennedy International Airport (JFK)"
              value={form.arrivalAirport}
              onChange={handleChange}
            />

            <Field
              label="Arrival Terminal"
              name="arrivalTerminal"
              placeholder="Terminal 4"
              value={form.arrivalTerminal}
              onChange={handleChange}
            />
          </FormSection>

          <FormSection title="Facilities">
            <Field
              label="Baggage"
              name="baggage"
              placeholder="1 Baggage"
              value={form.baggage}
              onChange={handleChange}
            />

            <Field
              label="Meal"
              name="meal"
              placeholder="No Meal"
              value={form.meal}
              onChange={handleChange}
            />

            <Field
              label="WiFi"
              name="wifi"
              placeholder="Free WiFi"
              value={form.wifi}
              onChange={handleChange}
            />
          </FormSection>

          {/* ACTIONS */}

          <div className="add-flight-actions">
            <button
              type="button"
              className="add-flight-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-flight-submit"
            >
              <FiPlus />

              Add Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormSection({
  title,
  children,
}) {
  return (
    <section className="add-flight-section">
      <h3>{title}</h3>

      <div className="add-flight-grid">
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  ...props
}) {
  return (
    <div className="add-flight-field">
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
        <span className="add-flight-error">
          {error}
        </span>
      )}
    </div>
  );
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  const value = new Date(
    `${date}T00:00:00`
  );

  return value.toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

function formatShortDate(date) {
  if (!date) {
    return "";
  }

  const value = new Date(
    `${date}T00:00:00`
  );

  return value.toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
}