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

  useEffect(() => {

    function handleClick(e) {

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        onClose();
      }

    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );

  }, [onClose]);

  if (!open) return null;

  return (

    <div
      ref={menuRef}
      className="payment-action-menu"
    >

      <button
        onClick={() => {

          router.push(`/payments/${paymentId}`);

          onClose();

        }}
      >

        <FiEye />

        View

      </button>

      <button>

        <FiEdit2 />

        Edit

      </button>

      <button className="delete">

        <FiTrash2 />

        Delete

      </button>

    </div>

  );

}