<template>
  <div>
    <div v-for="(elem, index) in content" :key="index">
      <div v-if="(typeof elem) == 'object'">
        <RecursiveComponent recursion :content="elem"/>
      </div>
      <div class="outline" v-else>{{ `${index}: ${elem}` }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    defult: {}
  }
});
</script>
