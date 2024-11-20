<template>
  <div class="p-6">
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <br>
    <p>
      <NuxtLink class="link link-primary" to="/">To home page</NuxtLink>
    </p>
    <div>{{ lol }}</div>
    <button :class="`btn ${style('btn-error', 'btn-success', button)}`" @click="button = !button">Button</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lol: 'x',
        button: false
      };
    },
    computed: {

    },
    watch: {

    },
    created () {
      this.route = useRoute();
    },
    methods: {
      style (style1, style2, btn) {
        return btn ? style1 : style2;
      }
    }

  };
</script>
