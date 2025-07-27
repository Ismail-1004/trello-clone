<template>
  <div class="add-column q-pa-sm">
    <div v-if="isAdding">
      <q-input
        v-model="newTitle"
        dense
        filled
        autofocus
        placeholder="Название колонки"
        class="q-mb-sm"
      />
      <div class="row items-center q-gutter-sm">
        <q-btn
          label="Добавить"
          :color="buttonColor"
          :text-color="buttonTextColor"
          dense
          @click="handleAddColumn"
          :disable="!newTitle.trim()"
        />
        <q-btn icon="close" flat dense @click="cancel" />
      </div>
    </div>
    <q-btn
      v-else
      label="+ Добавить колонку"
      :color="buttonColor"
      :text-color="buttonTextColor"
      flat
      dense
      @click="isAdding = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useColumnStore } from "@/entities/column/model";

const columnStore = useColumnStore();

const $q = useQuasar();
const isAdding = ref(false);
const newTitle = ref("");

// Цвет кнопки в зависимости от темы
const buttonColor = computed(() => ($q.dark.isActive ? "grey-10" : "grey-3"));
const buttonTextColor = computed(() => ($q.dark.isActive ? "white" : "black"));

function handleAddColumn() {
  if (!newTitle.value.trim()) return;

  columnStore.addColumn(newTitle.value);

  newTitle.value = "";
  isAdding.value = false;  
}

function cancel() {
  newTitle.value = "";
  isAdding.value = false;
}
</script>

<style scoped>
.add-column {
  max-width: 300px;
  min-width: 250px;
  width: 100%;
}

@media (max-width: 600px) {
  .add-column {
    min-width: 100%;
    max-width: 100%;
  }
}
</style>
