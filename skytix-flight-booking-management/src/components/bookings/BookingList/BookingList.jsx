import BookingCard from "../BookingCard/BookingCard";

import "./BookingList.scss";

export default function BookingList({
  bookings = [],
}) {
  /* ========================================
     EMPTY STATE
  ======================================== */

  if (bookings.length === 0) {
    return (
      <div className="booking-list-empty">

        <h3>No bookings found</h3>

        <p>
          Try changing your search or filters.
        </p>

      </div>
    );
  }

  /* ========================================
     BOOKING LIST
  ======================================== */

  return (
    <div className="booking-list">

      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
        />
      ))}

    </div>
  );
}