function StatCard({ title = "tytuł", value = "wartość", desc = "opis" }) {
  return (
    <div className="stat gap-2 p-5 ">
      <div className="stat-title text-secondary-color">
        {title.toUpperCase()}
      </div>
      <div className="stat-value text-main-color">{value}</div>
      <div className="stat-desc text-secondary-color">{desc}</div>
      <div className="stat-desc text-secondary-color">22 lis 12:12</div>
    </div>
  );
}

export default StatCard;
