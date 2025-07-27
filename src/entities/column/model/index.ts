import { defineStore } from "pinia";
import { ref } from "vue";

export type Column = {
    id: string;
    title: string
}

export const useColumnStore = defineStore('columns', () => {
    const columns = ref<Column[]>([])

    const addColumn = (title: string) => {
        columns.value.push({
            id: Date.now().toString(),
            title
        })
    }

    const removeColumn = (id: string) => {
        columns.value = columns.value.filter(col => col.id !== id)
    }

    return {
        columns,
        addColumn,
        removeColumn
    }
})