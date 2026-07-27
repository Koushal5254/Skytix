"use client";

import { useEffect, useState } from "react";

import {
  FiX,
  FiFileText,
  FiDownload,
  FiExternalLink,
  FiImage,
  FiVideo,
  FiArrowLeft,
  FiMapPin,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import "./MessageProfile.scss";

/* ========================================
   PROFILE DATA
======================================== */

const customerProfiles = {
  1: {
    email: "santo.reagan@example.com",
    phone: "+1 234 567 8908",
    location: "Sydney, Australia",

    passport: {
      number: "P-********",
      nationality: "Australian",
      expiry: "12 Dec 2030",
    },

    booking: {
      code: "AJ-EF9101",
      status: "Confirmed",
      passenger: "Santo Reagan",
      route: "HND-SFO",
    },

    flight: {
      airline: "AeroJet",
      route: "HND-SFO",
      date: "01 Jul 2028",
      time: "10:30 AM",
    },
  },

  6: {
    email: "vicky.wisteria@example.com",
    phone: "+1 234 567 8909",
    location: "Sydney, Australia",

    passport: {
      number: "P-********",
      nationality: "Australian",
      expiry: "18 Mar 2031",
    },

    booking: {
      code: "NA-GH2345",
      status: "Cancelled",
      passenger: "Vicky Wisteria",
      route: "SYD-SIN",
    },

    flight: {
      airline: "Nimbus Airlines",
      route: "SYD-SIN",
      date: "01 Jul 2028",
      time: "2:15 PM",
    },
  },

  9: {
    email: "yuri.wakamura@example.com",
    phone: "+1 234 567 8907",
    location: "New York, USA",

    passport: {
      number: "P-********",
      nationality: "Japanese",
      expiry: "07 Aug 2030",
    },

    booking: {
      code: "FF-CD5678",
      status: "Pending",
      passenger: "Yuri Wakamura",
      route: "LHR-JFK",
    },

    flight: {
      airline: "FlyFast Airways",
      route: "LHR-JFK",
      date: "08 Jul 2028",
      time: "8:45 AM",
    },
  },

  10: {
    email: "oscar.bolster@example.com",
    phone: "+1 234 567 8906",
    location: "London, UK",

    passport: {
      number: "P-********",
      nationality: "British",
      expiry: "21 Nov 2031",
    },

    booking: {
      code: "SH-AB1234",
      status: "Confirmed",
      passenger: "Oscar Bolster",
      route: "NYC-LAX",
    },

    flight: {
      airline: "SkyHigh Airlines",
      route: "NYC-LAX",
      date: "08 Jul 2028",
      time: "11:20 AM",
    },
  },
};

/* ========================================
   DEFAULT PROFILE
======================================== */

const defaultProfile = {
  email: "team@skytix.com",
  phone: "Internal",
  location: "Skytix",

  passport: null,

  booking: {
    code: "Internal",
    status: "Internal",
    passenger: "Skytix Team",
    route: "Internal",
  },

  flight: {
    airline: "Skytix",
    route: "Internal",
    date: "N/A",
    time: "N/A",
  },
};

/* ========================================
   DOCUMENTS
======================================== */

const documents = [
  {
    id: 1,
    name: "Flight Ticket.pdf",
    type: "PDF Document",
    content:
      "Skytix Flight Ticket\n\nThis is a demo document generated from the Messages profile.",
  },
  {
    id: 2,
    name: "Travel Details.pdf",
    type: "PDF Document",
    content:
      "Skytix Travel Details\n\nThis is a demo document generated from the Messages profile.",
  },
  {
    id: 3,
    name: "Booking Summary.pdf",
    type: "PDF Document",
    content:
      "Skytix Booking Summary\n\nThis is a demo document generated from the Messages profile.",
  },
  {
    id: 4,
    name: "Passenger Details.pdf",
    type: "PDF Document",
    content:
      "Skytix Passenger Details\n\nThis is a demo document generated from the Messages profile.",
  },
];

/* ========================================
   MEDIA
======================================== */

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Travel Image",
  },
  {
    id: 2,
    type: "image",
    title: "Booking Image",
  },
  {
    id: 3,
    type: "video",
    title: "Flight Video",
  },
];

/* ========================================
   COMPONENT
======================================== */

