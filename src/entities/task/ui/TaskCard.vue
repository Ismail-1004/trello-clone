<script setup lang="ts">
import { computed } from "vue";
import type { Task } from "../model/types";
import { useTasksStore } from "../model/taskStore";
import { useTaskFormStore } from "../model/taskFormStore";

const props = defineProps<{ task: Task }>();

const taskStore = useTasksStore();
const formStore = useTaskFormStore();

const statusColor = computed(() => {
  switch (props.task.status) {
    case "done":
      return "green";
    case "in_progress":
      return "blue";
    case "not_started":
      return "grey";
    default:
      return "orange";
  }
});

const formattedDate = computed(() =>
  new Date(props.task.dueDate).toLocaleDateString()
);

function handleDragStart(event: DragEvent) {
  event.dataTransfer?.setData("taskId", props.task.id);
}

function openEditModal() {
  formStore.isOpen = true;
  formStore.isEditMode = true;

  formStore.taskForm = {
    title: props.task.title,
    description: props.task.description,
    dueDate: props.task.dueDate,
    columnId: props.task.columnId,
    id: props.task.id,
    status: props.task.status,
  };
}

</script>

<template>
  <div
    class="q-card q-pa-md q-mb-sm shadow-2 q-rounded-borders bg-white"
    draggable="true"
    @dragstart="handleDragStart"
    style="cursor: grab"
  > 
    <div class="task__head">
      <div class="text-h6">{{ task.title }}</div>
      <q-btn dense flat round icon="edit" size="sm" @click="openEditModal" />
    </div>
    <div class="text-subtitle2 text-grey-7 q-mt-xs">{{ task.description }}</div>

    <div class="row justify-between q-mt-sm">
      <q-badge outline color="primary" :label="formattedDate" />
      <q-badge :color="statusColor">{{
        taskStore.statusLabelsMap[task.status]
      }}</q-badge>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.task__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
