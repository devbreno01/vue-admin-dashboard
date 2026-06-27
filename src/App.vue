

<script setup>
  import { ref } from 'vue';
  import Drawer from 'primevue/drawer';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';

  const visible = ref(true)
  const value = ref('')
</script>


<template>
  
  <div class="flex h-screen bg-background">
    
    <aside class="w-64 bg-sidebar flex-shrink-0 flex flex-col  p-4 ">
      <div class="flex items-center mb-2 ">
          <i class="pi pi-box text-primary ml-3" style="font-size: 1.5rem;"></i>
          <label class="p-4 text-xl font-bold">BrenoAdmin</label>
      </div>
      <nav class="">
        <ul>
           <li class="mb-4 h-12 flex items-center rounded cursor-pointer"
                :class="{ 'bg-primary': $route.path === '/' }">
              <i class="pi pi-home ml-3" style="font-size: 1rem;"></i>
              <router-link to="/" class="ml-2 text-lg" exact-active-class="text-white font-bold">Dashboard</router-link>
            </li>

          <li class="mb-4 h-12 flex items-center rounded cursor-pointer" 
          :class="{ 'bg-primary': $route.path === '/products' }">
            <i class="pi pi-box ml-3" style="font-size: 1rem;"></i>
            <router-link to="/products" class="ml-2 text-lg" exact-active-class="text-white font-bold">Products</router-link>
          </li>

           <li class="mb-4 h-12 flex items-center rounded cursor-pointer" 
          :class="{ 'bg-primary': $route.path === '/categories' }">
            <i class="pi pi-bars ml-3" style="font-size: 1rem;"></i>
            <router-link to="/categories" class="ml-2 text-lg" exact-active-class="text-white font-bold">Categories</router-link>
          </li>

           <li class="mb-4 h-12 flex items-center rounded cursor-pointer" 
          :class="{ 'bg-primary': $route.path === '/orders' }">
            <i class="pi pi-shop ml-3" style="font-size: 1rem;"></i>
            <router-link to="/orders" class="ml-2 text-lg" exact-active-class="text-white font-bold">Orders</router-link>
          </li>

          <li class="mb-4 h-12 flex items-center rounded cursor-pointer" 
          :class="{ 'bg-primary': $route.path === '/users' }">
            <i class="pi pi-users ml-3" style="font-size: 1rem;"></i>
            <router-link to="/users" class="ml-2 text-lg" exact-active-class="text-white font-bold">Users</router-link>
          </li>
         
        </ul>
      </nav>
    </aside>
    
    <div class="flex flex-col flex-1">
      <header class="h-16 border-b border-blue-500 flex items-center px-6 bg-surface">
        <h2 class="text-black">Header</h2>

        <div class="flex flex-row relative ">
          <i class="pi pi-bell" style="color: black; font-size: 1rem;"></i>
            <form action="">
              <InputText class="bg-surface! !text-black" type="text" v-model="value" />
            </form>
             <i class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </header>

     
      <main class="flex-1 overflow-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
