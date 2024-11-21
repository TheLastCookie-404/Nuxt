<template>
  <div class="p-6">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <br>
    <p>
      <NuxtLink class="link link-primary" to="/">To home page</NuxtLink>
    </p>
    <br>
    <TypescriptDataTypesAndFunctions />
  </div> 
</template>

<script setup lang="ts">
  const route = useRoute();
</script>