import "./MessageBubble.scss";

export default function MessageBubble({ message }) {
  const outgoing = message.sender === "admin";

  return (
    <div
      className={`message-bubble-row ${
        outgoing ? "outgoing" : "incoming"
      }`}
    >
      <div className="message-bubble">

        <p>{message.text}</p>

        <span>{message.time}</span>

      </div>
    </div>
  );
}