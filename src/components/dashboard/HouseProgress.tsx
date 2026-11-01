import { Shield } from "lucide-react";

function HouseProgress() {
  return (
    <section className="house-progress">

      <h2>House Progress</h2>

      <div className="house-divider">
        ✦ ───────── ✦
      </div>

      <div className="house-emblem">
        <Shield size={85} strokeWidth={1.2} />
        <span>🦁</span>
      </div>

      <h3>420 / 600</h3>

      <p>House Points</p>

    </section>
  );
}

export default HouseProgress;