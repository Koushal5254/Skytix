"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaPlaneDeparture,
} from "react-icons/fa";

import menu from "./menu";

import "./Sidebar.scss";

export default function Sidebar({
  open = false,
}) {
  const pathname = usePathname();

  const isActive = (link) => {
    if (link === "/dashboard") {
      return pathname === "/dashboard";
    }

    return (
      pathname === link ||
      pathname.startsWith(`${link}/`)
    );
  };

  return (
    <aside
      className={`main-sidebar ${
        open ? "show" : ""
      }`}
    >

      {/* =====================================
          LOGO
      ====================================== */}

      <div className="sidebar-brand">

        <FaPlaneDeparture />

        <span>
          Skytix
        </span>

      </div>

      {/* =====================================
          MENU
      ====================================== */}

      <nav
        className="sidebar-navigation"
        aria-label="Main navigation"
      >
        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            isActive(item.link);

          return (
            <Link
              key={item.id}
              href={item.link}
              className={`sidebar-navigation-item ${
                active ? "active" : ""
              }`}
            >

              <Icon
                className="sidebar-navigation-icon"
              />

              <span className="sidebar-navigation-label">
                {item.title}
              </span>

              {item.badge && (
                <span className="sidebar-navigation-badge">
                  {item.badge}
                </span>
              )}

            </Link>
          );
        })}
      </nav>

      {/* =====================================
          UPGRADE
      ====================================== */}

      <div className="sidebar-upgrade">

        <h5>
          Explore the Enhanced Features!
        </h5>

        <p>
          Unlock a world of enhanced
          capabilities.
        </p>

        <button
          type="button"
          className="sidebar-upgrade-button"
        >
          Upgrade Now
        </button>

      </div>

    </aside>
  );
}