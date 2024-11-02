<template>
  <div class="p-6">
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <p>
      <!-- <NuxtLink class="link link-primary"></NuxtLink> -->
      <br/>
      <NuxtLink class="link link-primary" to="/nestedarrparse">To Nested array parse</NuxtLink>
      <br/>
      <NuxtLink class="link link-primary" to="/componenttesting">To Component testing</NuxtLink>
      <br/>
      <NuxtLink class="link link-primary" to="/options">To Options</NuxtLink>
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

