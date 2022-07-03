import { defineStore } from "pinia"

export const useServerRequestsStore = defineStore('serverRequests', {
    actions: {
        getJSON(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        }
    }
})