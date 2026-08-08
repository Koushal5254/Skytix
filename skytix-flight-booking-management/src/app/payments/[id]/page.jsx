import { notFound } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import PaymentDetailsHeader from "@/components/payment-details/PaymentDetailsHeader/PaymentDetailsHeader";
import ProfileCard from "@/components/payment-details/ProfileCard/ProfileCard";
import BookingHistory from "@/components/payment-details/BookingHistory/BookingHistory";
import PurchaseTable from "@/components/payment-details/PurchaseTable/PurchaseTable";

import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";

import paymentData from "@/components/payments/data/paymentData";

import "@/styles/payment-details.scss";

export default async function PaymentDetailsPage({
  params,
}) {
  /* ========================================
     PAYMENT ID
  ======================================== */

  const { id } = await params;

  const paymentId = Number(id);

  /* ========================================
     FIND PAYMENT
  ======================================== */

  const payment = paymentData.find(
    (item) => item.id === paymentId
  );

  if (!payment) {
    notFound();
  }

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <div className="payment-details-page">

        {/* ===================================
            HEADER
        ==================================== */}

        <PaymentDetailsHeader />

        {/* ===================================
            MAIN CONTENT
        ==================================== */}

        <div className="payment-details-body">

          {/* PROFILE */}

          <ProfileCard
            payment={payment}
          />

          {/* RIGHT CONTENT */}

          <div className="payment-details-right">

            <BookingHistory
              payment={payment}
            />

            <PurchaseTable
              payment={payment}
            />

          </div>

        </div>

        {/* ===================================
            FOOTER
        ==================================== */}

        <ScheduleFooter />

      </div>
    </MainLayout>
  );
}