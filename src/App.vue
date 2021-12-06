<template>
  <AppTopNavigator />
  <router-view id="router-view"/>
</template>

<script>
import AppTopNavigator from "./components/AppTopNavigator.vue";
import './App.css';
export default {
  name: "App",
  components: {
    AppTopNavigator
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}
</style>
