<template>
  <div class="p-6">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <br/>
    <p>
      <NuxtLink class="link link-primary" to="/">To home page</NuxtLink>
    </p>
    <div class="w-fit my-3 p-4 bg-base-200 rounded-box">
      <span v-for="elem in parseObject(obj)">{{ elem }}, </span>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import parseObject from '~/scripts/parse';

const route = useRoute();
const obj = ref({
  0: 123, 
  1: {
    0: 32, 
    1: 534, 
    2: [
      91, {
        1: 52, 
        2: [43]
      }
    ]
  }, 
  3: 123
});

const parsedArray = ref([]);

</script>