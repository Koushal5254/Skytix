"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlaneDeparture } from "react-icons/fa";

import menu from "./menu";

import "./Sidebar.scss";

export default function Sidebar({ open }) {
  const pathname = usePathname();

  return (
    <aside className={`sidebar ${open ? "show" : ""}`}>

      <div className="sidebar-logo">
        <FaPlaneDeparture />
        <span>Skytix</span>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.link}
              className={pathname === item.link ? "active" : ""}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="upgrade-card">
        <h5>Explore Premium</h5>
        <p>Unlock all dashboard features</p>

        <button>
          Upgrade
        </button>
      </div>

    </aside>
  );
}