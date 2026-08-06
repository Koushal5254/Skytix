"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import PaymentHeader from "@/components/payments/PaymentHeader/PaymentHeader";
import PaymentToolbar from "@/components/payments/PaymentToolbar/PaymentToolbar";
import PaymentTable from "@/components/payments/PaymentTable/PaymentTable";
import PaymentPagination from "@/components/payments/PaymentPagination/PaymentPagination";

import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";

import paymentData from "@/components/payments/data/paymentData";

import "@/styles/payments.scss";

const ITEMS_PER_PAGE = 6;

export default function PaymentsPage() {
  /* ========================================
     PAYMENT DATA
  ======================================== */

  const [payments, setPayments] =
    useState(paymentData);

  /* ========================================
     FILTERS
  ======================================== */

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [dateFilter, setDateFilter] =
    useState("all");

  /* ========================================
     PAGINATION
  ======================================== */

  const [currentPage, setCurrentPage] =
    useState(1);

  /* ========================================
     FILTERED PAYMENTS
  ======================================== */

  const filteredPayments = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    return payments.filter(
      (payment) => {
        const searchableValues = [
          payment.name,
          payment.bookingCode,
          payment.airline,
          payment.route,
          payment.billingDate,
          payment.amount,
          payment.status,
        ];

        const matchesSearch =
          !query ||
          searchableValues.some(
            (value) =>
              String(value || "")
                .toLowerCase()
                .includes(query)
          );

        const matchesStatus =
          status === "All" ||
          payment.status === status;

        const matchesDate =
          dateFilter === "all" ||
          payment.billingDate ===
            dateFilter;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesDate
        );
      }
    );
  }, [
    payments,
    search,
    status,
    dateFilter,
  ]);

  /* ========================================
     TOTALS
  ======================================== */

  const totalItems =
    filteredPayments.length;

  const totalPages = Math.max(
    1,
    Math.ceil(
      totalItems /
        ITEMS_PER_PAGE
    )
  );

  /* ========================================
     PAGINATED PAYMENTS
  ======================================== */

  const paginatedPayments =
    useMemo(() => {
      const startIndex =
        (currentPage - 1) *
        ITEMS_PER_PAGE;

      return filteredPayments.slice(
        startIndex,
        startIndex +
          ITEMS_PER_PAGE
      );
    }, [
      filteredPayments,
      currentPage,
    ]);

  /* ========================================
     RESET PAGE AFTER FILTER
  ======================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    status,
    dateFilter,
  ]);

  /* ========================================
     KEEP PAGE VALID
  ======================================== */

  useEffect(() => {
    if (
      currentPage >
      totalPages
    ) {
      setCurrentPage(
        totalPages
      );
    }
  }, [
    currentPage,
    totalPages,
  ]);

  /* ========================================
     DELETE PAYMENT
  ======================================== */

  const handleDeletePayment = (
    paymentId
  ) => {
    setPayments((current) =>
      current.filter(
        (payment) =>
          payment.id !==
          paymentId
      )
    );
  };

  /* ========================================
     UPDATE PAYMENT
  ======================================== */

  const handleUpdatePayment = (
    updatedPayment
  ) => {
    setPayments((current) =>
      current.map((payment) =>
        payment.id ===
        updatedPayment.id
          ? {
              ...payment,
              ...updatedPayment,
            }
          : payment
      )
    );
  };

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="payments-page">

        {/* HEADER */}

        <PaymentHeader />

        {/* CONTENT */}

        <div className="payments-content-card">

          <PaymentToolbar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            dateFilter={
              dateFilter
            }
            setDateFilter={
              setDateFilter
            }
          />

          <PaymentTable
            payments={
              paginatedPayments
            }
            onDelete={
              handleDeletePayment
            }
            onUpdate={
              handleUpdatePayment
            }
          />

          <PaymentPagination
            currentPage={
              currentPage
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
              setCurrentPage
            }
          />

        </div>

        {/* FOOTER */}

        <ScheduleFooter />

      </div>
    </MainLayout>
  );
}