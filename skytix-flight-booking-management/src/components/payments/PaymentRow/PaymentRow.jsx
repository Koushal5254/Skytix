"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  FiEdit3,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import PaymentActionMenu from "../PaymentActionMenu/PaymentActionMenu";

import "./PaymentRow.scss";

export default function PaymentRow({
  payment,
  onDelete,
}) {
  const [
    openMenu,
    setOpenMenu,
  ] = useState(false);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  /* ========================================
     DELETE
  ======================================== */

  const handleDelete = () => {
    setOpenMenu(false);

    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    onDelete?.(payment.id);

    setDeleteOpen(false);
  };

  /* ========================================
     ESCAPE DELETE DIALOG
  ======================================== */

  useEffect(() => {
    if (!deleteOpen) {
      return;
    }

    const handleKeyDown = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        setDeleteOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [deleteOpen]);

  const statusClass = String(
    payment.status || ""
  )
    .trim()
    .toLowerCase();

  return (
    <>

      <div className="payment-row">

        {/* NAME */}

        <div className="payment-customer">

          <div className="payment-customer-avatar">
            {getInitials(
              payment.name
            )}
          </div>

          <div className="payment-customer-info">

            <h4>
              {payment.name}
            </h4>

          </div>

        </div>

        {/* BOOKING CODE */}

        <div className="payment-cell payment-booking-code">
          {payment.bookingCode}
        </div>

        {/* AIRLINE */}

        <div className="payment-cell payment-airline">
          {payment.airline}
        </div>

        {/* ROUTE */}

        <div className="payment-cell payment-route">
          {payment.route}
        </div>

        {/* BILLING DATE */}

        <div className="payment-cell payment-date">
          {formatPaymentDate(
            payment.billingDate
          )}
        </div>

        {/* AMOUNT */}

        <div className="payment-cell payment-amount">
          {payment.amount}
        </div>

        {/* STATUS */}

        <div className="payment-status-cell">

          <span
            className={`payment-status payment-status--${statusClass}`}
          >
            {payment.status}
          </span>

        </div>

        {/* ACTION */}

        <div className="payment-row-action">

          <button
            type="button"
            className={`payment-edit-btn ${
              openMenu
                ? "active"
                : ""
            }`}
            aria-label={`Actions for ${payment.name}`}
            aria-expanded={
              openMenu
            }
            onClick={() =>
              setOpenMenu(
                (current) =>
                  !current
              )
            }
          >
            <FiEdit3 />
          </button>

          <PaymentActionMenu
            open={openMenu}
            onClose={() =>
              setOpenMenu(false)
            }
            paymentId={
              payment.id
            }
            onDelete={
              handleDelete
            }
          />

        </div>

      </div>

      {/* DELETE CONFIRMATION */}

      {deleteOpen && (
        <div
          className="payment-delete-overlay"
          onMouseDown={(
            event
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setDeleteOpen(
                false
              );
            }
          }}
        >

          <div
            className="payment-delete-dialog"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby={`payment-delete-${payment.id}`}
          >

            <button
              type="button"
              className="payment-delete-close"
              aria-label="Close"
              onClick={() =>
                setDeleteOpen(
                  false
                )
              }
            >
              <FiX />
            </button>

            <div className="payment-delete-icon">
              <FiTrash2 />
            </div>

            <h3
              id={`payment-delete-${payment.id}`}
            >
              Delete transaction?
            </h3>

            <p>
              Are you sure you want
              to delete the payment
              for{" "}
              <strong>
                {payment.name}
              </strong>
              ?
            </p>

            <span className="payment-delete-warning">
              This transaction will
              be removed from the
              payment list.
            </span>

            <div className="payment-delete-actions">

              <button
                type="button"
                className="payment-delete-cancel"
                onClick={() =>
                  setDeleteOpen(
                    false
                  )
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="payment-delete-confirm"
                onClick={
                  confirmDelete
                }
              >
                <FiTrash2 />

                <span>
                  Delete
                </span>
              </button>

            </div>

          </div>

        </div>
      )}

    </>
  );
}

/* ========================================
   INITIALS
======================================== */

function getInitials(
  name = ""
) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(
      (word) =>
        word[0]
    )
    .join("")
    .toUpperCase();
}

/* ========================================
   DATE
======================================== */

function formatPaymentDate(
  date
) {
  if (!date) {
    return "";
  }

  const parsedDate =
    new Date(
      `${date}T00:00:00`
    );

  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {
    return date;
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(parsedDate);
}