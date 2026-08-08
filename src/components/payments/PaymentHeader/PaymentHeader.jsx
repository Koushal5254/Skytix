"use client";

import Header from "@/components/layout/Header/Header";

import "./PaymentHeader.scss";

export default function PaymentHeader({
  setOpen,
}) {
  return (
    <div className="payment-page-header">
      <Header
        title="Payments"
        description="Manage and track all payment transactions."
        setOpen={setOpen}
      />
    </div>
  );
}