import "./DashboardGrid.scss";

export default function DashboardGrid({ children, className = "" }) {
  return (
    <div
      className={`dashboard-grid ${className}`.trim()}
    >
      {children}
    </div>
  );
}