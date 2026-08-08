"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
  FiUser,
  FiLogOut,
  FiX,
  FiCheck,
  FiCalendar,
  FiCreditCard,
  FiMessageCircle,
  FiMap,
  FiTag,
  FiGrid,
} from "react-icons/fi";

import "./Header.scss";

/* ========================================
   SEARCH ITEMS
======================================== */

const searchItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    label: "Bookings",
    href: "/bookings",
    icon: FiCheck,
  },
  {
    label: "Schedule",
    href: "/schedule",
    icon: FiCalendar,
  },
  {
    label: "Payments",
    href: "/payments",
    icon: FiCreditCard,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: FiMessageCircle,
  },
  {
    label: "Flight Tracking",
    href: "/flight-tracking",
    icon: FiMap,
  },
  {
    label: "Deals",
    href: "/deals",
    icon: FiTag,
  },
];

/* ========================================
   NOTIFICATIONS
======================================== */

const initialNotifications = [
  {
    id: 1,
    title: "New flight booking",
    description:
      "A new CloudNine Airlines booking was created.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment confirmed",
    description:
      "Payment for booking CN-KL2345 was confirmed.",
    time: "20 min ago",
    read: false,
  },
  {
    id: 3,
    title: "Schedule updated",
    description:
      "A flight departure time has been updated.",
    time: "1 hour ago",
    read: true,
  },
];

/* ========================================
   HEADER
======================================== */

