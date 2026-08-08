"use client";

import {
  useEffect,
  useRef,
} from "react";

import {
  useRouter,
} from "next/navigation";

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
  onDelete,
}) {
  const router =
    useRouter();

  const menuRef =
    useRef(null);

  /* ========================================
     OUTSIDE CLICK
  ======================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleMouseDown = (
      event
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        onClose?.();
      }
    };

    document.addEventListener(
      "mousedown",
      handleMouseDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleMouseDown
      );
    };
  }, [
    open,
    onClose,
  ]);

  /* ========================================
     ESCAPE
  ======================================== */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose?.();
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
  }, [
    open,
    onClose,
  ]);

  /* ========================================
     VIEW EXISTING DETAIL PAGE
  ======================================== */

  const handleView = () => {
    onClose?.();

    router.push(
      `/payments/${paymentId}`
    );
  };

  /* ========================================
     EDIT EXISTING DETAIL PAGE
  ======================================== */

  const handleEdit = () => {
    onClose?.();

    router.push(
      `/payments/${paymentId}?mode=edit`
    );
  };

  /* ========================================
     DELETE
  ======================================== */

  const handleDelete = () => {
    onClose?.();

    onDelete?.();
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
        onClick={
          handleView
        }
      >
        <FiEye />

        <span>
          View
        </span>
      </button>

      <button
        type="button"
        role="menuitem"
        onClick={
          handleEdit
        }
      >
        <FiEdit2 />

        <span>
          Edit
        </span>
      </button>

      <div className="payment-action-divider" />

      <button
        type="button"
        role="menuitem"
        className="payment-action-delete"
        onClick={
          handleDelete
        }
      >
        <FiTrash2 />

        <span>
          Delete
        </span>
      </button>

    </div>
  );
}