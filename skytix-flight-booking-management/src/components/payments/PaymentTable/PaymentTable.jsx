"use client";

import PaymentRow from "../PaymentRow/PaymentRow";

import "./PaymentTable.scss";

export default function PaymentTable({
  payments = [],
}) {
  return (
    <section className="payment-table">

      <div className="payment-table-header">

        <div>Name</div>

        <div>
          Booking Code
        </div>

        <div>Airline</div>

        <div>Route</div>

        <div>
          Billing Date
        </div>

        <div>Amount</div>

        <div>Status</div>

        <div className="action-column">
          Action
        </div>

      </div>

      <div className="payment-table-body">

        {payments.length > 0 ? (
          payments.map((payment) => (
            <PaymentRow
              key={payment.id}
              payment={payment}
            />
          ))
        ) : (
          <div className="payment-no-data">
            No transactions found.
          </div>
        )}

      </div>

    </section>
  );
}