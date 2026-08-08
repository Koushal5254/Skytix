"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FiPaperclip,
  FiSmile,
  FiSend,
  FiUser,
  FiMoreVertical,
  FiX,
  FiFile,
  FiSearch,
  FiBellOff,
  FiTrash2,
} from "react-icons/fi";

import MessageBubble from "../MessageBubble/MessageBubble";

import "./ChatPanel.scss";

const emojis = [
  "😀",
  "😂",
  "😊",
  "😍",
  "🙂",
  "😎",
  "🤔",
  "😢",
  "👍",
  "👎",
  "👏",
  "🙏",
  "❤️",
  "🔥",
  "🎉",
  "✈️",
  "✅",
  "⭐",
];

export default function ChatPanel({
  conversation,
  messages = [],
  onSendMessage,
  onDeleteConversation,
  onOpenProfile,
}) {
  const [messageText, setMessageText] =
    useState("");

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [emojiOpen, setEmojiOpen] =
    useState(false);

  const [moreMenuOpen, setMoreMenuOpen] =
    useState(false);

  const [conversationMuted, setConversationMuted] =
    useState(false);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const emojiRef = useRef(null);
  const moreMenuRef = useRef(null);

  /* ========================================
     RESET WHEN CONVERSATION CHANGES
  ======================================== */

  useEffect(() => {
    setMessageText("");
    setSelectedFile(null);
    setEmojiOpen(false);
    setMoreMenuOpen(false);
  }, [conversation.id]);

  /* ========================================
     SCROLL TO LATEST MESSAGE
  ======================================== */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [
    messages,
    conversation.id,
  ]);

  /* ========================================
     CLOSE MENUS WHEN CLICKING OUTSIDE
  ======================================== */

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target)
      ) {
        setEmojiOpen(false);
      }

      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(event.target)
      ) {
        setMoreMenuOpen(false);
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
     SEND MESSAGE
  ======================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanText = messageText.trim();

    if (!cleanText && !selectedFile) {
      return;
    }

    let outgoingText = cleanText;

    if (selectedFile) {
      const attachmentText =
        `📎 ${selectedFile.name}`;

      outgoingText = cleanText
        ? `${cleanText}\n${attachmentText}`
        : attachmentText;
    }

    onSendMessage?.(outgoingText);

    setMessageText("");
    setSelectedFile(null);
    setEmojiOpen(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    requestAnimationFrame(() => {
      messageInputRef.current?.focus();
    });
  };

  /* ========================================
     FILE PICKER
  ======================================== */

  const handleOpenFilePicker = () => {
    setEmojiOpen(false);
    setMoreMenuOpen(false);

    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /* ========================================
     EMOJI
  ======================================== */

  const handleToggleEmoji = () => {
    setMoreMenuOpen(false);

    setEmojiOpen((current) => !current);
  };

  const handleSelectEmoji = (emoji) => {
    const input =
      messageInputRef.current;

    if (!input) {
      setMessageText(
        (current) => current + emoji
      );

      setEmojiOpen(false);

      return;
    }

    const start =
      input.selectionStart ??
      messageText.length;

    const end =
      input.selectionEnd ??
      messageText.length;

    const nextValue =
      messageText.slice(0, start) +
      emoji +
      messageText.slice(end);

    const nextCursor =
      start + emoji.length;

    setMessageText(nextValue);
    setEmojiOpen(false);

    requestAnimationFrame(() => {
      input.focus();

      input.setSelectionRange(
        nextCursor,
        nextCursor
      );
    });
  };

  /* ========================================
     MORE MENU
  ======================================== */

  const handleToggleMoreMenu = () => {
    setEmojiOpen(false);

    setMoreMenuOpen(
      (current) => !current
    );
  };

  const handleSearchConversation = () => {
    setMoreMenuOpen(false);

    const messagesArea =
      document.querySelector(
        ".message-list-search input"
      );

    messagesArea?.focus();
  };

  const handleToggleMute = () => {
    setConversationMuted(
      (current) => !current
    );

    setMoreMenuOpen(false);
  };

  return (
    <div className="chat-panel">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="chat-panel-header">

        <div className="chat-user">

          <div className="chat-user-avatar">
            {conversation.initials}
          </div>

          <div className="chat-user-info">

            <div className="chat-user-name">

              <h2>
                {conversation.name}
              </h2>

              {conversation.role && (
                <span>
                  {conversation.role}
                </span>
              )}

            </div>

            <p>
              {conversationMuted
                ? "Notifications muted"
                : "Active now"}
            </p>

          </div>

        </div>

        {/* HEADER ACTIONS */}

        <div className="chat-header-actions">

          <button
            type="button"
            className="chat-profile-button"
            onClick={onOpenProfile}
          >
            <FiUser />

            <span>
              Profile
            </span>
          </button>

          {/* MORE */}

          <div
            className="chat-more-wrapper"
            ref={moreMenuRef}
          >

            <button
              type="button"
              className="chat-more-button"
              aria-label="More conversation options"
              aria-expanded={moreMenuOpen}
              onClick={handleToggleMoreMenu}
            >
              <FiMoreVertical />
            </button>

            {moreMenuOpen && (
              <div className="chat-more-menu">

                <button
                  type="button"
                  onClick={
                    handleSearchConversation
                  }
                >
                  <FiSearch />

                  <span>
                    Search conversations
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleToggleMute}
                >
                  <FiBellOff />

                  <span>
                    {conversationMuted
                      ? "Unmute notifications"
                      : "Mute notifications"}
                  </span>
                </button>

                <button
                    type="button"
                    className="danger"
                    onClick={() => {
                        setMoreMenuOpen(false);
                        onDeleteConversation?.();
                    }}
                    >
                    <FiTrash2 />

                    <span>
                        Delete conversation
                    </span>
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* =====================================
          MESSAGES
      ====================================== */}

      <div className="chat-messages">

        <div className="chat-date-divider">
          <span>
            Today
          </span>
        </div>

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div ref={messagesEndRef} />

      </div>

      {/* =====================================
          COMPOSER AREA
      ====================================== */}

      <div className="chat-composer-area">

        {/* ATTACHMENT PREVIEW */}

        {selectedFile && (
          <div className="chat-attachment">

            <div className="chat-attachment-icon">
              <FiFile />
            </div>

            <div className="chat-attachment-info">

              <strong>
                {selectedFile.name}
              </strong>

              <span>
                {selectedFile.size > 0
                  ? `${(
                      selectedFile.size /
                      1024
                    ).toFixed(1)} KB`
                  : "Attachment"}
              </span>

            </div>

            <button
              type="button"
              onClick={handleRemoveFile}
              aria-label="Remove attachment"
            >
              <FiX />
            </button>

          </div>
        )}

        <form
          className="chat-composer"
          onSubmit={handleSubmit}
        >

          {/* FILE INPUT */}

          <input
            ref={fileInputRef}
            className="chat-file-input"
            type="file"
            onChange={handleFileChange}
            tabIndex={-1}
          />

          {/* ATTACH */}

          <button
            type="button"
            className="chat-composer-icon"
            aria-label="Attach file"
            onClick={handleOpenFilePicker}
          >
            <FiPaperclip />
          </button>

          {/* MESSAGE */}

          <input
            ref={messageInputRef}
            type="text"
            value={messageText}
            onChange={(event) =>
              setMessageText(
                event.target.value
              )
            }
            placeholder="Type a message..."
            aria-label="Message"
          />

          {/* EMOJI */}

          <div
            className="chat-emoji-wrapper"
            ref={emojiRef}
          >

            <button
              type="button"
              className={`chat-composer-icon ${
                emojiOpen ? "active" : ""
              }`}
              aria-label="Add emoji"
              aria-expanded={emojiOpen}
              onClick={handleToggleEmoji}
            >
              <FiSmile />
            </button>

            {emojiOpen && (
              <div className="chat-emoji-picker">

                <div className="chat-emoji-title">
                  Emoji
                </div>

                <div className="chat-emoji-grid">

                  {emojis.map(
                    (emoji, index) => (
                      <button
                        key={`${emoji}-${index}`}
                        type="button"
                        onClick={() =>
                          handleSelectEmoji(
                            emoji
                          )
                        }
                        aria-label={`Insert ${emoji}`}
                      >
                        {emoji}
                      </button>
                    )
                  )}

                </div>

              </div>
            )}

          </div>

          {/* SEND */}

          <button
            type="submit"
            className="chat-send-button"
            aria-label="Send message"
            disabled={
              !messageText.trim() &&
              !selectedFile
            }
          >
            <FiSend />
          </button>

        </form>

      </div>

    </div>
  );
}