export default function MessageProfile({
  conversation,
  onClose,
}) {
  const [mediaTab, setMediaTab] =
    useState("media");

  const [documentsExpanded, setDocumentsExpanded] =
    useState(false);

  const [linksExpanded, setLinksExpanded] =
    useState(false);

  const [detailView, setDetailView] =
    useState(null);

  const [selectedMedia, setSelectedMedia] =
    useState(null);

  /* ========================================
     RESET WHEN CONVERSATION CHANGES
  ======================================== */

  useEffect(() => {
    setMediaTab("media");
    setDocumentsExpanded(false);
    setLinksExpanded(false);
    setDetailView(null);
    setSelectedMedia(null);
  }, [conversation?.id]);

  if (!conversation) {
    return null;
  }

  const profile =
    customerProfiles[conversation.id] ||
    defaultProfile;

  const isCustomer =
    conversation.role === "Customer";

  const visibleDocuments =
    documentsExpanded
      ? documents
      : documents.slice(0, 2);

  /* ========================================
     DOWNLOAD DOCUMENT
  ======================================== */

  const handleDownloadDocument = (document) => {
    const content = [
      document.content,
      "",
      `Conversation: ${conversation.name}`,
      `Generated from Skytix Messages`,
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url =
      URL.createObjectURL(blob);

    const anchor =
      window.document.createElement("a");

    anchor.href = url;

    /*
     * The current project does not contain
     * real PDF assets yet, so save this demo
     * document as text rather than pretending
     * it is a valid PDF.
     */

    anchor.download =
      document.name.replace(
        /\.pdf$/i,
        ".txt"
      );

    window.document.body.appendChild(anchor);

    anchor.click();

    anchor.remove();

    URL.revokeObjectURL(url);
  };

  /* ========================================
     DETAIL VIEW
  ======================================== */

  if (detailView) {
    const isBooking =
      detailView === "booking";

    return (
      <div className="message-profile">

        <div className="message-profile-header">

          <button
            type="button"
            className="message-profile-back"
            onClick={() =>
              setDetailView(null)
            }
            aria-label="Back to profile"
          >
            <FiArrowLeft />
          </button>

          <h2>
            {isBooking
              ? "Booking Information"
              : "Flight Details"}
          </h2>

          <button
            type="button"
            className="message-profile-close"
            onClick={onClose}
            aria-label="Close profile"
          >
            <FiX />
          </button>

        </div>

        <div className="message-profile-scroll">

          <div className="message-detail-user">

            <div className="message-profile-avatar">
              {conversation.initials}
            </div>

            <h3>
              {conversation.name}
            </h3>

            {conversation.role && (
              <span>
                {conversation.role}
              </span>
            )}

          </div>

          {isBooking ? (
            <section className="message-detail-card">

              <div>
                <span>
                  Booking Code
                </span>

                <strong>
                  {profile.booking.code}
                </strong>
              </div>

              <div>
                <span>
                  Passenger
                </span>

                <strong>
                  {profile.booking.passenger}
                </strong>
              </div>

              <div>
                <span>
                  Route
                </span>

                <strong>
                  {profile.booking.route}
                </strong>
              </div>

              <div>
                <span>
                  Status
                </span>

                <strong>
                  {profile.booking.status}
                </strong>
              </div>

            </section>
          ) : (
            <section className="message-detail-card">

              <div className="message-detail-icon-row">

                <FiMapPin />

                <div>
                  <span>
                    Route
                  </span>

                  <strong>
                    {profile.flight.route}
                  </strong>
                </div>

              </div>

              <div className="message-detail-icon-row">

                <FiExternalLink />

                <div>
                  <span>
                    Airline
                  </span>

                  <strong>
                    {profile.flight.airline}
                  </strong>
                </div>

              </div>

              <div className="message-detail-icon-row">

                <FiCalendar />

                <div>
                  <span>
                    Date
                  </span>

                  <strong>
                    {profile.flight.date}
                  </strong>
                </div>

              </div>

              <div className="message-detail-icon-row">

                <FiClock />

                <div>
                  <span>
                    Departure
                  </span>

                  <strong>
                    {profile.flight.time}
                  </strong>
                </div>

              </div>

            </section>
          )}

        </div>

      </div>
    );
  }

  return (
    <div className="message-profile">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="message-profile-header">

        <h2>
          Profile
        </h2>

        <button
          type="button"
          className="message-profile-close"
          onClick={onClose}
          aria-label="Close profile"
        >
          <FiX />
        </button>

      </div>

      {/* =====================================
          SCROLL CONTENT
      ====================================== */}

      <div className="message-profile-scroll">

        {/* USER */}

        <div className="message-profile-user">

          <div className="message-profile-avatar">
            {conversation.initials}
          </div>

          <h3>
            {conversation.name}
          </h3>

          {conversation.role && (
            <span className="message-profile-role">
              {conversation.role}
            </span>
          )}

        </div>

        {/* ===================================
            ABOUT
        ==================================== */}

        <section className="message-profile-section">

          <h4>
            About
          </h4>

          <div className="message-profile-details">

            <div>
              <span>
                Email
              </span>

              <strong>
                {profile.email}
              </strong>
            </div>

            <div>
              <span>
                Phone
              </span>

              <strong>
                {profile.phone}
              </strong>
            </div>

            <div>
              <span>
                Location
              </span>

              <strong>
                {profile.location}
              </strong>
            </div>

          </div>

        </section>

        {/* ===================================
            PASSPORT
        ==================================== */}

        {isCustomer &&
          profile.passport && (
            <section className="message-profile-section">

              <h4>
                Passport
              </h4>

              <div className="message-passport-card">

                <div>
                  <span>
                    Passport Number
                  </span>

                  <strong>
                    {
                      profile.passport
                        .number
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Nationality
                  </span>

                  <strong>
                    {
                      profile.passport
                        .nationality
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Expiry Date
                  </span>

                  <strong>
                    {
                      profile.passport
                        .expiry
                    }
                  </strong>
                </div>

              </div>

            </section>
          )}

        {/* ===================================
            DOCUMENTS
        ==================================== */}

        <section className="message-profile-section">

          <div className="message-profile-section-head">

            <h4>
              Documents
            </h4>

            <button
              type="button"
              onClick={() =>
                setDocumentsExpanded(
                  (current) => !current
                )
              }
            >
              {documentsExpanded
                ? "Show Less"
                : "View All"}
            </button>

          </div>

          <div className="message-profile-documents">

            {visibleDocuments.map(
              (document) => (
                <div
                  className="message-document"
                  key={document.id}
                >

                  <div className="message-document-icon">
                    <FiFileText />
                  </div>

                  <div className="message-document-info">

                    <strong>
                      {document.name}
                    </strong>

                    <span>
                      {document.type}
                    </span>

                  </div>

                  <button
                    type="button"
                    aria-label={`Download ${document.name}`}
                    onClick={() =>
                      handleDownloadDocument(
                        document
                      )
                    }
                  >
                    <FiDownload />
                  </button>

                </div>
              )
            )}

          </div>

        </section>

        {/* ===================================
            LINKS
        ==================================== */}

        <section className="message-profile-section">

          <div className="message-profile-section-head">

            <h4>
              Links
            </h4>

            <button
              type="button"
              onClick={() =>
                setLinksExpanded(
                  (current) => !current
                )
              }
            >
              {linksExpanded
                ? "Show Less"
                : "View All"}
            </button>

          </div>

          <div className="message-profile-links">

            <button
              type="button"
              onClick={() =>
                setDetailView("booking")
              }
            >

              <span>
                Booking Information
              </span>

              <FiExternalLink />

            </button>

            <button
              type="button"
              onClick={() =>
                setDetailView("flight")
              }
            >

              <span>
                Flight Details
              </span>

              <FiExternalLink />

            </button>

            {linksExpanded && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setDetailView("booking")
                  }
                >
                  <span>
                    Passenger Booking
                  </span>

                  <FiExternalLink />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setDetailView("flight")
                  }
                >
                  <span>
                    Travel Schedule
                  </span>

                  <FiExternalLink />
                </button>
              </>
            )}

          </div>

        </section>

        {/* ===================================
            MEDIA / FILES
        ==================================== */}

        <section className="message-profile-section message-media-section">

          <div className="message-media-tabs">

            <button
              type="button"
              className={
                mediaTab === "media"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMediaTab("media")
              }
            >
              Media
            </button>

            <button
              type="button"
              className={
                mediaTab === "files"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMediaTab("files")
              }
            >
              Files
            </button>

          </div>

          {/* MEDIA */}

          {mediaTab === "media" && (
            <div className="message-media-grid">

              {mediaItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="message-media-item"
                  aria-label={`View ${item.title}`}
                  onClick={() =>
                    setSelectedMedia(item)
                  }
                >
                  {item.type ===
                  "video" ? (
                    <FiVideo />
                  ) : (
                    <FiImage />
                  )}
                </button>
              ))}

            </div>
          )}

          {/* FILES */}

          {mediaTab === "files" && (
            <div className="message-profile-tab-files">

              {documents.map(
                (document) => (
                  <button
                    key={document.id}
                    type="button"
                    className="message-tab-file"
                    onClick={() =>
                      handleDownloadDocument(
                        document
                      )
                    }
                  >

                    <FiFileText />

                    <span>
                      {document.name}
                    </span>

                    <FiDownload />

                  </button>
                )
              )}

            </div>
          )}

        </section>

      </div>

      {/* =====================================
          MEDIA PREVIEW
      ====================================== */}

      {selectedMedia && (
        <div
          className="message-media-preview-overlay"
          onClick={() =>
            setSelectedMedia(null)
          }
        >

          <div
            className="message-media-preview"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="message-media-preview-close"
              onClick={() =>
                setSelectedMedia(null)
              }
              aria-label="Close media preview"
            >
              <FiX />
            </button>

            <div className="message-media-preview-icon">

              {selectedMedia.type ===
              "video" ? (
                <FiVideo />
              ) : (
                <FiImage />
              )}

            </div>

            <strong>
              {selectedMedia.title}
            </strong>

            <span>
              {selectedMedia.type ===
              "video"
                ? "Video preview"
                : "Image preview"}
            </span>

          </div>

        </div>
      )}

    </div>
  );
}