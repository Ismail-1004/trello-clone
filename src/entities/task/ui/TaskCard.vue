<script setup lang="ts">
import { computed } from "vue";
import type { Task } from "../model/types";

const props = defineProps<{ task: Task }>();

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
</script>

<template>
  <div
    class="q-card q-pa-md q-mb-sm shadow-2 q-rounded-borders bg-white"
    draggable="true"
    @dragstart="handleDragStart"
    style="cursor: grab"
  >
    <div class="text-h6">{{ task.title }}</div>
    <div class="text-subtitle2 text-grey-7 q-mt-xs">{{ task.description }}</div>

    <div class="row justify-between q-mt-sm">
      <q-badge outline color="primary" :label="formattedDate" />
      <q-badge :color="statusColor">{{ task.status }}</q-badge>
    </div>
  </div>
</template>
