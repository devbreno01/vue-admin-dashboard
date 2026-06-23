

<script setup>
  import { ref } from 'vue';
  import Drawer from 'primevue/drawer';
  import Button from 'primevue/button';


  const visible = ref(true)
</script>
<template>
    <Drawer v-model:visible="visible" header="BrenoAdmin"  class="bg-sidebar!">
      <nav class="" >
          <ul class="sidebar-ul">
              <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-home ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Dashboard</a>
                  </router-link>
                
              </li>
               <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-box ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Products</a>
                  </router-link>
                
              </li>
              <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-folder ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Categories</a>
                  </router-link>
                
              </li>
              <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-shopping-bag ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Orders</a>
                  </router-link>
                
              </li>
              <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-user ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Users</a>
                  </router-link>
                
              </li>
               <li class="mb-4 h-12 flex items-center">
                <i class="pi pi-cog ml-3" style="font-size: 1rem;"></i>
                  <router-link to="/">
                    <a href="#" class="ml-2 text-lg">Settings</a>
                  </router-link>
                
              </li>
          </ul>
      </nav>
    </Drawer>

   <Button icon="pi pi-arrow-right" @click="visible = true" />
    <main>
      <p>tasdasdasd</p>
    </main>
</template>

<style scoped></style>
