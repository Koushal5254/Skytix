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
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  /* ========================================
     FILTERED DATA
  ======================================== */

  const filteredPayments = useMemo(() => {
    const query = search.trim().toLowerCase();

    return paymentData.filter((payment) => {
      const matchesSearch =
        !query ||
        payment.name
          .toLowerCase()
          .includes(query) ||
        payment.bookingCode
          .toLowerCase()
          .includes(query) ||
        payment.airline
          .toLowerCase()
          .includes(query) ||
        payment.route
          .toLowerCase()
          .includes(query);

      const matchesStatus =
        status === "All" ||
        payment.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  /* ========================================
     PAGINATION
  ======================================== */

  const totalItems = filteredPayments.length;

  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / ITEMS_PER_PAGE)
  );

  const paginatedPayments = useMemo(() => {
    const startIndex =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredPayments.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );
  }, [filteredPayments, currentPage]);

  /* ========================================
     RESET PAGE AFTER FILTER
  ======================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, status]);

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="payments-page">

        <PaymentHeader />

        <div className="payments-content-card">

          <PaymentToolbar
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
          />

          <PaymentTable
            payments={paginatedPayments}
          />

          <PaymentPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
          />

        </div>

        <ScheduleFooter />

      </div>
    </MainLayout>
  );
}