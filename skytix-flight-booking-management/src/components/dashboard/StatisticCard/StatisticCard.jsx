import "./StatisticCard.scss";

export default function StatisticCard({
  title,
  value,
  percentage,
  icon,
  color,
}) {
  const Icon = icon;

  const isNegative =
    typeof percentage === "string" &&
    percentage.trim().startsWith("-");

  return (
    <div className="stat-card">

      <div className="stat-left">

        <p className="stat-title">
          {title}
        </p>

        <div className="stat-value-row">

          <h3 className="stat-value">
            {value}
          </h3>

          {percentage && (
            <span
              className={`stat-badge ${
                isNegative
                  ? "stat-badge-negative"
                  : "stat-badge-positive"
              }`}
            >
              {percentage}
            </span>
          )}

        </div>

      </div>

      {Icon && (
        <div
          className="stat-icon-box"
          style={{
            backgroundColor:
              color || "#e4c66d",
          }}
        >
          <Icon />
        </div>
      )}

    </div>
  );
}