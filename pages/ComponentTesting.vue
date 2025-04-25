<template>
  <div class="p-6">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <br>
    <p>
      <NuxtLink class="link link-primary" to="/">To home page</NuxtLink>
    </p>
    <div class="w-fit my-3 p-4 bg-base-200 rounded-box">
      <TestComponent :lol="TestComponentHtml">asdasd</TestComponent>
    </div>
  </div>
</template>

<script setup>
  import TestComponent from '~/components/TestComponent.vue';
  import TestComponentHtml from '~/components/TestComponentHtml.vue';
  const route = useRoute();
</script>