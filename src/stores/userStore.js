import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            name: undefined,
            surname: undefined,
            email: undefined
        }
    }
})