"use client";

import { useState } from "react";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./BookingPagination.scss";

export default function BookingPagination() {
  const [currentPage, setCurrentPage] =
    useState(1);

  const totalPages = 8;

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  return (
    <div className="booking-pagination">

      {/* RESULT INFO */}

      <p className="booking-pagination-info">
        Showing <strong>1-12</strong> of{" "}
        <strong>567</strong>
      </p>

      {/* PAGINATION CONTROLS */}

      <div className="booking-pagination-controls">

        <button
          type="button"
          className="booking-page-navigation"
          onClick={() =>
            goToPage(currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
          <span>Prev</span>
        </button>

        <div className="booking-page-numbers">

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className={
                currentPage === page
                  ? "active"
                  : ""
              }
              onClick={() =>
                goToPage(page)
              }
            >
              {page}
            </button>
          ))}

          <span className="booking-page-dots">
            ...
          </span>

          <button
            type="button"
            className={
              currentPage === 8
                ? "active"
                : ""
            }
            onClick={() =>
              goToPage(8)
            }
          >
            8
          </button>

        </div>

        <button
          type="button"
          className="booking-page-navigation"
          onClick={() =>
            goToPage(currentPage + 1)
          }
          disabled={
            currentPage === totalPages
          }
        >
          <span>Next</span>
          <FiChevronRight />
        </button>

      </div>

    </div>
  );
}