<template>
  <div class="row q-gutter-md items-center">
    <q-select
      label="Сортировать по сроку"
      v-model="sortOrder"
      :options="[
        { label: 'По возрастанию', value: 'asc' },
        { label: 'По убыванию', value: 'desc' }
      ]"
      @update:model-value="filters.setSort"
      dense filled
    />

    <q-select
      label="Статус задачи"
      v-model="status"
      :options="[
        { label: 'Все', value: '' },
        { label: 'To do', value: 'todo' },
        { label: 'В процессе', value: 'in-progress' },
        { label: 'Сделано', value: 'done' }
      ]"
      @update:model-value="filters.setStatusFilter"
      dense filled
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskFiltersStore } from '../model/taskFilters';

const filters = useTaskFiltersStore();
const sortOrder = ref(filters.sortByDeadline);
const status = ref(filters.status);
</script>