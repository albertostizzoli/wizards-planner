import {
  House,
  ListChecks,
  Shield,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <h1>Wizard's Planner</h1>
        <p>Your magical journey</p>
      </div>

      <nav className="sidebar-nav">

        <a href="#" className="nav-item active">
          <House />
          <span>Home</span>
        </a>

        <a href="#" className="nav-item">
          <ListChecks />
          <span>My Tasks</span>
        </a>

        <a href="#" className="nav-item">
          <Shield />
          <span>My House</span>
        </a>

        <a href="#" className="nav-item">
          <ChartNoAxesColumn />
          <span>Statistics</span>
        </a>

        <a href="#" className="nav-item">
          <Settings />
          <span>Settings</span>
        </a>

      </nav>

    </aside>
  );
}

export default Sidebar;