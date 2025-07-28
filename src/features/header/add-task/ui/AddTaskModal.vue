<script setup lang="ts">
import { computed } from "vue";
import { uid } from "quasar";
import { useTaskFormStore } from "@/entities/task/model";
import { useTasksStore } from "@/entities/task/model";
import { useColumnStore } from "@/entities/column/model";
import { Notify } from 'quasar'

const formStore = useTaskFormStore();
const tasksStore = useTasksStore();
const columnStore = useColumnStore();

const columnsOptions = computed(() =>
  columnStore.columns.map((col) => ({
    label: col.title,
    value: col.id,
  }))
);

const handleSubmitTask = () => {
  const { id, title, description, dueDate, columnId, status } = formStore.taskForm;

  if (!title.trim() || !columnId.trim() || !description.trim()) {
    Notify.create({
      type: 'negative',
      message: 'Пожалуйста, заполните все обязательные поля.',
    });
    return;
  }

  const selectedColumn = columnStore.columns.find((col) => col.id === columnId);  

  if (formStore.isEditMode) {
    tasksStore.updateTask({
      id,
      title,
      description,
      dueDate,
      columnId,
      status: selectedColumn?.id || 'not_started',
    });

    Notify.create({
      type: 'positive',
      message: 'Задача успешно обновлена!',
    });
  } else {
    tasksStore.addTask({
      id: uid(),
      title,
      description,
      dueDate,
      columnId,
      status: selectedColumn?.id || 'not_started',
    });

    Notify.create({
      type: 'positive',
      message: 'Задача успешно добавлена!',
    });
  }

  formStore.resetForm();
  formStore.isOpen = false;
  formStore.isEditMode = false;
};
</script>

<template>
  <q-dialog v-model="formStore.isOpen">
    <q-card class="q-pa-md" style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">Добавить задачу</div>
      </q-card-section>

      <q-card-section class="q-gutter-md">
        <q-input
          v-model="formStore.taskForm.title"
          label="Заголовок"
          dense
          outlined
        />
        <q-input
          v-model="formStore.taskForm.description"
          label="Описание"
          type="textarea"
          dense
          outlined
        />
        <q-input
          v-model="formStore.taskForm.dueDate"
          label="Крайний срок"
          type="date"
          dense
          outlined
        />
        <q-select
          v-model="formStore.taskForm.columnId"
          :options="columnsOptions"
          label="Выберите колонку"
          dense
          outlined
          emit-value
          map-options
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Отмена"
          color="grey"
          @click="formStore.isOpen = false"
        />
        <q-btn flat label="Добавить" color="primary" @click="handleSubmitTask" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
