<template>
  <div class="q-pa-sm bg-grey-2 q-rounded-lg shadow-md column q-gutter-sm full-height">
    <div class="text-subtitle2 text-weight-bold text-grey-8">
      {{ column.title }}
    </div>

    <!-- Тут будут задачи -->
  </div>
</template>

<script setup lang="ts">
defineProps<{ column: { id: string; title: string } }>()
</script>