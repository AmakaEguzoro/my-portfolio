<template>
  <div id="app">
    <navbar />
    <home />

    <router-view />
    <socials />
  </div>
</template>

<script>
import socials from "./pages/socials.vue";
import navbar from "./pages/navbar.vue";

export default {
  name: "app",
  components: {
    navbar,
    socials,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
