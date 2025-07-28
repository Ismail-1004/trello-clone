<script setup lang="ts">
import { onMounted, ref } from "vue";

import { UserDropdown } from "@/features/header/user";
import { AddTaskButton } from "@/features/header/add-task";
import { ThemeSwitcher } from "@/features/header/theme-switcher";

import { useColumnStore } from '@/entities/column/model'

const columnStore = useColumnStore()

const storedUser = ref<{ id: string, login: string, password: string } | null>(null)

onMounted(() => {
  const stored = localStorage.getItem('user')
  storedUser.value = stored ? JSON.parse(stored) : null
})
</script>

<template>
  <q-header class="header">
    <q-toolbar class="header__nav container">
      <q-toolbar-title class="cursor-pointer" @click="$router.push('/')">
        🏗️ TaskBoard
      </q-toolbar-title>
      <div class="header__nav-btns">
        <AddTaskButton v-if="columnStore.columns.length" />
        <UserDropdown :user="storedUser" />
        <ThemeSwitcher />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px 0;
  position: static;

  background: #0079bf;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  &__nav {
    display: flex;
    align-items: center;

    &-btns {
        display: flex;
        gap: 20px;
    }
  }
}
</style>
