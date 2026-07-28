import { FiArrowRight } from "react-icons/fi";

import "./BookingCard.scss";

/* ========================================
   AIRLINE TYPE
======================================== */

const AIRLINE_TYPES = {
  "CloudNine Airlines": "cloudnine",
  "QuickWing Air": "quickwing",
  "SkyHigh Airlines": "skyhigh",
  "FlyFast Airways": "flyfast",
  AeroJet: "aerojet",
  "Nimbus Airlines": "nimbus",
};

export default function BookingCard({ booking }) {
  const statusClass =
    booking.status
      ?.toLowerCase()
      .replace(/\s+/g, "-") || "";

  const airlineType =
    AIRLINE_TYPES[booking.airline] ||
    "default";

  return (
    <article className="booking-card">

      {/* =====================================
          AIRLINE
      ====================================== */}

      <div className="booking-card-airline">

        <AirlineLogo
          type={airlineType}
          airline={booking.airline}
        />

        <div className="booking-airline-info">

          <h4>{booking.airline}</h4>

          <p>{booking.code}</p>

        </div>

      </div>

      {/* =====================================
          FLIGHT INFORMATION
      ====================================== */}

      <div className="booking-flight-panel">

        {/* DEPARTURE */}

        <div className="booking-flight-time">

          <strong>
            {formatTime(booking.fromTime)}
          </strong>

          <span>
            {booking.from}
          </span>

        </div>

        {/* ROUTE */}

        <div className="booking-route">

          <span className="booking-airport-code">
            {booking.fromCode}
          </span>

          <div className="booking-route-center">

            <div className="booking-route-track">

              <span className="booking-route-start" />

              <span className="booking-route-middle" />

              <span className="booking-route-end">
                <FiArrowRight />
              </span>

            </div>

            <small>
              Duration: {booking.duration}
            </small>

          </div>

          <span className="booking-airport-code">
            {booking.toCode}
          </span>

        </div>

        {/* ARRIVAL */}

        <div className="booking-flight-time">

          <strong>
            {formatTime(booking.toTime)}
          </strong>

          <span>
            {booking.to}
          </span>

        </div>

      </div>

      {/* =====================================
          DATE
      ====================================== */}

      <div className="booking-date">

        <span>Date</span>

        <strong>
          {formatDate(booking.date)}
        </strong>

      </div>

      {/* =====================================
          PASSENGERS
      ====================================== */}

      <div className="booking-passengers">

        <div
          className="booking-passenger-avatars"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <strong>
          +{booking.seats}
        </strong>

      </div>

      {/* =====================================
          STATUS
      ====================================== */}

      <div
        className={`booking-status booking-status-${statusClass}`}
      >
        {booking.status}
      </div>

    </article>
  );
}

/* ========================================
   AIRLINE LOGO
======================================== */

function AirlineLogo({
  type,
  airline,
}) {
  return (
    <div
      className={`booking-airline-logo airline-${type}`}
      title={airline}
      aria-hidden="true"
    >
      <AirlineMark
        type={type}
        airline={airline}
      />
    </div>
  );
}

/* ========================================
   AIRLINE MARKS
======================================== */

function AirlineMark({
  type,
  airline,
}) {
  switch (type) {

    /* CLOUDNINE */

    case "cloudnine":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-cloudnine-main"
            d="
              M24.7 8.2
              C30.7 9.5 33.6 15.3 32.1 21.2
              C30.4 27.9 24.6 32.3 17.7 33.2
              C20.8 30.7 23.4 28.1 24.8 25.3
              C20.7 27 16.2 25.9 13.8 22.4
              C11.3 18.7 12.2 13.7 15.8 10.9
              C18.2 9 21.6 8 24.7 8.2
              Z
            "
          />

          <path
            className="airline-cloudnine-cut"
            d="
              M18.2 13.7
              C21.3 11.8 25.3 12.4 27.3 15.2
              C29.2 17.9 28.5 21.5 25.9 23.6
              C23.5 25.5 19.8 25.4 17.5 23.4
              C20.8 23.2 23.5 21.3 24.4 18.6
              C25.2 16.2 23.9 14.3 21.8 13.6
              C20.6 13.2 19.4 13.3 18.2 13.7
              Z
            "
          />
        </svg>
      );

    /* QUICKWING */

    case "quickwing":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-quickwing-main"
            d="
              M8 27
              L11.3 14.7
              L18.1 23
              L17.4 10
              L23.5 21
              L27.3 7.5
              L32 31.5
              Z
            "
          />

          <path
            className="airline-quickwing-detail"
            d="
              M8 27
              L31.8 31.5
              L18.1 23
              Z
            "
          />
        </svg>
      );

    /* SKYHIGH */

    case "skyhigh":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-skyhigh-main"
            d="
              M7.5 27.8
              L13.2 21.8
              L9.5 13.2
              L14.8 12.1
              L22.6 18.4
              L29.5 20.2
              C32.4 21
              33.7 23
              33 25.1
              C32.4 27
              30.2 28
              27.7 27.8
              L20.7 27.2
              L13.2 30.7
              Z
            "
          />
        </svg>
      );

    /* FLYFAST */

    case "flyfast":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-flyfast-main"
            d="
              M7 15.8
              L33 11
              L24.3 20
              L32.3 20
              L15 31
              L19.8 22.7
              L8.5 22.7
              L17.2 17.7
              Z
            "
          />
        </svg>
      );

    /* AEROJET */

    case "aerojet":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-aerojet-left"
            d="
              M20 7
              L18.3 26
              L8.7 31.5
              Z
            "
          />

          <path
            className="airline-aerojet-right"
            d="
              M20 7
              L31.3 31.5
              L21.7 26
              Z
            "
          />
        </svg>
      );

    /* NIMBUS */

    case "nimbus":
      return (
        <svg
          viewBox="0 0 40 40"
          className="airline-svg"
        >
          <path
            className="airline-nimbus-main"
            d="
              M8 31
              L15 9
              L20.2 22
              L26 9
              L32 9
              L24.8 31
              L19.7 19
              L14 31
              Z
            "
          />
        </svg>
      );

    /* DYNAMIC AIRLINE */

    default:
      return (
        <span className="airline-default-mark">
          {getInitials(airline)}
        </span>
      );
  }
}

/* ========================================
   INITIALS
======================================== */

function getInitials(
  airline = ""
) {
  return (
    airline
      .split(" ")
      .filter(Boolean)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "SK"
  );
}

/* ========================================
   DATE
======================================== */

function formatDate(date) {
  if (!date) {
    return "-";
  }

  const parts = date.split("-");

  if (parts.length !== 3) {
    return date;
  }

  const [
    year,
    month,
    day,
  ] = parts;

  return `${year}-${month}-${day}`;
}

/* ========================================
   TIME
======================================== */

function formatTime(time) {
  if (!time) {
    return "-";
  }

  if (
    time.includes("AM") ||
    time.includes("PM")
  ) {
    return time;
  }

  const [
    hourValue,
    minute,
  ] = time.split(":");

  if (
    hourValue === undefined ||
    minute === undefined
  ) {
    return time;
  }

  const hour = Number(hourValue);

  if (Number.isNaN(hour)) {
    return time;
  }

  const period =
    hour >= 12
      ? "PM"
      : "AM";

  const formattedHour =
    hour % 12 || 12;

  return `${formattedHour}:${minute} ${period}`;
}