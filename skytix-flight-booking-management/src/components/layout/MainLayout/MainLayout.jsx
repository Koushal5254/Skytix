"use client";

import { useState } from "react";

import ProtectedRoute from "@/components/auth/ProtectedRoute/ProtectedRoute";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./MainLayout.scss";

export default function MainLayout({
  children,
  showHeader = true,
  showFooter = true,
}) {
  const [open, setOpen] = useState(false);

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <ProtectedRoute>
      <div className="main-layout">

        {/* SIDEBAR */}

        <Sidebar
          open={open}
          setOpen={setOpen}
        />

        {/* MOBILE SIDEBAR OVERLAY */}

        {open && (
          <button
            type="button"
            className="main-layout-overlay"
            onClick={handleCloseSidebar}
            aria-label="Close navigation"
          />
        )}

        {/* MAIN CONTENT */}

        <div className="main-content">

          {showHeader && (
            <Header
              setOpen={setOpen}
            />
          )}

          <main className="main-page-content">
            {children}
          </main>

          {showFooter && (
            <Footer />
          )}

        </div>

      </div>
    </ProtectedRoute>
  );
}