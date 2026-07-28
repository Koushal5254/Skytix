"use client";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Pagination.scss";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 5,
  onPageChange,
}) {
  /* ========================================
     SAFE VALUES
  ======================================== */

  const safeTotalPages =
    Math.max(1, totalPages);

  const safeCurrentPage =
    Math.min(
      Math.max(1, currentPage),
      safeTotalPages
    );

  /* ========================================
     RESULT RANGE
  ======================================== */

  const startItem =
    totalItems === 0
      ? 0
      : (safeCurrentPage - 1) *
          itemsPerPage +
        1;

  const endItem =
    totalItems === 0
      ? 0
      : Math.min(
          safeCurrentPage *
            itemsPerPage,
          totalItems
        );

  /* ========================================
     PAGE CHANGE
  ======================================== */

  const changePage = (page) => {
    const nextPage = Math.min(
      Math.max(1, page),
      safeTotalPages
    );

    if (
      nextPage === safeCurrentPage
    ) {
      return;
    }

    onPageChange?.(nextPage);

    /*
      Keep the schedule results visible
      after changing page.
    */

    window.requestAnimationFrame(() => {
      document
        .querySelector(
          ".schedule-flight-list"
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  /* ========================================
     PAGE ITEMS
  ======================================== */

  const pageItems =
    createPageItems(
      safeCurrentPage,
      safeTotalPages
    );

  return (
    <div className="schedule-pagination">

      {/* =====================================
          RESULT INFO
      ====================================== */}

      <div className="schedule-pagination-info">

        {totalItems > 0 ? (
          <>
            Showing{" "}

            <strong>
              {startItem}
            </strong>

            {" - "}

            <strong>
              {endItem}
            </strong>

            {" of "}

            <strong>
              {totalItems}
            </strong>

            {" results"}
          </>
        ) : (
          <>No results found</>
        )}

      </div>

      {/* =====================================
          CONTROLS
      ====================================== */}

      <nav
        className="schedule-pagination-controls"
        aria-label="Flight results pagination"
      >

        {/* PREVIOUS */}

        <button
          type="button"
          className="schedule-pagination-arrow"
          disabled={
            safeCurrentPage === 1 ||
            totalItems === 0
          }
          onClick={() =>
            changePage(
              safeCurrentPage - 1
            )
          }
          aria-label="Previous page"
        >
          <FiChevronLeft />
        </button>

        {/* PAGE NUMBERS */}

        <div className="schedule-pagination-pages">

          {pageItems.map(
            (item, index) => {
              if (
                item === "ellipsis"
              ) {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="schedule-pagination-ellipsis"
                    aria-hidden="true"
                  >
                    ...
                  </span>
                );
              }

              const isActive =
                item ===
                safeCurrentPage;

              return (
                <button
                  key={item}
                  type="button"
                  className={`schedule-pagination-page ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    changePage(item)
                  }
                  aria-label={`Go to page ${item}`}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                >
                  {item}
                </button>
              );
            }
          )}

        </div>

        {/* NEXT */}

        <button
          type="button"
          className="schedule-pagination-arrow"
          disabled={
            safeCurrentPage ===
              safeTotalPages ||
            totalItems === 0
          }
          onClick={() =>
            changePage(
              safeCurrentPage + 1
            )
          }
          aria-label="Next page"
        >
          <FiChevronRight />
        </button>

      </nav>

    </div>
  );
}

/* ========================================
   CREATE PAGE ITEMS

   Examples:

   1 2 3 4 5
   1 2 3 ... 10
   1 ... 4 5 6 ... 10
   1 ... 8 9 10
======================================== */

function createPageItems(
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

  /* BEGINNING */

  if (currentPage <= 3) {
    return [
      1,
      2,
      3,
      4,
      "ellipsis",
      totalPages,
    ];
  }

  /* END */

  if (
    currentPage >=
    totalPages - 2
  ) {
    return [
      1,
      "ellipsis",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  /* MIDDLE */

  return [
    1,
    "ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis",
    totalPages,
  ];
}