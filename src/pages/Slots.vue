<template>
  <div class="p-6">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <br>
    <p>
      <NuxtLink class="link link-primary" to="/">To home page</NuxtLink>
    </p>
    <Slot>Hey im in</Slot>
  </div>
</template>

<script setup>
  const route = useRoute();
</script>