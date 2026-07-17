import "./Card.scss";

export default function Card({
  children,
  className = "",
}) {
  return (
    <div className={`custom-card ${className}`}>
      {children}
    </div>
  );
}