<script setup>
import AddTaskModal from './AddTaskModal.vue'
import { useTaskFormStore } from '@/entities/task/model'

const formStore = useTaskFormStore()
</script>

<template>
  <div>
    <q-btn class="navigation__btn" icon="add" label="Добавить" unelevated @click="formStore.isOpen = true" />
    <AddTaskModal />
  </div>
</template>