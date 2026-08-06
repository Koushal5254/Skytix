"use client";

import {
  useMemo,
  useState,
} from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import BookingHeader from "@/components/bookings/BookingHeader/BookingHeader";
import BookingFilters from "@/components/bookings/BookingFilters/BookingFilters";
import BookingList from "@/components/bookings/BookingList/BookingList";
import BookingPagination from "@/components/bookings/BookingPagination/BookingPagination";
import BookingFooter from "@/components/bookings/BookingFooter/BookingFooter";
import AddBookingModal from "@/components/bookings/AddBookingModal/AddBookingModal";

import { initialBookings } from "@/data/booking";

import "@/styles/bookings.scss";

const ITEMS_PER_PAGE = 5;

export default function BookingsPage() {
  /* ========================================
     BOOKINGS
  ======================================== */

  const [bookings, setBookings] =
    useState(initialBookings);

  /* ========================================
     PAGINATION
  ======================================== */

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ========================================
     FILTERS
  ======================================== */

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    airlineFilter,
    setAirlineFilter,
  ] = useState("All");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("All");

  const [
    departureFilter,
    setDepartureFilter,
  ] = useState("All");

  /* ========================================
     ADD BOOKING MODAL
  ======================================== */

  const [
    isAddModalOpen,
    setIsAddModalOpen,
  ] = useState(false);

  /* ========================================
     AIRLINE OPTIONS
  ======================================== */

  const airlines = useMemo(() => {
    return [
      ...new Set(
        bookings
          .map((booking) =>
            booking.airline?.trim()
          )
          .filter(Boolean)
      ),
    ].sort();
  }, [bookings]);

  /* ========================================
     DEPARTURE OPTIONS
  ======================================== */

  const departures = useMemo(() => {
    return [
      ...new Set(
        bookings
          .map((booking) =>
            booking.from?.trim()
          )
          .filter(Boolean)
      ),
    ].sort();
  }, [bookings]);

  /* ========================================
     FILTER BOOKINGS
  ======================================== */

  const filteredBookings =
    useMemo(() => {
      const search =
        searchTerm
          .trim()
          .toLowerCase();

      return bookings.filter(
        (booking) => {
          const matchesSearch =
            !search ||
            booking.airline
              ?.toLowerCase()
              .includes(search) ||
            booking.code
              ?.toLowerCase()
              .includes(search) ||
            booking.from
              ?.toLowerCase()
              .includes(search) ||
            booking.fromCode
              ?.toLowerCase()
              .includes(search) ||
            booking.to
              ?.toLowerCase()
              .includes(search) ||
            booking.toCode
              ?.toLowerCase()
              .includes(search) ||
            booking.date
              ?.toLowerCase()
              .includes(search) ||
            booking.status
              ?.toLowerCase()
              .includes(search);

          const matchesAirline =
            airlineFilter === "All" ||
            booking.airline ===
              airlineFilter;

          const matchesStatus =
            statusFilter === "All" ||
            booking.status ===
              statusFilter;

          const matchesDeparture =
            departureFilter === "All" ||
            booking.from ===
              departureFilter;

          return (
            matchesSearch &&
            matchesAirline &&
            matchesStatus &&
            matchesDeparture
          );
        }
      );
    }, [
      bookings,
      searchTerm,
      airlineFilter,
      statusFilter,
      departureFilter,
    ]);

  /* ========================================
     PAGINATION
  ======================================== */

  const totalItems =
    filteredBookings.length;

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalItems /
        ITEMS_PER_PAGE
    )
  );

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages
    );

  const startIndex =
    (safeCurrentPage - 1) *
    ITEMS_PER_PAGE;

  const visibleBookings =
    filteredBookings.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );

  /* ========================================
     ADD BOOKING
  ======================================== */

  const handleAddBooking = (
    newBooking
  ) => {
    const booking = {
      ...newBooking,

      id:
        globalThis.crypto
          ?.randomUUID?.() ??
        Date.now(),
    };

    setBookings((previous) => [
      booking,
      ...previous,
    ]);

    /*
     * Reset filters so the new
     * booking is immediately visible.
     */

    setSearchTerm("");
    setAirlineFilter("All");
    setStatusFilter("All");
    setDepartureFilter("All");

    setCurrentPage(1);

    setIsAddModalOpen(false);
  };

  /* ========================================
     SEARCH
  ======================================== */

  const handleSearchChange = (
    value
  ) => {
    setSearchTerm(value);

    setCurrentPage(1);
  };

  /* ========================================
     AIRLINE FILTER
  ======================================== */

  const handleAirlineChange = (
    value
  ) => {
    setAirlineFilter(value);

    setCurrentPage(1);
  };

  /* ========================================
     STATUS FILTER
  ======================================== */

  const handleStatusChange = (
    value
  ) => {
    setStatusFilter(value);

    setCurrentPage(1);
  };

  /* ========================================
     DEPARTURE FILTER
  ======================================== */

  const handleDepartureChange = (
    value
  ) => {
    setDepartureFilter(value);

    setCurrentPage(1);
  };

  /* ========================================
     CLEAR FILTERS
  ======================================== */

  const handleClearFilters = () => {
    setSearchTerm("");

    setAirlineFilter("All");

    setStatusFilter("All");

    setDepartureFilter("All");

    setCurrentPage(1);
  };

  /* ========================================
     PAGE CHANGE
  ======================================== */

  const handlePageChange = (
    page
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);
  };

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="bookings-page">

        {/* =====================================
            SHARED DASHBOARD HEADER
        ====================================== */}

        <BookingHeader />

        {/* =====================================
            FILTERS
        ====================================== */}

        <BookingFilters
          search={searchTerm}
          airline={airlineFilter}
          status={statusFilter}
          departure={
            departureFilter
          }
          airlines={airlines}
          departures={departures}
          onSearchChange={
            handleSearchChange
          }
          onAirlineChange={
            handleAirlineChange
          }
          onStatusChange={
            handleStatusChange
          }
          onDepartureChange={
            handleDepartureChange
          }
          onClearFilters={
            handleClearFilters
          }
          onAddBooking={() =>
            setIsAddModalOpen(
              true
            )
          }
        />

        {/* =====================================
            BOOKINGS
        ====================================== */}

        <BookingList
          bookings={
            visibleBookings
          }
        />

        {/* =====================================
            PAGINATION
        ====================================== */}

        <BookingPagination
          currentPage={
            safeCurrentPage
          }
          totalPages={
            totalPages
          }
          totalItems={
            totalItems
          }
          itemsPerPage={
            ITEMS_PER_PAGE
          }
          onPageChange={
            handlePageChange
          }
        />

        {/* =====================================
            FOOTER
        ====================================== */}

        <BookingFooter />

        {/* =====================================
            ADD BOOKING
        ====================================== */}

        <AddBookingModal
          open={
            isAddModalOpen
          }
          onClose={() =>
            setIsAddModalOpen(
              false
            )
          }
          onAdd={
            handleAddBooking
          }
        />

      </div>
    </MainLayout>
  );
}