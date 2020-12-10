<template>
  <div id="app">
    <Headers></Headers>
    <router-view/>
  </div>
</template>

<script>
import Headers from "./components/Headers";
export default {
  name: 'App',
  components: {Headers}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
