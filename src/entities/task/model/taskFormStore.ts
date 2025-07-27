import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskFormStore = defineStore("tasksForm", () => {
  const isOpen = ref(false);

  const taskForm = ref({
    title: "",
    description: "",
    dueDate: "",
    columnId: "Выберите подходящую колонку",
  });

  function resetForm() {
    taskForm.value = {
      title: "",
      description: "",
      dueDate: "",
      columnId: "Выберите подходящую колонку",
    };
  }

  return {
    isOpen,
    taskForm,
    resetForm,
  };
});
