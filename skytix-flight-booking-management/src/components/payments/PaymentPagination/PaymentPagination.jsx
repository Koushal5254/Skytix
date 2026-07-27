"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./PaymentPagination.scss";

export default function PaymentPagination() {
  return (
    <div className="payment-pagination">

      <div className="pagination-info">
        Showing 1–12 of 567
      </div>

      <div className="pagination-controls">

        <button className="page-btn">
          <FiChevronLeft />
          Previous
        </button>

        <button className="page-number active">
          1
        </button>

        <button className="page-number">
          2
        </button>

        <button className="page-number">
          3
        </button>

        <span className="dots">
          ...
        </span>

        <button className="page-number">
          8
        </button>

        <button className="page-btn">
          Next
          <FiChevronRight />
        </button>

      </div>

    </div>
  );
}