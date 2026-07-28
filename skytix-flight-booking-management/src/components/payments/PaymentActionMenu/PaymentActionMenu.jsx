"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import "./PaymentActionMenu.scss";

export default function PaymentActionMenu({
  open,
  onClose,
  paymentId,
}) {
  const router = useRouter();
  const menuRef = useRef(null);

  /* ========================================
     CLOSE WHEN CLICKING OUTSIDE
  ======================================== */

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [open, onClose]);

  /* ========================================
     CLOSE WITH ESCAPE
  ======================================== */

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open, onClose]);

  /* ========================================
     VIEW
  ======================================== */

  const handleView = () => {
    router.push(`/payments/${paymentId}`);

    onClose();
  };

  /* ========================================
     EDIT

     We keep this functional without
     inventing a separate edit page.
  ======================================== */

  const handleEdit = () => {
    router.push(`/payments/${paymentId}?mode=edit`);

    onClose();
  };

  /* ========================================
     DELETE

     Actual deletion will be connected when
     transaction state is moved to the page.
  ======================================== */

  const handleDelete = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="payment-action-menu"
      role="menu"
    >
      <button
        type="button"
        role="menuitem"
        onClick={handleView}
      >
        <FiEye />

        <span>View</span>
      </button>

      <button
        type="button"
        role="menuitem"
        onClick={handleEdit}
      >
        <FiEdit2 />

        <span>Edit</span>
      </button>

      <div className="payment-action-divider" />

      <button
        type="button"
        role="menuitem"
        className="payment-action-delete"
        onClick={handleDelete}
      >
        <FiTrash2 />

        <span>Delete</span>
      </button>
    </div>
  );
}