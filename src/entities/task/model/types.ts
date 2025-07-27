export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "not_started" | "in_progress" | "done";
  columnId: string;
}
