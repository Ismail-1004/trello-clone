import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Task } from "./types";

export const useTasksStore = defineStore("task", () => {
  const tasks = ref<Task[]>([]);

  const tasksByColumn = computed(() => {
    return (columnId: string) => {
      return tasks.value.filter((task) => task.columnId === columnId);
    };
  });

  const getStatusByColumnId = (columnId: string): Task["status"] => {
    switch (columnId) {
      case "not_started":
        return "not_started";
      case "in_progress":
        return "in_progress";
      case "done":
        return "done";
      default:
        return "not_started";
    }
  };

  const statusLabelsMap: Record<Task["status"], string> = {
    not_started: "Не начато",
    in_progress: "В процессе",
    done: "Готово",
  };

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };

  const updateTask = (updatedTask: Task) => {
    const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = { ...updatedTask };
    }
  };

  const moveTaskToColumn = (taskId: string, newColumnId: string) => {
    const task = tasks.value.find((t) => t.id === taskId);
    if (task) {
      task.columnId = newColumnId;
      task.status = getStatusByColumnId(newColumnId);
    }
  };

  return {
    tasks,
    tasksByColumn,
    addTask,
    updateTask,
    moveTaskToColumn,
    statusLabelsMap
  };
});
