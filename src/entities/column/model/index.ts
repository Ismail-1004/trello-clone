import { defineStore } from "pinia";
import { ref } from "vue";

export type Column = {
    id: string;
    title: string
}

export const useColumnStore = defineStore('columns', () => {
    const columns = ref<Column[]>([
        { id: 'not_started', title: 'Не начато' },
        { id: 'in_progress', title: 'В процессе' },
        { id: 'done', title: 'Выполнено' },
    ])

    const addColumn = (title: string) => {
        columns.value.push({
            id: Date.now().toString(),
            title
        })
    }

    return {
        columns,
        addColumn
    }
})