export default function Header({
  title = "Dashboard",
  setOpen,
  showSearch = true,
}) {
  const router = useRouter();

  const headerRef = useRef(null);
  const searchInputRef = useRef(null);

  /* ========================================
     SEARCH
  ======================================== */

  const [searchValue, setSearchValue] =
    useState("");

  const [searchOpen, setSearchOpen] =
    useState(false);

  /* ========================================
     ACTIVE MENU
  ======================================== */

  const [activeMenu, setActiveMenu] =
    useState(null);

  /* ========================================
     NOTIFICATIONS
  ======================================== */

  const [
    notifications,
    setNotifications,
  ] = useState(initialNotifications);

  /* ========================================
     SEARCH RESULTS
  ======================================== */

  const searchResults = useMemo(() => {
    const query =
      searchValue.trim().toLowerCase();

    if (!query) {
      return searchItems;
    }

    return searchItems.filter((item) =>
      item.label
        .toLowerCase()
        .includes(query)
    );
  }, [searchValue]);

  /* ========================================
     UNREAD COUNT
  ======================================== */

  const unreadCount = useMemo(
    () =>
      notifications.filter(
        (item) => !item.read
      ).length,
    [notifications]
  );

  /* ========================================
     CLOSE MENUS
  ======================================== */

  const closeMenus = () => {
    setActiveMenu(null);
  };

  /* ========================================
     TOGGLE MENU
  ======================================== */

  const toggleMenu = (menu) => {
    setSearchOpen(false);

    setActiveMenu((current) =>
      current === menu
        ? null
        : menu
    );
  };

  /* ========================================
     OUTSIDE CLICK
  ======================================== */

  useEffect(() => {
    const handlePointerDown = (
      event
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target
        )
      ) {
        closeMenus();

        setSearchOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown
      );
    };
  }, []);

  /* ========================================
     ESCAPE + SEARCH SHORTCUT
  ======================================== */

  useEffect(() => {
    const handleKeyDown = (
      event
    ) => {
      if (event.key === "Escape") {
        closeMenus();

        setSearchOpen(false);

        searchInputRef.current?.blur();
      }

      if (
        showSearch &&
        (event.ctrlKey ||
          event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        closeMenus();

        setSearchOpen(true);

        searchInputRef.current?.focus();
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
  }, [showSearch]);

  /* ========================================
     NAVIGATE
  ======================================== */

  const handleNavigate = (href) => {
    setSearchValue("");

    setSearchOpen(false);

    closeMenus();

    router.push(href);
  };

  /* ========================================
     SEARCH SUBMIT
  ======================================== */

  const handleSearchSubmit = (
    event
  ) => {
    event.preventDefault();

    if (
      searchResults.length === 0
    ) {
      return;
    }

    handleNavigate(
      searchResults[0].href
    );
  };

  /* ========================================
     NOTIFICATION
  ======================================== */

  const handleNotificationClick = (
    id
  ) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              read: true,
            }
          : item
      )
    );
  };

  /* ========================================
     MARK ALL READ
  ======================================== */

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        read: true,
      }))
    );
  };

  /* ========================================
     SIGN OUT
  ======================================== */

  const handleSignOut = () => {
    closeMenus();

    router.push("/");
  };

  return (
    <header
      ref={headerRef}
      className="layout-header"
    >
      {/* =====================================
          TITLE
      ====================================== */}

      <div className="layout-header-title">

        <button
          type="button"
          className="layout-header-menu-button"
          onClick={() =>
            setOpen?.(
              (current) => !current
            )
          }
          aria-label="Open navigation"
        >
          <FiMenu />
        </button>

        <h1>{title}</h1>

      </div>

      {/* =====================================
          RIGHT CONTENT
      ====================================== */}

      <div className="layout-header-content">

        {/* ===================================
            SEARCH
        ==================================== */}

        {showSearch && (
          <div className="layout-header-search-wrapper">

            <form
              className="layout-header-search"
              onSubmit={
                handleSearchSubmit
              }
            >
              <FiSearch />

              <input
                ref={searchInputRef}
                type="search"
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(
                    event.target.value
                  );

                  setSearchOpen(true);

                  closeMenus();
                }}
                onFocus={() => {
                  setSearchOpen(true);

                  closeMenus();
                }}
                placeholder="Search anything"
                aria-label="Search"
                autoComplete="off"
              />

              {searchValue && (
                <button
                  type="button"
                  className="layout-header-search-clear"
                  onClick={() => {
                    setSearchValue("");

                    searchInputRef.current?.focus();
                  }}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}

            </form>

            {/* SEARCH RESULTS */}

            {searchOpen &&
              searchValue.trim() && (
                <div className="layout-header-search-results">

                  {searchResults.length >
                  0 ? (
                    searchResults.map(
                      (item) => {
                        const Icon =
                          item.icon;

                        return (
                          <button
                            type="button"
                            key={
                              item.href
                            }
                            onClick={() =>
                              handleNavigate(
                                item.href
                              )
                            }
                          >
                            <span className="layout-header-search-result-icon">
                              <Icon />
                            </span>

                            <span>
                              {
                                item.label
                              }
                            </span>
                          </button>
                        );
                      }
                    )
                  ) : (
                    <div className="layout-header-search-empty">
                      No results found
                    </div>
                  )}

                </div>
              )}

          </div>
        )}

        {/* ===================================
            ACTIONS
        ==================================== */}

        <div className="layout-header-actions">

          {/* NOTIFICATIONS */}

          <div className="layout-header-action-wrapper">

            <button
              type="button"
              className={`layout-header-action ${
                activeMenu ===
                "notifications"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMenu(
                  "notifications"
                )
              }
              aria-label="Notifications"
              aria-expanded={
                activeMenu ===
                "notifications"
              }
            >
              <FiBell />

              {unreadCount > 0 && (
                <span className="layout-header-notification" />
              )}
            </button>

            {activeMenu ===
              "notifications" && (
              <div className="layout-header-panel layout-notification-panel">

                <div className="layout-header-panel-heading">

                  <div>
                    <strong>
                      Notifications
                    </strong>

                    <span>
                      {unreadCount} unread
                    </span>
                  </div>

                  {unreadCount > 0 && (
                    <button
                      type="button"
                      onClick={
                        markAllAsRead
                      }
                    >
                      Mark all read
                    </button>
                  )}

                </div>

                <div className="layout-notification-list">

                  {notifications.map(
                    (item) => (
                      <button
                        type="button"
                        key={item.id}
                        className={`layout-notification-item ${
                          !item.read
                            ? "unread"
                            : ""
                        }`}
                        onClick={() =>
                          handleNotificationClick(
                            item.id
                          )
                        }
                      >
                        <span className="layout-notification-icon">
                          <FiBell />
                        </span>

                        <span className="layout-notification-content">

                          <strong>
                            {
                              item.title
                            }
                          </strong>

                          <span>
                            {
                              item.description
                            }
                          </span>

                          <small>
                            {item.time}
                          </small>

                        </span>

                        {!item.read && (
                          <i />
                        )}
                      </button>
                    )
                  )}

                </div>

              </div>
            )}

          </div>

          {/* HELP */}

          <div className="layout-header-action-wrapper">

            <button
              type="button"
              className={`layout-header-action ${
                activeMenu === "help"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMenu("help")
              }
              aria-label="Help"
              aria-expanded={
                activeMenu === "help"
              }
            >
              <FiHelpCircle />
            </button>

            {activeMenu === "help" && (
              <div className="layout-header-small-menu">

                <div className="layout-header-small-title">
                  Help
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleNavigate(
                      "/bookings"
                    )
                  }
                >
                  <FiCheck />

                  <span>
                    Manage Bookings
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleNavigate(
                      "/schedule"
                    )
                  }
                >
                  <FiCalendar />

                  <span>
                    Flight Schedule
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleNavigate(
                      "/messages"
                    )
                  }
                >
                  <FiMessageCircle />

                  <span>
                    Support Messages
                  </span>
                </button>

              </div>
            )}

          </div>

          {/* SETTINGS */}

          <div className="layout-header-action-wrapper">

            <button
              type="button"
              className={`layout-header-action ${
                activeMenu ===
                "settings"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMenu("settings")
              }
              aria-label="Settings"
              aria-expanded={
                activeMenu ===
                "settings"
              }
            >
              <FiSettings />
            </button>

            {activeMenu ===
              "settings" && (
              <div className="layout-header-small-menu">

                <div className="layout-header-small-title">
                  Settings
                </div>

                <button
                  type="button"
                  onClick={closeMenus}
                >
                  <FiBell />

                  <span>
                    Notifications
                  </span>
                </button>

                <button
                  type="button"
                  onClick={closeMenus}
                >
                  <FiUser />

                  <span>
                    Account Settings
                  </span>
                </button>

              </div>
            )}

          </div>

        </div>

        {/* ===================================
            PROFILE
        ==================================== */}

        <div className="layout-header-profile-wrapper">

          <button
            type="button"
            className={`layout-header-profile ${
              activeMenu === "profile"
                ? "active"
                : ""
            }`}
            onClick={() =>
              toggleMenu("profile")
            }
            aria-expanded={
              activeMenu === "profile"
            }
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
                activeMenu ===
                "profile"
                  ? "open"
                  : ""
              }`}
            />

          </button>

          {/* PROFILE DROPDOWN */}

          {activeMenu === "profile" && (
            <div className="layout-header-dropdown">

              <div className="layout-header-profile-summary">

                <div className="layout-header-profile-summary-avatar">
                  MS
                </div>

                <div>
                  <strong>
                    Martin Septimus
                  </strong>

                  <span>
                    Administrator
                  </span>
                </div>

              </div>

              <div className="layout-header-dropdown-divider" />

              <button
                type="button"
                onClick={closeMenus}
              >
                <FiUser />

                <span>
                  My Profile
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  toggleMenu(
                    "settings"
                  )
                }
              >
                <FiSettings />

                <span>
                  Settings
                </span>
              </button>

              <div className="layout-header-dropdown-divider" />

              <button
                type="button"
                className="layout-header-sign-out"
                onClick={
                  handleSignOut
                }
              >
                <FiLogOut />

                <span>
                  Sign Out
                </span>
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
}