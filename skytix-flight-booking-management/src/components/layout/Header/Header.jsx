"use client";

import {
  FiSearch,
  FiBell,
  FiSettings,
} from "react-icons/fi";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <h4>Dashboard</h4>
      </div>

      <div className="header-center">
        <div className="header-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search anything"
          />
        </div>
      </div>

      <div className="header-right">

        <button>
          <FiBell />
        </button>

        <button>
          ✉
        </button>

        <button>
          <FiSettings />
        </button>

        <div className="user-box">

          <div className="avatar">
            K
          </div>

          <div>
            <h6>Koushal</h6>
            <small>Admin</small>
          </div>

        </div>

      </div>

    </header>
  );
}