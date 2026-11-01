import type { Task } from "../types/task";

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Study Potions",
    description: "Read chapter 5 - Professor Snape",
    category: "Potions",
    priority: "high",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Practice Spells",
    description: "Practice Lumos and Wingardium Leviosa",
    category: "Charms",
    priority: "low",
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Visit the Library",
    description: "Find a book about magical creatures",
    category: "Other",
    priority: "medium",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Prepare for Potions Exam",
    description: "Study Chapter 7",
    category: "Potions",
    priority: "medium",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    title: "Train on the Quidditch Pitch",
    description: "Improve your flying skills",
    category: "Quidditch",
    priority: "low",
    completed: false,
    createdAt: new Date().toISOString(),
  },
];