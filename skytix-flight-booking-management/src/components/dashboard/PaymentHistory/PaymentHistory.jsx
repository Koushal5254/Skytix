import Card from "@/components/common/Card/Card";
import { payments } from "@/data/dashboardData";

import "./PaymentHistory.scss";

export default function PaymentHistory() {
  return (
    <Card>
      <div className="payment-top">
        <h5>Payment History</h5>

        <div className="payment-actions">
          <input
            type="text"
            placeholder="Search name, airline, etc"
          />

          <button>Latest</button>
        </div>
      </div>

      <table className="payment-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Booking Code</th>
            <th>Date</th>
            <th>Route</th>
            <th>Airline</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.bookingCode}</td>
              <td>{item.date}</td>
              <td>{item.route}</td>
              <td>{item.airline}</td>
              <td>{item.amount}</td>

              <td>
                <span
                  className={`payment-status ${item.status.toLowerCase()}`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}