"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import {
  deals as initialDeals,
  DEALS_PER_PAGE,
} from "@/components/deals/data/deals";

import {
  FiFilter,
  FiSliders,
  FiPlus,
  FiSearch,
  FiEdit2,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import "./page.scss";

export default function DealsPage() {
  /* ========================================
     DEALS
  ======================================== */

  const [deals, setDeals] = useState(() =>
    initialDeals.map((deal) => ({
      ...deal,
    }))
  );

  /* ========================================
     SEARCH
  ======================================== */

  const [search, setSearch] = useState("");

  /* ========================================
     SORT
  ======================================== */

  const [sortOrder, setSortOrder] =
    useState("default");

  /* ========================================
     FILTER
  ======================================== */

  const [filterOpen, setFilterOpen] =
    useState(false);

  const [filterValue, setFilterValue] =
    useState("all");

  /* ========================================
     PAGINATION
  ======================================== */

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ========================================
     PROMO MODAL
  ======================================== */

  const [modalOpen, setModalOpen] =
    useState(false);

  const [editingDeal, setEditingDeal] =
    useState(null);

  const [promoPeriod, setPromoPeriod] =
    useState("");

  /* ========================================
     FILTER OPTIONS
  ======================================== */

  const filterOptions = [
    {
      label: "All Promos",
      value: "all",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
  ];

  /* ========================================
     FILTER + SEARCH + SORT
  ======================================== */

  const processedDeals = useMemo(() => {
    let result = [...deals];

    const value =
      search.trim().toLowerCase();

    /* SEARCH */

    if (value) {
      result = result.filter((deal) =>
        deal.promoPeriod
          .toLowerCase()
          .includes(value)
      );
    }

    /* FILTER */

    if (filterValue !== "all") {
      result = result.filter((deal) => {
        const period =
          deal.promoPeriod.toLowerCase();

        return period.includes(
          filterValue.toLowerCase()
        );
      });
    }

    /* SORT */

    if (sortOrder === "asc") {
      result.sort((a, b) =>
        a.promoPeriod.localeCompare(
          b.promoPeriod
        )
      );
    }

    if (sortOrder === "desc") {
      result.sort((a, b) =>
        b.promoPeriod.localeCompare(
          a.promoPeriod
        )
      );
    }

    return result;
  }, [
    deals,
    search,
    filterValue,
    sortOrder,
  ]);

  /* ========================================
     TOTAL PAGES
  ======================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      processedDeals.length /
        DEALS_PER_PAGE
    )
  );

  /* ========================================
     CURRENT PAGE DATA
  ======================================== */

  const visibleDeals = useMemo(() => {
    const start =
      (currentPage - 1) *
      DEALS_PER_PAGE;

    return processedDeals.slice(
      start,
      start + DEALS_PER_PAGE
    );
  }, [
    processedDeals,
    currentPage,
  ]);

  /* ========================================
     RESET PAGE AFTER FILTER CHANGE
  ======================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    filterValue,
    sortOrder,
  ]);

  /* ========================================
     PROTECT PAGE AFTER DELETE
  ======================================== */

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [
    currentPage,
    totalPages,
  ]);

  /* ========================================
     ADD PROMO
  ======================================== */

  const handleAddPromo = () => {
    setEditingDeal(null);
    setPromoPeriod("");
    setModalOpen(true);
  };

  /* ========================================
     EDIT PROMO
  ======================================== */

  const handleEditPromo = (deal) => {
    setEditingDeal(deal);

    setPromoPeriod(
      deal.promoPeriod
    );

    setModalOpen(true);
  };

  /* ========================================
     CLOSE MODAL
  ======================================== */

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingDeal(null);
    setPromoPeriod("");
  };

  /* ========================================
     SAVE PROMO
  ======================================== */

  const handleSavePromo = (event) => {
    event.preventDefault();

    const cleanPeriod =
      promoPeriod.trim();

    if (!cleanPeriod) {
      return;
    }

    /* EDIT */

    if (editingDeal) {
      setDeals((current) =>
        current.map((deal) =>
          deal.id === editingDeal.id
            ? {
                ...deal,
                promoPeriod:
                  cleanPeriod,
              }
            : deal
        )
      );
    }

    /* ADD */

    else {
      const nextId =
        deals.length > 0
          ? Math.max(
              ...deals.map(
                (deal) => deal.id
              )
            ) + 1
          : 1;

      setDeals((current) => [
        {
          id: nextId,
          promoPeriod:
            cleanPeriod,
        },
        ...current,
      ]);

      setCurrentPage(1);
    }

    handleCloseModal();
  };

  /* ========================================
     DELETE PROMO
  ======================================== */

  const handleDeletePromo = (
    dealId
  ) => {
    setDeals((current) =>
      current.filter(
        (deal) =>
          deal.id !== dealId
      )
    );
  };

  /* ========================================
     SHOWING RANGE
  ======================================== */

  const showingStart =
    processedDeals.length === 0
      ? 0
      : (currentPage - 1) *
          DEALS_PER_PAGE +
        1;

  const showingEnd = Math.min(
    currentPage * DEALS_PER_PAGE,
    processedDeals.length
  );

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <main className="deals-page">

        {/* =====================================
            SHARED HEADER
        ====================================== */}

        <Header
          title="Deals"
          showSearch={true}
        />

        {/* =====================================
            TOOLBAR
        ====================================== */}

        <section className="deals-toolbar">

          <div className="deals-toolbar-left">

            {/* FILTER */}

            <div className="deals-filter-wrapper">

              <button
                type="button"
                className={`deals-toolbar-button ${
                  filterOpen
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setFilterOpen(
                    (current) =>
                      !current
                  )
                }
                aria-expanded={filterOpen}
              >
                <FiFilter />

                <span>
                  Filter
                </span>
              </button>

              {filterOpen && (
                <div className="deals-filter-menu">

                  {filterOptions.map(
                    (option) => (
                      <button
                        type="button"
                        key={option.value}
                        className={
                          filterValue ===
                          option.value
                            ? "active"
                            : ""
                        }
                        onClick={() => {
                          setFilterValue(
                            option.value
                          );

                          setFilterOpen(
                            false
                          );
                        }}
                      >
                        {option.label}
                      </button>
                    )
                  )}

                </div>
              )}

            </div>

            {/* SORT */}

            <div className="deals-sort">

              <FiSliders />

              <span>
                Sort By
              </span>

              <select
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(
                    event.target.value
                  )
                }
                aria-label="Sort deals"
              >
                <option value="default">
                  Default
                </option>

                <option value="asc">
                  Promo Period A-Z
                </option>

                <option value="desc">
                  Promo Period Z-A
                </option>

              </select>

            </div>

          </div>

          <div className="deals-toolbar-right">

            {/* SEARCH */}

            <div className="deals-search">

              <FiSearch />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search promo"
                aria-label="Search promos"
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}

            </div>

            {/* ADD */}

            <button
              type="button"
              className="deals-add-button"
              onClick={
                handleAddPromo
              }
            >
              <FiPlus />

              <span>
                Add Promo
              </span>
            </button>

          </div>

        </section>

        {/* =====================================
            GRID
        ====================================== */}

        <section className="deals-grid">

          {visibleDeals.length > 0 ? (
            visibleDeals.map(
              (deal) => (
                <article
                  key={deal.id}
                  className="deal-card"
                >

                  {/* PROMO VISUAL */}

                  <div className="deal-card-visual">

                    <div className="deal-card-visual-content">

                      <span>
                        Special Offer
                      </span>

                      <strong>
                        SKYTIX
                      </strong>

                      <small>
                        PROMO
                      </small>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="deal-card-content">

                    <div className="deal-card-period">

                      <span>
                        Promo Period
                      </span>

                      <strong>
                        {deal.promoPeriod}
                      </strong>

                    </div>

                    <div className="deal-card-actions">

                      <button
                        type="button"
                        className="deal-card-delete"
                        onClick={() =>
                          handleDeletePromo(
                            deal.id
                          )
                        }
                      >
                        <FiTrash2 />

                        <span>
                          Delete
                        </span>
                      </button>

                      <button
                        type="button"
                        className="deal-card-edit"
                        onClick={() =>
                          handleEditPromo(
                            deal
                          )
                        }
                      >
                        <FiEdit2 />

                        <span>
                          Edit
                        </span>
                      </button>

                    </div>

                  </div>

                </article>
              )
            )
          ) : (
            <div className="deals-empty">

              <strong>
                No promos found
              </strong>

              <span>
                Try changing your
                search or filter.
              </span>

            </div>
          )}

        </section>

        {/* =====================================
            PAGINATION
        ====================================== */}

        <section className="deals-pagination-area">

          <p>
            Showing{" "}
            {showingStart}-
            {showingEnd} of{" "}
            {processedDeals.length}
          </p>

          <div className="deals-pagination">

            <button
              type="button"
              disabled={
                currentPage === 1
              }
              onClick={() =>
                setCurrentPage(
                  (current) =>
                    Math.max(
                      1,
                      current - 1
                    )
                )
              }
            >
              Prev
            </button>

            {Array.from(
              {
                length:
                  totalPages,
              },
              (_, index) =>
                index + 1
            ).map((page) => (
              <button
                type="button"
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={
                currentPage ===
                totalPages
              }
              onClick={() =>
                setCurrentPage(
                  (current) =>
                    Math.min(
                      totalPages,
                      current + 1
                    )
                )
              }
            >
              Next
            </button>

          </div>

        </section>

        {/* =====================================
            SHARED FOOTER
        ====================================== */}

        <Footer />

        {/* =====================================
            ADD / EDIT MODAL
        ====================================== */}

        {modalOpen && (
          <div
            className="deal-modal-backdrop"
            onMouseDown={(event) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                handleCloseModal();
              }
            }}
          >

            <div
              className="deal-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="deal-modal-title"
            >

              <div className="deal-modal-header">

                <h2 id="deal-modal-title">
                  {editingDeal
                    ? "Edit Promo"
                    : "Add Promo"}
                </h2>

                <button
                  type="button"
                  onClick={
                    handleCloseModal
                  }
                  aria-label="Close"
                >
                  <FiX />
                </button>

              </div>

              <form
                onSubmit={
                  handleSavePromo
                }
              >

                <label
                  htmlFor="promoPeriod"
                >
                  Promo Period
                </label>

                <input
                  id="promoPeriod"
                  type="text"
                  value={promoPeriod}
                  onChange={(event) =>
                    setPromoPeriod(
                      event.target.value
                    )
                  }
                  placeholder="July 1, 2024 - August 15, 2024"
                  autoFocus
                />

                <div className="deal-modal-actions">

                  <button
                    type="button"
                    className="deal-modal-cancel"
                    onClick={
                      handleCloseModal
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="deal-modal-save"
                    disabled={
                      !promoPeriod.trim()
                    }
                  >
                    {editingDeal
                      ? "Save Changes"
                      : "Add Promo"}
                  </button>

                </div>

              </form>

            </div>

          </div>
        )}

      </main>
    </MainLayout>
  );
}