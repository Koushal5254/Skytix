"use client";

import { useState } from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import ScheduleHeader from "@/components/schedule/ScheduleHeader/ScheduleHeader";
import PaymentHeader from "@/components/payments/PaymentHeader/PaymentHeader";
import PaymentTable from "@/components/payments/PaymentTable/PaymentTable";
import PaymentPagination from "@/components/payments/PaymentPagination/PaymentPagination";
import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";

import "@/styles/payments.scss";

export default function PaymentsPage() {

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  return (

    <MainLayout showHeader={false} showFooter={false}>

      <div className="payments-page">

        {/* <ScheduleHeader /> */}

        <PaymentHeader
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        <PaymentTable
          search={search}
          status={status}
        />

        <PaymentPagination />

        <ScheduleFooter />

      </div>

    </MainLayout>

  );

}