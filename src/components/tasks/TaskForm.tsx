
import { useState } from "react";
import type { FormEvent } from "react";
import type { Task, TaskCategory, Priority } from "../../types/task";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
  onCancel: () => void;
}

function TaskForm({ onAddTask, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>("Other");
  const [priority, setPriority] = useState<Priority>("medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      category,
      priority,
      completed: false,
      createdAt: new Date().toISOString(),
      ...(dueDate ? { dueDate } : {}),
    };

    onAddTask(newTask);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>New Magical Mission</h2>

      <label>Task title</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="e.g. Study Potions"
        required
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Describe your magical mission..."
      />

      <label>Category</label>
      <select
        value={category}
        onChange={(event) =>
          setCategory(event.target.value as TaskCategory)
        }
      >
        <option value="Potions">Potions</option>
        <option value="Charms">Charms</option>
        <option value="Herbology">Herbology</option>
        <option value="Transfiguration">Transfiguration</option>
        <option value="Defense Against the Dark Arts">
          Defense Against the Dark Arts
        </option>
        <option value="Care of Magical Creatures">
          Care of Magical Creatures
        </option>
        <option value="Divination">Divination</option>
        <option value="Ancient Runes">Ancient Runes</option>
        <option value="Arithmancy">Arithmancy</option>
        <option value="Muggle Studies">Muggle Studies</option>
        <option value="Astronomy">Astronomy</option>
        <option value="Quidditch">Quidditch</option>
        <option value="Other">Other</option>
      </select>

      <label>Priority</label>
      <select
        value={priority}
        onChange={(event) =>
          setPriority(event.target.value as Priority)
        }
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label>Due date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />

      <div className="task-form-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit">
          Create Mission
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
