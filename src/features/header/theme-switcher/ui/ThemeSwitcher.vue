<template>
  <q-btn 
    dense 
    flat 
    :icon="themeStore.theme === 'dark' ? 'dark_mode' : 'light_mode'" 
    @click="themeStore.toggleTheme"
    :aria-label="themeStore.theme === 'dark' ? 'Тёмная тема' : 'Светлая тема'" 
    class="navigation__btn"
  />
</template>

<script setup lang="ts">
import { useThemeModel } from '@/entities/theme';

const themeStore = useThemeModel();
</script>