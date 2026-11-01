
import "./App.css";

import MainLayout from "./components/layout/MainLayout";
import WelcomeHeader from "./components/dashboard/WelcomeHeader";
import StatsCards from "./components/dashboard/StatsCards";
import HouseProgress from "./components/dashboard/HouseProgress";
import TaskList from "./components/tasks/TaskList";

import { initialTasks } from "./utils/initialTasks";

function App() {
  return (
    <MainLayout>
      <div className="dashboard-content">

        <WelcomeHeader />

        <StatsCards />

        <div className="dashboard-grid">

          <TaskList tasks={initialTasks} />

          <aside className="dashboard-sidebar">
            <HouseProgress />
          </aside>

        </div>

      </div>
    </MainLayout>
  );
}

export default App;
