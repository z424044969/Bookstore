<template>
  <div id="app">
    <Top></Top>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top'
export default {
  name: 'App',
  components: {
    Top
  }
}

</script>

<style>
body{
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
