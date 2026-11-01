import "./App.css";

import MainLayout from "./components/layout/MainLayout";
import WelcomeHeader from "./components/dashboard/WelcomeHeader";
import StatsCards from "./components/dashboard/StatsCards";
import HouseProgress from "./components/dashboard/HouseProgress";

function App() {
  return (
    <MainLayout>
      <div className="dashboard-content">

        <WelcomeHeader />

        <StatsCards />

        <div className="dashboard-grid">

          <section className="tasks-placeholder">
            <h2>Your Magical Tasks</h2>
            <p>
              Your magical missions will appear here...
            </p>
          </section>

          <aside className="dashboard-sidebar">
            <HouseProgress />
          </aside>

        </div>

      </div>
    </MainLayout>
  );
}

export default App;