<template>
  <div
    class="q-pa-sm bg-white q-rounded-xl shadow-md column full-height border"
    :class="{ 'drag-over': isDraggingOver }"
    @dragover.prevent="handleDragOver"
    @dragenter="handleDragEnter"
    @drop="handleDrop"
  >
    <div
      class="text-subtitle2 text-weight-bold text-grey-8 q-pa-sm"
      style="border-bottom: 1px solid #e0e0e0;"
    >
      {{ column.title }}
    </div>

    <div class="q-gutter-sm q-pa-sm scroll">
      <slot />
      <div
        v-if="isDraggingOver"
        class="drop-zone flex flex-center q-mt-sm q-pa-md"
      >
        Перетащите задачу сюда
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '@/entities/task/model'

const props = defineProps<{ column: { id: string; title: string } }>()
const taskStore = useTasksStore()

const isDraggingOver = ref(false)
let dragOverTimeout: ReturnType<typeof setTimeout> | null = null

function handleDragEnter() {
  isDraggingOver.value = true
}

function handleDragOver() {
  if (dragOverTimeout) {
    clearTimeout(dragOverTimeout)
  }
  isDraggingOver.value = true

  dragOverTimeout = setTimeout(() => {
    isDraggingOver.value = false
  }, 150)
}

function handleDrop(event: DragEvent) {
  event.preventDefault()
  isDraggingOver.value = false

  const taskId = event.dataTransfer?.getData('taskId')
  if (taskId) {
    taskStore.moveTaskToColumn(taskId, props.column.id)
  }
}
</script>

<style scoped>
.drag-over {
  background-color: #e3f2fd;
  transition: background-color 0.2s;
}

.drop-zone {
  border: 2px dashed #1976d2;
  border-radius: 8px;
  color: #1976d2;
  background-color: #e3f2fd;
  font-weight: bold;
  text-align: center;
  min-height: 80px;
  transition: all 0.2s;
}

.border {
  border: 1px solid #e0e0e0;
}
</style>
