"use client";

import { useMemo, useState } from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";

import MessageList from "@/components/messages/MessageList/MessageList";
import ChatPanel from "@/components/messages/ChatPanel/ChatPanel";
import MessageProfile from "@/components/messages/MessageProfile/MessageProfile";

import {
  conversations as initialConversations,
  chatMessages as initialChatMessages,
} from "@/data/messages";

import {
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiChevronDown,
  FiMessageSquare,
} from "react-icons/fi";

import "./page.scss";

export default function MessagesPage() {
  /* ========================================
     ADMIN DROPDOWN
  ======================================== */

  const [adminMenuOpen, setAdminMenuOpen] =
    useState(false);

  /* ========================================
     CONVERSATIONS
  ======================================== */

  const [conversations, setConversations] =
    useState(() =>
      initialConversations.map((conversation) => ({
        ...conversation,
      }))
    );

  /* ========================================
     CHAT MESSAGES
  ======================================== */

  const [
    messagesByConversation,
    setMessagesByConversation,
  ] = useState(() => {
    const copy = {};

    Object.entries(initialChatMessages).forEach(
      ([conversationId, messages]) => {
        copy[conversationId] = messages.map(
          (message) => ({
            ...message,
          })
        );
      }
    );

    return copy;
  });

  /* ========================================
     SELECTED CONVERSATION
  ======================================== */

  const [
    selectedConversationId,
    setSelectedConversationId,
  ] = useState(
    initialConversations[0]?.id ?? null
  );

  /* ========================================
     RIGHT PROFILE PANEL
  ======================================== */

  const [
    messageProfileOpen,
    setMessageProfileOpen,
  ] = useState(true);

  /* ========================================
     SELECTED CONVERSATION
  ======================================== */

  const selectedConversation = useMemo(() => {
    return (
      conversations.find(
        (conversation) =>
          conversation.id ===
          selectedConversationId
      ) || null
    );
  }, [
    conversations,
    selectedConversationId,
  ]);

  /* ========================================
     SELECTED MESSAGES
  ======================================== */

  const selectedMessages = useMemo(() => {
    if (!selectedConversation) {
      return [];
    }

    return (
      messagesByConversation[
        selectedConversation.id
      ] || []
    );
  }, [
    messagesByConversation,
    selectedConversation,
  ]);

  /* ========================================
     SELECT CONVERSATION
  ======================================== */

  const handleSelectConversation = (
    conversationId
  ) => {
    setSelectedConversationId(
      conversationId
    );

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === conversationId
          ? {
              ...conversation,
              unread: 0,
            }
          : conversation
      )
    );
  };

  /* ========================================
     SEND MESSAGE
  ======================================== */

  const handleSendMessage = (text) => {
    if (!selectedConversation) {
      return;
    }

    const cleanText = text.trim();

    if (!cleanText) {
      return;
    }

    const now = new Date();

    const formattedTime =
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(now);

    const newMessage = {
      id: `${selectedConversation.id}-${Date.now()}`,
      sender: "admin",
      text: cleanText,
      time: formattedTime,
    };

    /* SAVE MESSAGE */

    setMessagesByConversation(
      (current) => ({
        ...current,

        [selectedConversation.id]: [
          ...(current[
            selectedConversation.id
          ] || []),
          newMessage,
        ],
      })
    );

    /* UPDATE PREVIEW */

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id ===
        selectedConversation.id
          ? {
              ...conversation,
              preview: cleanText,
              time: formattedTime,
              unread: 0,
            }
          : conversation
      )
    );
  };

  /* ========================================
     DELETE CONVERSATION
  ======================================== */

  const handleDeleteConversation = (
    conversationId
  ) => {
    const conversationIndex =
      conversations.findIndex(
        (conversation) =>
          conversation.id ===
          conversationId
      );

    if (conversationIndex === -1) {
      return;
    }

    /*
     * Work out which conversation should
     * become active BEFORE removing the
     * current one.
     *
     * Prefer the next conversation.
     * If there is no next conversation,
     * use the previous conversation.
     */

    const nextConversation =
      conversations[
        conversationIndex + 1
      ] ||
      conversations[
        conversationIndex - 1
      ] ||
      null;

    /* REMOVE CONVERSATION */

    setConversations((current) =>
      current.filter(
        (conversation) =>
          conversation.id !==
          conversationId
      )
    );

    /* REMOVE ITS CHAT MESSAGES */

    setMessagesByConversation(
      (current) => {
        const nextMessages = {
          ...current,
        };

        delete nextMessages[
          conversationId
        ];

        return nextMessages;
      }
    );

    /* CHANGE SELECTED CONVERSATION */

    if (
      selectedConversationId ===
      conversationId
    ) {
      setSelectedConversationId(
        nextConversation?.id ?? null
      );
    }

    /*
     * If nothing remains, close profile.
     */

    if (
      conversations.length === 1
    ) {
      setMessageProfileOpen(false);
    }
  };

  return (
    <MainLayout
      showHeader={false}
      showFooter={false}
    >
      <main className="messages-page">

        {/* =====================================
            PAGE HEADER
        ====================================== */}

        <header className="messages-page-header">

          <h1>Messages</h1>

          <div className="messages-header-actions">

            {/* NOTIFICATIONS */}

            <button
              type="button"
              className="messages-header-icon-btn"
              aria-label="Notifications"
            >
              <FiBell />

              <span className="messages-notification-dot" />
            </button>

            {/* HELP */}

            <button
              type="button"
              className="messages-header-icon-btn"
              aria-label="Help"
            >
              <FiHelpCircle />
            </button>

            {/* SETTINGS */}

            <button
              type="button"
              className="messages-header-icon-btn"
              aria-label="Settings"
            >
              <FiSettings />
            </button>

            {/* =================================
                ADMIN PROFILE
            ================================= */}

            <div className="messages-admin-wrapper">

              <button
                type="button"
                className="messages-admin"
                onClick={() =>
                  setAdminMenuOpen(
                    (current) => !current
                  )
                }
                aria-expanded={
                  adminMenuOpen
                }
              >

                <div className="messages-admin-avatar">
                  MS
                </div>

                <div className="messages-admin-info">

                  <strong>
                    Martin Septimus
                  </strong>

                  <span>
                    Admin
                  </span>

                </div>

                <FiChevronDown
                  className={`messages-admin-chevron ${
                    adminMenuOpen
                      ? "open"
                      : ""
                  }`}
                />

              </button>

              {adminMenuOpen && (
                <div className="messages-admin-dropdown">

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    Settings
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setAdminMenuOpen(false)
                    }
                  >
                    Sign Out
                  </button>

                </div>
              )}

            </div>

          </div>

        </header>

        {/* =====================================
            MESSAGES WORKSPACE
        ====================================== */}

        <section
          className={`messages-workspace ${
            messageProfileOpen &&
            selectedConversation
              ? "profile-open"
              : "profile-closed"
          }`}
        >

          {/* ===================================
              LEFT
          ==================================== */}

          <aside className="messages-list-column">

            <MessageList
              conversations={
                conversations
              }
              selectedId={
                selectedConversationId
              }
              onSelectConversation={
                handleSelectConversation
              }
            />

          </aside>

          {/* ===================================
              CENTER
          ==================================== */}

          <section className="messages-chat-column">

            {selectedConversation ? (
              <ChatPanel
                conversation={
                  selectedConversation
                }
                messages={
                  selectedMessages
                }
                onSendMessage={
                  handleSendMessage
                }
                onDeleteConversation={() =>
                  handleDeleteConversation(
                    selectedConversation.id
                  )
                }
                onOpenProfile={() =>
                  setMessageProfileOpen(true)
                }
              />
            ) : (
              <div className="messages-empty-chat">

                <FiMessageSquare />

                <h2>
                  No conversations
                </h2>

                <p>
                  There are no conversations
                  available.
                </p>

              </div>
            )}

          </section>

          {/* ===================================
              RIGHT
          ==================================== */}

          {messageProfileOpen &&
            selectedConversation && (
              <aside className="messages-profile-column">

                <MessageProfile
                  conversation={
                    selectedConversation
                  }
                  onClose={() =>
                    setMessageProfileOpen(false)
                  }
                />

              </aside>
            )}

        </section>

      </main>
    </MainLayout>
  );
}