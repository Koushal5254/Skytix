import "./StatisticCard.scss";

export default function StatisticCard({
  title,
  value,
  percentage,
  icon,
  color
}) {
  const Icon = icon;

  return (
    <div className="stat-card">

      <div className="stat-left">

        <p>{title}</p>

        <h3>{value}</h3>

        <span className="stat-badge">
          {percentage}
        </span>

      </div>

      <div
          className="icon-box"
          style={{
            background: color,
          }}
          >
        <Icon />
      </div>

    </div>
  );
}