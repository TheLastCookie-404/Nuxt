<template>
  <div v-for="elem in content">
    <div v-if="(typeof elem) == 'object'">
      <RecursiveComponent recursion :content="elem"/>
    </div>
    <div class="outline" v-else>{{ elem }}</div>
  </div>
</template>

<script setup>
import RecursiveComponent from './RecursiveComponent.vue'
const props = defineProps({
  content: {
    type: Number,
    defult: 0
  }
});
</script>
