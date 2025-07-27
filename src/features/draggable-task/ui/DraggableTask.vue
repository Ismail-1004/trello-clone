<script setup lang="ts">
import { TaskCard } from "@/entities/task";
import type { Task } from "@/entities/task/model/types";

const props = defineProps<{
  task: Task;
}>();

function handleDragStart(event: DragEvent) {
  event.dataTransfer?.setData("taskId", String(props.task.id));
}
</script>

<template>
  <div draggable="true" @dragstart="handleDragStart">
    <TaskCard :task="task" />
  </div>
</template>