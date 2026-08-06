"use client";

import { useMemo, useState } from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import Header from "@/components/layout/Header/Header";

import MessageList from "@/components/messages/MessageList/MessageList";
import ChatPanel from "@/components/messages/ChatPanel/ChatPanel";
import MessageProfile from "@/components/messages/MessageProfile/MessageProfile";

import ScheduleFooter from "@/components/schedule/ScheduleFooter/ScheduleFooter";

import {
  conversations as initialConversations,
  chatMessages as initialChatMessages,
} from "@/data/messages";

import { FiMessageSquare } from "react-icons/fi";

import "./page.scss";

export default function MessagesPage() {
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
     SELECTED CONVERSATION DATA
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

    /* UPDATE CONVERSATION PREVIEW */

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

    /* REMOVE ITS MESSAGES */

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

    /* CHANGE ACTIVE CONVERSATION */

    if (
      selectedConversationId ===
      conversationId
    ) {
      setSelectedConversationId(
        nextConversation?.id ?? null
      );
    }

    /* CLOSE PROFILE WHEN EMPTY */

    if (conversations.length === 1) {
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
            SHARED HEADER
        ====================================== */}

        <Header title="Messages" />

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

        {/* =====================================
            FOOTER
        ====================================== */}

        <ScheduleFooter />

      </main>
    </MainLayout>
  );
}