import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskFormStore = defineStore("tasksForm", () => {
  const isOpen = ref(false);
  const isEditMode = ref(false)
  const editingTaskId = ref<string | null>(null);

  const taskForm = ref({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    columnId: "",
    status: ""
  });

  function resetForm() {
    taskForm.value = {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      columnId: "",
      status: ""
    };

    isEditMode.value = false;
    editingTaskId.value = null;
  }

  return {
    isOpen,
    taskForm,
    resetForm,
    isEditMode,
    editingTaskId
  };
});
