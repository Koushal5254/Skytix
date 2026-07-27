import {
  FiChevronDown,
  FiPlus,
  FiSearch,
  FiSliders,
  FiCalendar,
} from "react-icons/fi";

import "./BookingFilters.scss";

export default function BookingFilters() {
  return (
    <div className="booking-filters">

      <div className="filters-left">

        <button className="filter-btn active">
          <FiCalendar />
          <span>1 - 8 July 2028</span>
          <FiChevronDown />
        </button>

        <button className="filter-btn">
          Airline
          <FiChevronDown />
        </button>

        <button className="filter-btn">
          Status
          <FiChevronDown />
        </button>

        <button className="filter-btn">
          Departure
          <FiChevronDown />
        </button>

      </div>

      <div className="filters-right">

        <button className="circle-btn">
          <FiSearch />
        </button>

        <button className="circle-btn">
          <FiSliders />
        </button>

        <button className="add-booking-btn">
          <FiPlus />
          <span>Add Booking</span>
        </button>

      </div>

    </div>
  );
}