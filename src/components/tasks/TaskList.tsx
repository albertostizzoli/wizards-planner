
import type { Task } from "../../types/task";

interface TaskListProps {
  tasks: Task[];
}

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
            <div className="task-info">
              <h3>{task.title}</h3>
              <p>{task.description}</p>

              <span className="task-category">
                {task.category}
              </span>
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
