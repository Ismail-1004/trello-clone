import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { watch } from "vue";
import { useQuasar } from "quasar";

type Theme = 'light' | 'dark';

export const useThemeModel = defineStore('themeModel', () => {
  const $q = useQuasar();
  const theme = useStorage<Theme>('theme', getSystemDefaultTheme());

  const applyTheme = (value: Theme) => {
    // Меняем класс на <html> (Tailwind)
    document.documentElement.classList.toggle('dark', value === 'dark');

    // Меняем тему в Quasar
    $q.dark.set(value === 'dark');
  };

  watch(theme, (newTheme) => {
    applyTheme(newTheme);
  }, { immediate: true });

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  const setTheme = (value: Theme) => {
    theme.value = value;
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
});

function getSystemDefaultTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}