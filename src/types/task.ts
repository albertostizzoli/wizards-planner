// Categorie task
export type TaskCategory = 
| "Pozioni"
| "Incantesimi"
| "Erbologia"
| "Trasfigurazione"
| "Difesa contro la Arti Oscure"
| "Cura delle Creature Magiche"
| "Divinazione"
| "Astronomia"
| "Quidditch"

// Priorità task
export type Priority = "bassa" | "media" | "alta"

// Case di hogwarts
export type House =
| "Grifondoro"
| "Serpeverde"
| "Tassorosso"
| "Corvonero"

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