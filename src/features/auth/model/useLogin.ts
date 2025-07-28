import { defineStore } from 'pinia'
import { useUserStore } from "@/entities/user";
import { ref } from "vue";

export const useLoginStore = defineStore('login', () => {
    const user = ref({
        login: '',
        password: '',
    })

    const userStore = useUserStore()

    function onSubmit () {
        if (!user.value.login || !user.value.password) {
            return alert('Ввдеит логин и пароль!')
        }

        userStore.setUser({
            id: Date.now(),
            login: user.value.login,
            password: user.value.password
        })

        return true
    }

    return {
        user,
        onSubmit
    }
})