<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header';

export default {
  name: 'app',
  components: {
    vHeader: header
  }
};
</script>

<style lang="sass">
@import '~mobi.css/dist/mobi.css';

#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

</style>
