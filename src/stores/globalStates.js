import { defineStore } from "pinia";

export const useGlobalStatesStore = defineStore('globalStates', {
    state: () => {
        return {
            cartPopup: false
        }
    }
})