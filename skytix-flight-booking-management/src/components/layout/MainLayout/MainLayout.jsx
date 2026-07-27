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
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-layout">
      <Sidebar open={open} />

      <div className="main-content">

        {showHeader && <Header setOpen={setOpen} />}

        <main>{children}</main>

        {showFooter && <Footer />}

      </div>
    </div>
  );
}