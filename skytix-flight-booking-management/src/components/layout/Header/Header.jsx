"use client";

import { useState } from "react";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import "./Header.scss";

export default function Header({
  title = "Dashboard",
  setOpen,
}) {
  const [searchValue, setSearchValue] =
    useState("");

  const [profileOpen, setProfileOpen] =
    useState(false);

  return (
    <header className="layout-header">

      {/* =====================================
          TITLE + MOBILE MENU
      ====================================== */}

      <div className="layout-header-title">

        <button
          type="button"
          className="layout-header-menu-button"
          onClick={() =>
            setOpen?.((current) => !current)
          }
          aria-label="Open navigation"
        >
          <FiMenu />
        </button>

        <h1>
          {title}
        </h1>

      </div>

      {/* =====================================
          RIGHT CONTENT
      ====================================== */}

      <div className="layout-header-content">

        {/* SEARCH */}

        <div className="layout-header-search">

          <FiSearch />

          <input
            type="search"
            value={searchValue}
            onChange={(event) =>
              setSearchValue(
                event.target.value
              )
            }
            placeholder="Search anything"
            aria-label="Search"
          />

        </div>

        {/* =================================
            HEADER ACTIONS
        ================================= */}

        <div className="layout-header-actions">

          <button
            type="button"
            className="layout-header-action"
            aria-label="Notifications"
          >
            <FiBell />

            <span className="layout-header-notification" />
          </button>

          <button
            type="button"
            className="layout-header-action"
            aria-label="Help"
          >
            <FiHelpCircle />
          </button>

          <button
            type="button"
            className="layout-header-action"
            aria-label="Settings"
          >
            <FiSettings />
          </button>

        </div>

        {/* =================================
            PROFILE
        ================================= */}

        <div className="layout-header-profile-wrapper">

          <button
            type="button"
            className="layout-header-profile"
            onClick={() =>
              setProfileOpen(
                (current) => !current
              )
            }
            aria-expanded={profileOpen}
          >

            <div className="layout-header-avatar">
              MS
            </div>

            <div className="layout-header-user">

              <strong>
                Martin Septimus
              </strong>

              <span>
                Admin
              </span>

            </div>

            <FiChevronDown
              className={`layout-header-chevron ${
                profileOpen
                  ? "open"
                  : ""
              }`}
            />

          </button>

          {/* =================================
              PROFILE DROPDOWN
          ================================= */}

          {profileOpen && (
            <div className="layout-header-dropdown">

              <button
                type="button"
                onClick={() =>
                  setProfileOpen(false)
                }
              >
                My Profile
              </button>

              <button
                type="button"
                onClick={() =>
                  setProfileOpen(false)
                }
              >
                Settings
              </button>

              <button
                type="button"
                onClick={() =>
                  setProfileOpen(false)
                }
              >
                Sign Out
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}