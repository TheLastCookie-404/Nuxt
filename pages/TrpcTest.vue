<template>
  <div>
    <div>{{ hello?.greeting }}</div>
    <div>{{ test?.greeting }}</div>
  </div>
</template>

<script setup lang="ts">
  const { $trpc } = useNuxtApp();

  const { data: hello } = await $trpc.hello.useQuery({ text: "kek" });
  const { data: test } = await $trpc.test.useQuery({ text: "lol" });
</script>
