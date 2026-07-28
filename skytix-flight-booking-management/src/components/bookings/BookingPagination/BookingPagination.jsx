"use client";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./BookingPagination.scss";

export default function BookingPagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange,
}) {
  /* ========================================
     RANGE
  ======================================== */

  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) *
          itemsPerPage +
        1;

  const endItem =
    totalItems === 0
      ? 0
      : Math.min(
          currentPage *
            itemsPerPage,
          totalItems
        );

  /* ========================================
     PAGE CHANGE
  ======================================== */

  const goToPage = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    onPageChange?.(page);
  };

  /* ========================================
     PAGE NUMBERS
  ======================================== */

  const pages =
    getVisiblePages(
      currentPage,
      totalPages
    );

  return (
    <div className="booking-pagination">

      {/* RESULT INFO */}

      <p className="booking-pagination-info">
        Showing{" "}

        <strong>
          {startItem}-{endItem}
        </strong>

        {" "}of{" "}

        <strong>
          {totalItems}
        </strong>
      </p>

      {/* CONTROLS */}

      <div className="booking-pagination-controls">

        {/* PREVIOUS */}

        <button
          type="button"
          className="booking-page-navigation"
          onClick={() =>
            goToPage(
              currentPage - 1
            )
          }
          disabled={
            currentPage <= 1
          }
        >
          <FiChevronLeft />

          <span>Prev</span>
        </button>

        {/* PAGE NUMBERS */}

        <div className="booking-page-numbers">

          {pages.map(
            (page, index) => {
              if (
                page === "dots"
              ) {
                return (
                  <span
                    key={`dots-${index}`}
                    className="booking-page-dots"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  type="button"
                  className={
                    currentPage ===
                    page
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    goToPage(page)
                  }
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    currentPage ===
                    page
                      ? "page"
                      : undefined
                  }
                >
                  {page}
                </button>
              );
            }
          )}

        </div>

        {/* NEXT */}

        <button
          type="button"
          className="booking-page-navigation"
          onClick={() =>
            goToPage(
              currentPage + 1
            )
          }
          disabled={
            currentPage >=
            totalPages
          }
        >
          <span>Next</span>

          <FiChevronRight />
        </button>

      </div>

    </div>
  );
}

/* ========================================
   PAGE NUMBER GENERATOR
======================================== */

function getVisiblePages(
  currentPage,
  totalPages
) {
  if (totalPages <= 5) {
    return Array.from(
      {
        length: totalPages,
      },
      (_, index) =>
        index + 1
    );
  }

  if (currentPage <= 3) {
    return [
      1,
      2,
      3,
      4,
      "dots",
      totalPages,
    ];
  }

  if (
    currentPage >=
    totalPages - 2
  ) {
    return [
      1,
      "dots",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "dots",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "dots",
    totalPages,
  ];
}