import { defineStore } from "pinia"

export const useServerRequestsStore = defineStore('serverRequests', {
    actions: {
        getJSON(url) {
            return fetch(url, {
                credentials: 'include'
            })
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        postRequest(url, body) {
            return fetch(url, {
                method: 'POST',
                body: body,
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            })
        },
        authRequest(url, token) {
            return fetch(url, {
                headers: {
                    Authentication: `Bearer ${token}`
                },
            })
        },
        backgroundAuth() {
            return fetch('http://localhost:3000/api/auth/backgroundAuth', {
                credentials: "include"
            })
        },
        globalExit() {
            return fetch('http://localhost:3000/api/auth/globalExit', {
                credentials: 'include'
            })
        }
    }
})