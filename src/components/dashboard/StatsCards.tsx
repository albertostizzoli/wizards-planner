import {
  ClipboardList,
  CheckCircle2,
  Hourglass,
} from "lucide-react";

function StatsCards() {
  return (
    <section className="stats-container">

      <div className="stat-card">
        <ClipboardList size={32} />
        <div>
          <span className="stat-number">6</span>
          <p>Total Tasks</p>
        </div>
      </div>

      <div className="stat-card">
        <CheckCircle2 size={32} />
        <div>
          <span className="stat-number">2</span>
          <p>Completed</p>
        </div>
      </div>

      <div className="stat-card">
        <Hourglass size={32} />
        <div>
          <span className="stat-number">4</span>
          <p>Remaining</p>
        </div>
      </div>

    </section>
  );
}

export default StatsCards;