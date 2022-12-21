import { createRouter, createWebHistory } from "vue-router";
import MainPageComp from '@/components/pages/MainPageComp';
import SignUpPageComp from '@/components/pages/SignUpPageComp';
import SignInPageComp from "@/components/pages/SignInPageComp";
import CatalogPageComp from '@/components/pages/CatalogPageComp';
import ProductPage from '@/components/pages/ProductPage';
import CartPage from "./components/pages/CartPage.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPageComp,
            name: 'Home',
        },
        {
            path: '/sign_up',
            component: SignUpPageComp,
            name: 'sign_Up'
        },
        {
            path: '/sign_in',
            component: SignInPageComp,
            name: 'sign_in'
        },
        {
            path: '/catalog',
            component: CatalogPageComp,
            name: 'catalog'
        },
        {
            path: '/product/:id',
            component: ProductPage,
            name: 'product',
            props: true
        },
        {
            path: '/cart',
            component: CartPage,
            name: 'cart'
        }
    ]
})