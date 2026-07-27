"use client";

import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./MainLayout.scss";

export default function MainLayout({
  children,
  showHeader = true,
  showFooter = true,
  title = "Dashboard",
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="main-layout">

      {/* =====================================
          SIDEBAR
      ====================================== */}

      <Sidebar open={sidebarOpen} />

      {/* =====================================
          MOBILE SIDEBAR OVERLAY
      ====================================== */}

      {sidebarOpen && (
        <button
          type="button"
          className="main-layout-overlay"
          aria-label="Close navigation"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="main-content">

        {showHeader && (
          <Header
            title={title}
            setOpen={setSidebarOpen}
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
  );
}