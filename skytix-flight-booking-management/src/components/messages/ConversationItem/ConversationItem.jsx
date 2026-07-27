"use client";

import "./ConversationItem.scss";

export default function ConversationItem({
  conversation,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`conversation-item ${
        active ? "conversation-item-active" : ""
      }`}
      onClick={onClick}
    >
      <div className="conversation-avatar">
        {conversation.initials}
      </div>

      <div className="conversation-content">

        <div className="conversation-top">

          <div className="conversation-name-row">

            <h3>{conversation.name}</h3>

            {conversation.role && (
              <span className="conversation-role">
                {conversation.role}
              </span>
            )}

          </div>

          <span className="conversation-time">
            {conversation.time}
          </span>

        </div>

        <div className="conversation-bottom">

          <p>{conversation.preview}</p>

          {conversation.unread > 0 && (
            <span className="conversation-unread">
              {conversation.unread}
            </span>
          )}

        </div>

      </div>
    </button>
  );
}