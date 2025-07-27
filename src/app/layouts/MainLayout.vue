<script setup>
import { Header } from "@/widgets/header";
</script>

<template>
  <q-layout view="hHh lpR fFf" class="main__layout">
    <Header />

    <q-page-container class="container main__layout-content">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.main__layout {
  display: flex;
  flex-direction: column;

  &-content {
    flex-grow: 1;
    padding: 0 !important;
  }
}
</style>