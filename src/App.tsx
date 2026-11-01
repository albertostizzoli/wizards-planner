
import { useState } from "react";
import type { Task } from "./types/task";

import "./App.css";

import MainLayout from "./components/layout/MainLayout";
import WelcomeHeader from "./components/dashboard/WelcomeHeader";
import StatsCards from "./components/dashboard/StatsCards";
import HouseProgress from "./components/dashboard/HouseProgress";
import TaskList from "./components/tasks/TaskList";
import TaskForm from "./components/tasks/TaskForm";

import { initialTasks } from "./utils/initialTasks";

function App() {
  // Stato delle attività
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Stato di visualizzazione del modulo
  const [showTaskForm, setShowTaskForm] = useState(false);

  // Aggiunta di una nuova attività
  function handleAddTask(newTask: Task) {
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setShowTaskForm(false);
  }

  return (
    <MainLayout>
      <div className="dashboard-content">
        <WelcomeHeader />

        <StatsCards />

        <div className="dashboard-grid">
          <div>
            {showTaskForm ? (
              <TaskForm
                onAddTask={handleAddTask}
                onCancel={() => setShowTaskForm(false)}
              />
            ) : (
              <TaskList
                tasks={tasks}
                onShowForm={() => setShowTaskForm(true)}
              />
            )}
          </div>

          <aside className="dashboard-sidebar">
            <HouseProgress />
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;

