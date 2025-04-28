<template>
  <div class="p-6">
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    <p>
      <!-- <NuxtLink class="link link-primary"></NuxtLink> -->
      <br />
      <NuxtLink class="link link-primary" to="/nestedarrparse">To Nested array parse</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/componenttesting">To Component testing</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/options">To Options</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/typescript">To TypeScript</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/slots">To Slots</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/trpctest">To Trpc</NuxtLink>
      <br />
      <NuxtLink class="link link-primary" to="/scrollanimate">To Scroll animate</NuxtLink>
    </p>
    <br />
    <img class="w-10 h-10" :src="`/${imgPath}`" />
  </div>
</template>

<script setup>
  const route = useRoute();
  const imgPath = "arasaka.png";
</script>
