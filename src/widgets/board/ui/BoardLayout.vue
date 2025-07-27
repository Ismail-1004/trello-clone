<script setup>
import { AddColumnButton } from '@/features/board/add-column';
import { useColumnStore } from '@/entities/column/model'
import { useTasksStore } from '@/entities/task/model'
import { Column } from '@/entities/column'
import { DraggbleTask } from '@/features/draggable-task';

const columnStore = useColumnStore()
const taskStore = useTasksStore()
</script>

<template>
  <div class="q-pa-md">
    <div class="row wrap q-col-gutter-md q-gutter-sm items-start">
      <div
        v-for="column in columnStore.columns"
        :key="column.id"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <Column :column="column">
          <DraggbleTask
            v-for="task in taskStore.tasksByColumn(column.id)"
            :key="task.id"
            :task="task"
          />
        </Column>
      </div>

      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <AddColumnButton />
      </div>
    </div>
  </div>
</template>