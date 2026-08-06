"use client";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./PaymentPagination.scss";

export default function PaymentPagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
}) {
  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) *
          itemsPerPage +
        1;

  const endItem = Math.min(
    currentPage *
      itemsPerPage,
    totalItems
  );

  /* ========================================
     PAGE CHANGE
  ======================================== */

  const handlePageChange = (
    page
  ) => {
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
     VISIBLE PAGES
  ======================================== */

  const getVisiblePages =
    () => {
      if (
        totalPages <= 5
      ) {
        return Array.from(
          {
            length:
              totalPages,
          },
          (_, index) =>
            index + 1
        );
      }

      if (
        currentPage <= 3
      ) {
        return [
          1,
          2,
          3,
          "dots-right",
          totalPages,
        ];
      }

      if (
        currentPage >=
        totalPages - 2
      ) {
        return [
          1,
          "dots-left",
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      }

      return [
        1,
        "dots-left",
        currentPage,
        "dots-right",
        totalPages,
      ];
    };

  const visiblePages =
    getVisiblePages();

  return (
    <div className="payment-pagination">

      {/* INFO */}

      <div className="payment-pagination-info">
        Showing{" "}
        {startItem}–{endItem}{" "}
        of {totalItems}
      </div>

      {/* CONTROLS */}

      <div className="payment-pagination-controls">

        <button
          type="button"
          className="payment-pagination-arrow"
          disabled={
            currentPage === 1
          }
          onClick={() =>
            handlePageChange(
              currentPage - 1
            )
          }
          aria-label="Previous page"
        >
          <FiChevronLeft />

          <span>
            Previous
          </span>
        </button>

        <div className="payment-page-numbers">

          {visiblePages.map(
            (page, index) => {
              if (
                typeof page ===
                "string"
              ) {
                return (
                  <span
                    key={`${page}-${index}`}
                    className="payment-pagination-dots"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  type="button"
                  key={page}
                  className={`payment-page-number ${
                    currentPage ===
                    page
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handlePageChange(
                      page
                    )
                  }
                  aria-label={`Page ${page}`}
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

        <button
          type="button"
          className="payment-pagination-arrow"
          disabled={
            currentPage ===
              totalPages ||
            totalItems === 0
          }
          onClick={() =>
            handlePageChange(
              currentPage + 1
            )
          }
          aria-label="Next page"
        >
          <span>
            Next
          </span>

          <FiChevronRight />
        </button>

      </div>

    </div>
  );
}