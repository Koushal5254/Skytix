"use client";

import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Pagination.scss";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const handlePrevious = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const handleNext = () => {
    setCurrentPage((page) =>
      Math.min(totalPages, page + 1)
    );
  };

  return (
    <nav
      className="schedule-pagination"
      aria-label="Flight list pagination"
    >
      {/* PREVIOUS */}

      <button
        type="button"
        className="schedule-pagination-btn schedule-pagination-arrow"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FiChevronLeft />
      </button>

      {/* PAGES */}

      <div className="schedule-pagination-pages">
        {Array.from(
          { length: totalPages },
          (_, index) => {
            const page = index + 1;

            return (
              <button
                type="button"
                key={page}
                className={`schedule-pagination-btn ${
                  currentPage === page ? "active" : ""
                }`}
                onClick={() => setCurrentPage(page)}
                aria-current={
                  currentPage === page
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
        className="schedule-pagination-btn schedule-pagination-arrow"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <FiChevronRight />
      </button>
    </nav>
  );
}