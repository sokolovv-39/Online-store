import { defineStore } from "pinia";

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            cartPopup: false,
            isSignIn: false,
            token: undefined,
            currentPath: '/',
            productsQuantity: 0,
            popupProd: null
        }
    }
})