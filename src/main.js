import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faChevronRight,
    faTrash,
    faChevronLeft,
    faCircleXmark,
    faCaretDown,
    faMagnifyingGlass,
    faArrowRight
}
    from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,
    faChevronRight,
    faChevronLeft,
    faCircleXmark,
    faCaretDown,
    faMagnifyingGlass,
    faArrowRight);
const pinia = createPinia()
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.mount('#app')
