<template>
  <div class="bg-base-100 mb-3 p-1">
    <span>I`m parential component</span>
    <lol />
  </div>
  <RecursiveComponent :content="obj" />
</template>

<script setup>
import RecursiveComponent from '~/components/RecursiveComponent.vue'
const props = defineProps({
  lol: {
    type: Object,
    required: false
  }
});
const obj = {
  "lol": {
    1: "kek",
    "omg": {
      "oof": [1, 64, 34],
      9: "azaza"
    }
  }
};
</script>
