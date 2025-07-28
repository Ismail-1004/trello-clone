<script setup lang="ts">
import { useRouter } from "vue-router";
import { useLoginStore } from "@/features/auth/index";
import { Notify } from "quasar";

const { user, onSubmit } = useLoginStore();
const router = useRouter();

function handleSubmit() {
  const success = onSubmit();
  if (success) {
    router.push("/");
    Notify.create({
      type: "positive",
      message: "Успешный вход!",
    });
  }
}
</script>

<template>
  <q-card class="q-pa-lg q-mx-auto" style="min-width: 400px">
    <q-card-section>
      <div class="text-h6 text-center">Вход в систему</div>
    </q-card-section>

    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="user.login"
        label="Логин"
        lazy-rules
        :rules="[(val) => !!val || 'Введите логин']"
      />

      <q-input
        filled
        v-model="user.password"
        type="password"
        label="Пароль"
        lazy-rules
        :rules="[(val) => !!val || 'Введите пароль']"
      />

      <q-btn label="Войти" color="primary" type="submit" class="full-width" />
    </q-form>
  </q-card>
</template>
