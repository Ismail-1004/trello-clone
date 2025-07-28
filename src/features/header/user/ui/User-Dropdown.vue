<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/entities/user";

defineProps<{ user: { login: string, password: string } | null }>()

const userStore = useUserStore()
const router = useRouter()

const onExit = () => {
  userStore.logOut()
  router.push('/login')
}
</script>

<template>
  <q-btn-dropdown class="navigation__btn" flat :label="`👤 ${user?.login}`">
    <q-list>
      <q-item clickable>
        <q-item-section @click="onExit">Выход</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
