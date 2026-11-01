// Categorie task
export type TaskCategory = 
| "Potions"
| "Charms"
| "Herbology"
| "Transfiguration"
| "Defense Against the Dark Arts"
| "Care of Magical Creatures"
| "Divination"
| "Ancient Runes"
| "Arithmancy"
| "Muggle Studies"
| "Astronomy"
| "Quidditch"
| "Other"

// Priorità task
export type Priority = "low" | "medium" | "high"

// Case di hogwarts
export type House =
| "Gryffindor"
| "Slytherin"
| "Hufflepuff"
| "Ravenclaw"

// Interfaccia task
export interface Task {
   id: string;
   title: string;
   description: string;
   category: TaskCategory;
   priority: Priority;
   completed: boolean;
   createdAt: string;
   dueDate?: string;
}