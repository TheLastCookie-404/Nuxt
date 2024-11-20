<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome v-if="nuxtWelcomOpen" />
    <button 
      v-if="nuxtWelcomOpen" 
      class="btn btn-sm fixed top-6 right-6" 
      @click="nuxtWelcomOpen = false">Close</button>
    
    <div v-else>
      <div class="navbar bg-base-200">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Nuxt</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a @click.prevent="nuxtWelcomOpen = true">
                Nuxt hello
              </a>
            </li>
          </ul>
        </div>
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const nuxtWelcomOpen = ref(false);
</script>
