"use client";

import { useMemo, useState } from "react";

import "./PurchaseTable.scss";

const INITIAL_VISIBLE_ROWS = 3;

/* ========================================
   CREATE PURCHASE HISTORY

   Current payment stays first.
   Additional rows represent the member's
   previous purchase records.
======================================== */

const createPurchaseHistory = (payment) => {
  if (!payment) {
    return [];
  }

  const amountNumber = Number(
    String(payment.amount)
      .replace("$", "")
      .replaceAll(",", "")
  );

  const safeAmount =
    Number.isFinite(amountNumber)
      ? amountNumber
      : 0;

  const baseDate = new Date(
    `${payment.billingDate}T00:00:00`
  );

  const createDate = (daysBefore) => {
    const date = new Date(baseDate);

    date.setDate(
      date.getDate() - daysBefore
    );

    return date;
  };

  const formatAmount = (amount) =>
    `$${Math.max(
      amount,
      0
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return [
    {
      id: `${payment.id}-current`,
      bookingCode: payment.bookingCode,
      route: payment.route,
      date: baseDate,
      amount: payment.amount,
      status: payment.status,
    },

    {
      id: `${payment.id}-2`,
      bookingCode: `${payment.bookingCode}-02`,
      route: payment.route,
      date: createDate(34),
      amount: formatAmount(
        safeAmount - 75
      ),
      status: "Confirmed",
    },

    {
      id: `${payment.id}-3`,
      bookingCode: `${payment.bookingCode}-03`,
      route: payment.route,
      date: createDate(71),
      amount: formatAmount(
        safeAmount + 120
      ),
      status: "Confirmed",
    },

    {
      id: `${payment.id}-4`,
      bookingCode: `${payment.bookingCode}-04`,
      route: payment.route,
      date: createDate(108),
      amount: formatAmount(
        safeAmount - 40
      ),
      status: "Pending",
    },

    {
      id: `${payment.id}-5`,
      bookingCode: `${payment.bookingCode}-05`,
      route: payment.route,
      date: createDate(146),
      amount: formatAmount(
        safeAmount + 55
      ),
      status: "Cancelled",
    },
  ];
};

/* ========================================
   DATE FORMATTER
======================================== */

const formatDate = (date) => {
  if (!date) {
    return "—";
  }

  const parsedDate =
    date instanceof Date
      ? date
      : new Date(`${date}T00:00:00`);

  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {
    return "—";
  }

  return parsedDate.toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
};

/* ========================================
   PURCHASE TABLE
======================================== */

export default function PurchaseTable({
  payment,
}) {
  const [showAll, setShowAll] =
    useState(false);

  /* ========================================
     PURCHASE HISTORY
  ======================================== */

  const purchases = useMemo(
    () => createPurchaseHistory(payment),
    [payment]
  );

  /* ========================================
     VISIBLE PURCHASES
  ======================================== */

  const visiblePurchases =
    showAll
      ? purchases
      : purchases.slice(
          0,
          INITIAL_VISIBLE_ROWS
        );

  if (!payment) {
    return null;
  }

  return (
    <section className="profile-purchase-history">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="profile-purchase-header">

        <h2>
          Purchase History
        </h2>

        {purchases.length >
          INITIAL_VISIBLE_ROWS && (
          <button
            type="button"
            onClick={() =>
              setShowAll(
                (current) => !current
              )
            }
          >
            {showAll
              ? "Show Less"
              : "View All"}
          </button>
        )}

      </div>

      {/* =====================================
          TABLE WRAPPER
      ====================================== */}

      <div className="profile-purchase-table-wrap">

        <div className="profile-purchase-table">

          {/* =================================
              TABLE HEADER
          ================================== */}

          <div className="profile-purchase-head">

            <div>
              Booking Code
            </div>

            <div>
              Route
            </div>

            <div>
              Date
            </div>

            <div>
              Amount
            </div>

            <div>
              Status
            </div>

          </div>

          {/* =================================
              TABLE BODY
          ================================== */}

          <div className="profile-purchase-body">

            {visiblePurchases.map(
              (purchase) => {
                const statusClass =
                  purchase.status
                    ?.toLowerCase()
                    .replaceAll(
                      " ",
                      "-"
                    ) || "";

                return (
                  <div
                    className="profile-purchase-row"
                    key={
                      purchase.id
                    }
                  >

                    {/* BOOKING CODE */}

                    <div className="purchase-booking-code">
                      {
                        purchase.bookingCode
                      }
                    </div>

                    {/* ROUTE */}

                    <div className="purchase-route">
                      {
                        purchase.route
                      }
                    </div>

                    {/* DATE */}

                    <div className="purchase-date">
                      {formatDate(
                        purchase.date
                      )}
                    </div>

                    {/* AMOUNT */}

                    <div className="purchase-amount">
                      {
                        purchase.amount
                      }
                    </div>

                    {/* STATUS */}

                    <div className="purchase-status-cell">

                      <span
                        className={`purchase-status ${statusClass}`}
                      >
                        {
                          purchase.status
                        }
                      </span>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}