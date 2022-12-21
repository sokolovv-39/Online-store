<template>
    <div v-if="isRegistered" class="wrapper">
        <h1>Вы успешно зарегестрированы!</h1>
        <router-link to="/" class="main-route">Перейти на сайт</router-link>
    </div>
    <div v-else>
        <form id="form" action="http://localhost:3000/api/auth/signup" method="post" @submit="sendForm">
            <h1>Registration on the <span>BrandShop</span></h1>
            <p>Register in the online store and buy branded clothing with worldwide delivery!</p>
            <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
            <fieldset>
                <ul>
                    <li>
                        <label for="name">
                            <span>Name</span>
                            <strong><abbr title="required">*</abbr></strong>
                        </label>
                        <input type="text" id="name" name="name" required>
                    </li>
                    <li>
                        <label for="surname">
                            <span>Surname</span>
                            <strong><abbr title="required">*</abbr></strong>
                        </label>
                        <input type="text" id="surname" name="surname" required>
                    </li>
                    <li>
                        <label for="email">
                            <span>E-mail</span>
                            <strong><abbr title="required">*</abbr></strong>
                        </label>
                        <input type="email" id="email" name="email" required>
                    </li>
                    <li>
                        <label for="pwd">
                            <span>Create password</span>
                            <strong><abbr title="required">*</abbr></strong>
                        </label>
                        <input type="password" id="pwd" name="password" required>
                    </li>
                    <li>
                        <label for="repeat-pwd">
                            <span>Repeat password</span>
                            <strong><abbr title="required">*</abbr></strong>
                        </label>
                        <input type="password" id="repeat-pwd" name="repeat-password" required>
                    </li>
                </ul>
            </fieldset>
            <p>
                <button type="submit">Register</button>
            </p>
        </form>
        <p v-if="!isMatch" class="match-pwds">Пароли не совпадают</p>
        <p>Already registered? <router-link to="/sign_in" class="non-dec">Sign in</router-link></p>
        <router-link to="/" class="non-dec">Go home</router-link>
    </div>
</template>

<script setup>
import { useServerRequestsStore } from "@/stores/serverRequests.js";
import { useGlobalStore } from "@/stores/globalStore.js";
import { useUserStore } from "@/stores/userStore.js";
import { ref } from "vue";

const globalStore = useGlobalStore();
const isMatch = ref(true);
const serverRequests = useServerRequestsStore();
const userStore = useUserStore();
let isRegistered = ref(false)
async function sendForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (formData.get('password') !== formData.get('repeat-password')) {
        isMatch.value = false;
        return
    }
    else {
        let response = await serverRequests.postRequest(event.target.action, new URLSearchParams(new FormData(event.target)));
        if (response.ok) {
            const userData = await response.json();
            globalStore.isSignIn = true;
            globalStore.token = userData.userToken;
            userStore.$patch({
                name: userData.name,
                surname: userData.surname,
                email: userData.email
            })
            isRegistered.value = true
        }
    }
}
</script>

<style scoped lang="scss">
.match-pwds {
    color: red;
}

.wrapper {
    display: flex;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main-route {
        padding-top: 1%;
    }
}

.non-dec {
    text-decoration: none;
}
</style>