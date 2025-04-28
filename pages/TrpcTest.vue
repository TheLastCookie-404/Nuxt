<template>
  <div>
    <div>{{ hello?.greeting }}</div>
    <div>{{ test?.greeting }}</div>
  </div>
</template>

<script setup lang="ts">
  const { $trpc } = useNuxtApp();
  const { helloRouter, testRouter } = $trpc;

  const { data: hello } = await helloRouter.hello.useQuery({ text: "kek" });
  const { data: test } = await testRouter.test.useQuery({ text: "lol" });
</script>
