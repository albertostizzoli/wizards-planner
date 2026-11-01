
import {
  BookOpen,
  Check,
} from "lucide-react";

import type { Task } from "../../types/task";

interface TaskListProps {
  tasks: Task[];
  onShowForm: () => void;
}

function TaskList({ tasks, onShowForm }: TaskListProps) {
  return (
    <section className="tasks-placeholder">
      <div className="tasks-header">
        <h2>Your Magical Tasks</h2>

        <button
          className="add-task-button"
          onClick={onShowForm}
        >
          + Add Task
        </button>
      </div>

      <div className="tasks-list">
        {tasks.map((task) => (
          <article
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-checkbox">
              {task.completed ? <Check size={20} /> : null}
            </div>

            <BookOpen className="task-icon" size={34} />

            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>

            <span className={`priority ${task.priority}`}>
              {task.priority}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TaskList;
