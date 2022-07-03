import { defineStore } from "pinia";

export const useCartPopupStore = defineStore('cartPopup', {
    state: () => {
        return {
            title: undefined,
            price: undefined,
            image: undefined
        }
    }
})