"use client";

import "./PurchaseTable.scss";

export default function PurchaseTable({ payment }) {
  if (!payment) {
    return null;
  }

  const formattedDate = new Date(
    `${payment.billingDate}T00:00:00`
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const statusClass =
    payment.status?.toLowerCase().replaceAll(" ", "-") || "";

  return (
    <section className="profile-purchase-history">

      {/* HEADER */}

      <div className="profile-purchase-header">

        <h2>Purchase History</h2>

        <button type="button">
          View All
        </button>

      </div>

      {/* TABLE */}

      <div className="profile-purchase-table-wrap">

        <div className="profile-purchase-table">

          {/* TABLE HEADER */}

          <div className="profile-purchase-head">

            <div>Booking Code</div>

            <div>Route</div>

            <div>Date</div>

            <div>Amount</div>

            <div>Status</div>

          </div>

          {/* TABLE BODY */}

          <div className="profile-purchase-body">

            <div className="profile-purchase-row">

              <div className="purchase-booking-code">
                {payment.bookingCode}
              </div>

              <div className="purchase-route">
                {payment.route}
              </div>

              <div className="purchase-date">
                {formattedDate}
              </div>

              <div className="purchase-amount">
                {payment.amount}
              </div>

              <div className="purchase-status-cell">

                <span
                  className={`purchase-status ${statusClass}`}
                >
                  {payment.status}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}