
import { createRouter , createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import Products from "@/views/Products.vue";

const routes = [
    {
        path: '/', 
        name: 'dashboard', 
        component: Dashboard
    }, 

     {
        path: '/products', 
        name: 'products', 
        component: Products
    }, 
];

const router = createRouter({
    history: createWebHistory(), 
    routes

});

export default router; 