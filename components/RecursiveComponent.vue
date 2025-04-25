<template>
  <div>
    <div v-for="(elem, index) in content" :key="index">
      <div v-if="(typeof elem) == 'object'">
        <RecursiveComponent recursion :content="elem"/>
      </div>
      <div v-else class="outline">{{ `${index}: ${elem}` }}</div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    content: {
      type: Object,
      defult: {}
    }
  });
</script>
