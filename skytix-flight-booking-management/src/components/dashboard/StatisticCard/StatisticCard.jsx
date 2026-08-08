import "./StatisticCard.scss";

export default function StatisticCard({
  title,
  value,
  percentage,
  icon: Icon,
}) {
  const negative =
    String(percentage || "")
      .trim()
      .startsWith("-");

  return (
    <article className="stat-card">
      <div className="stat-left">
        <p className="stat-title">{title}</p>

        <div className="stat-value-row">
          <h3 className="stat-value">{value}</h3>

          {percentage && (
            <span
              className={`stat-badge ${
                negative
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
        <div className="stat-icon-box">
          <Icon />
        </div>
      )}
    </article>
  );
}