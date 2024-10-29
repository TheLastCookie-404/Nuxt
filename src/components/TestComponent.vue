<template>
  <div class="bg-base-100 p-1">
    <span>I`m parential component</span>
    <lol />
  </div>
</template>

<script setup>
const props = defineProps({
  lol: {
    type: Object,
    required: false
  }
});
</script>