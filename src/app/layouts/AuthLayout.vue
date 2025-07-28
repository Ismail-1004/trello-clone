<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2 full-height auth">
    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>