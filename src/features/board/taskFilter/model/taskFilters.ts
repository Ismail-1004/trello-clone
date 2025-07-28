import { defineStore } from 'pinia';

export const useTaskFiltersStore = defineStore('taskFilters', {
  state: () => ({
    sortByDeadline: 'asc' as 'asc' | 'desc',
    status: '' as '' | 'todo' | 'in-progress' | 'done', // пример статусов
  }),
  actions: {
    setSort(order: 'asc' | 'desc') {
      this.sortByDeadline = order;
    },
    setStatusFilter(status: '' | 'todo' | 'in-progress' | 'done') {
      this.status = status;
    },
  },
});