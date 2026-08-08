"use client";

import {
  useMemo,
  useState,
} from "react";

import { FiSearch } from "react-icons/fi";

import ConversationItem from "../ConversationItem/ConversationItem";

import "./MessageList.scss";

export default function MessageList({
  conversations = [],
  selectedId,
  onSelectConversation,
}) {
  const [search, setSearch] =
    useState("");

  /* ========================================
     FILTER CONVERSATIONS
  ======================================== */

  const filteredConversations =
    useMemo(() => {
      const value =
        search.trim().toLowerCase();

      if (!value) {
        return conversations;
      }

      return conversations.filter(
        (conversation) => {
          const name =
            conversation.name || "";

          const role =
            conversation.role || "";

          const preview =
            conversation.preview || "";

          return (
            name
              .toLowerCase()
              .includes(value) ||
            role
              .toLowerCase()
              .includes(value) ||
            preview
              .toLowerCase()
              .includes(value)
          );
        }
      );
    }, [
      search,
      conversations,
    ]);

  return (
    <div className="message-list">

      {/* =====================================
          SEARCH
      ====================================== */}

      <div className="message-list-search-wrap">

        <div className="message-list-search">

          <FiSearch />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search name, chat, etc"
            aria-label="Search conversations"
          />

        </div>

      </div>

      {/* =====================================
          CONVERSATIONS
      ====================================== */}

      <div className="message-list-scroll">

        {filteredConversations.length >
        0 ? (
          filteredConversations.map(
            (conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={
                  conversation
                }
                active={
                  selectedId ===
                  conversation.id
                }
                onClick={() =>
                  onSelectConversation(
                    conversation.id
                  )
                }
              />
            )
          )
        ) : (
          <div className="message-list-empty">
            No conversations found
          </div>
        )}

      </div>

    </div>
  );
}