"use client";

import paymentData from "../data/paymentData";
import PaymentRow from "../PaymentRow/PaymentRow";

import "./PaymentTable.scss";

export default function PaymentTable({
  search,
  status,
}) {

  const filteredData = paymentData.filter((item) => {

    const searchMatch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.bookingCode.toLowerCase().includes(search.toLowerCase()) ||
      item.airline.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      status === "All" || item.status === status;

    return searchMatch && statusMatch;
  });

  return (

    <section className="payment-table">

      {/* Header */}

      <div className="payment-table-header">

        <div>Name</div>
        <div>Booking Code</div>
        <div>Airline</div>
        <div>Route</div>
        <div>Billing Date</div>
        <div>Amount</div>
        <div>Status</div>
        <div className="action-column">
          Action
        </div>

      </div>

      {/* Body */}

      <div className="payment-table-body">

        {filteredData.length > 0 ? (

          filteredData.map((payment) => (

            <PaymentRow
              key={payment.id}
              payment={payment}
            />

          ))

        ) : (

          <div className="no-data">

            No transactions found.

          </div>

        )}

      </div>

    </section>

  );

}