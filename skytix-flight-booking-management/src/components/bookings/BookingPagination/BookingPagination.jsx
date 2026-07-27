import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./BookingPagination.scss";

export default function BookingPagination() {
  return (
    <div className="booking-pagination">

      <button className="page-arrow">
        <FiChevronLeft />
      </button>

      <div className="page-numbers">

        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <span>...</span>
        <button>8</button>

      </div>

      <button className="page-arrow">
        <FiChevronRight />
      </button>

    </div>
  );
}