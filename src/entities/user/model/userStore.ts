import { defineStore } from "pinia";
import { ref } from "vue";

interface User {
    id?: number
    login: string,
    password: string
}

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    
    const setUser = (u: User) => {
        user.value = u      
        localStorage.setItem('user', JSON.stringify(user.value))  
    }

    const logOut = () => {
        user.value = null
        localStorage.removeItem('user')
    }
    
    return {
        user,
        setUser,
        logOut
    }
})